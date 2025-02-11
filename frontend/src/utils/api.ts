import {requests} from './requests.ts'
import {type LogType, useLoggerStore} from "@/store/logger.ts";
import {useUserStore} from "@/store/user.ts";
import {
    type EndlessAttack,
    type EndlessBuy,
    type HyperBossAttack,
    type LevelAttack,
    type PeriodAttack,
    type PvpAttack,
    useSettingStore
} from "@/store/setting.ts";
import {gain as Gain} from "@/utils/gain.ts";
import common from "@/utils/common.ts";
import {PAYLOADS} from "@/payloads";
import {action} from "@/utils/action.ts";
import {useBinStore} from "@/store/bin.ts";
import {message} from "ant-design-vue";
// @ts-ignore
import {ns} from '@/lib/ns.js'
// @ts-ignore
import TextCoder from "@/lib/TextCoder";


//@source-ignore: getMode(type: string) => number

const _getBinStore = () => {
    return useBinStore()
}

const log = (type: LogType, msg: string, color?: string | undefined ,icon?: { url: string, url2: string } | undefined) => {
    const {log} = useLoggerStore()
    log(type, msg, color, icon)
}

/**
 * 显示奖励，传入gain文本
 * @param gain
 */
const _logGain = (gain: string) : number => {
    // 部分关卡返回金币奖励以#分割
    let exp_num: number = 0
    const _gain = gain.replace(/#/g, ',')
    const gain_json_array = Gain.gain2jsonarray(_gain)
    gain_json_array.map((g) => {
        if (g.name.includes('残骸')) {
            exp_num ++
        }
        log('success', `${g.name} x ${g.num}`, g.color, g.icon)
    })
    return exp_num
}

const _getTwoGain = async (arg: number, exp: number, is_hero: boolean = false) => {
    if(arg<=0)return
    if(arg==2&&exp<3)return
    log('processing', `开始领取双倍奖励`)
    const payload = PAYLOADS['level']['two']
    if(is_hero) payload.mode = 3
    let result = await requests.pf(payload)
    if (result.head.state == 0) {
        log('success', `领取双倍奖励成功`)
        _logGain(result.head.gain)
    } else {
        log('error', `领取双倍奖励失败:${result.head.msg}`)
    }
}

const _attackNormal = async (args: LevelAttack) => {
    const type: "hero" | "normal" | "endless" | "boss" | "period" | "hyperboss" | "expedition" = args.is_hero?'hero':'normal'
    for (let i = 0; i < args.num; i++) {
        log('processing', `开始攻打关卡:${args.level}`)
        const joinGame = PAYLOADS['joinGame']
        const levelArray = common.generateLevel(args.level, args.is_hero?2:8)
        args.is_hero?joinGame.type = 3:joinGame.type = 0
        joinGame.id = levelArray[0]
        joinGame.subId = levelArray[1]
        let result = await requests.pf(joinGame)
        if (result.head.state != 0) {
            log('error', `进入关卡失败:${result.head.msg}`)
            break
        }
        let bossArray = common.getBossCount(args.level)
        if (args.level == 96 || args.is_hero) bossArray = [2, 1, 1]
        if (args.level == 24 && args.is_hero) bossArray = [3, 2, 1]
        //@source-ignore
        //ns.enc.anti_104_1(null, null)
        let len: number = 0


        // 部分分多波
        if (args.level == 96 || args.is_hero) {
            const load = PAYLOADS['level']['load']
            const actionInfos: any[] = result.actions
            len = actionInfos.length + len
            load.totalWave = len
            load.totalAction = len
            load.actionIndex = len
            load.actionTag = action.getActionTag(0, actionInfos, _getBinStore().binData[`stage_${type}_${levelArray[0]}_stage-${levelArray[1]}_data`], type)
            load.scoreMap = common.getScoreMap(load.score)
            await common.sleep(args.attack_timer * 1000)
            result = await requests.pf(load)
            if (result.head.state != 0) {
                log('error', `攻打失败:${result.head.msg}`)
                break
            }
        }

        //@source-ignore
        //ns.enc.anti_104_64_256(false);

        const end = PAYLOADS['level']['end']
        const actionInfos: any[] = result.actions
        end.bossCount = bossArray[0]
        end.bossSmall = bossArray[1]
        end.bossLarge = bossArray[2]
        end.actionTag = action.getActionTag(len, actionInfos, _getBinStore().binData[`stage_${type}_${levelArray[0]}_stage-${levelArray[1]}_data`], type)
        end.scoreMap = common.getScoreMap(end.score)
        len = actionInfos.length + len
        end.totalWave = len
        end.totalAction = len
        end.actionIndex = len
        await common.sleep(args.attack_timer * 1000)
        result = await requests.pf(end)
        if (result.head.state == 0) {
            log('success', `攻打成功`)
            const exp: number = _logGain(result.head.gain)
            await _getTwoGain(args.two_gain, exp, args.is_hero)
        }else{
            log('error', `攻打失败:${result.head.msg}`)
            break
        }
        await common.sleep(args.sleeps)
    }
}


export const api: Record<string, any> = {

    /**
     * 寻宝转盘
     */
    dailyWheelReward: async (args: { num: number }) => {
        for (let i = 0; i < args.num; i++) {
            log('processing', `寻宝转盘第${i + 1}次`)
            const payload = PAYLOADS['dailyWheelReward']
            let result = await requests.pf(payload)
            if (result.head.state == 0) {
                log('success', `寻宝转盘成功`)
                _logGain(result.head.gain)
            } else {
                log('error', `寻宝转盘失败:${result.head.msg}`)
                break
            }
        }
        log('processing', `寻宝转盘结束`)
    },

    /**
     * 装备宝箱
     * @param args
     */
    dailyEquipBoxReward: async (args: { num: number, type: number }) => {
        async function exec(num: number) {
            let execNum = 0;
            if (num < 10 && num > 0) {
                execNum = 1;
            } else if (num >= 10) {
                execNum = 10;
            }
            if (execNum === 0) {
                return;
            }
            log('processing', `本次开启${execNum}个宝箱,剩余${num}次等待开启中`);
            const payload = PAYLOADS['dailyEquipBoxReward'];
            payload.sdTargetData.num = execNum;
            payload.sdTargetData.sd_id = args.type;
            let result = await requests.pf(payload);
            if (result.head.state === 0) {
                log('success', `开启成功`);
                _logGain(result.head.gain);
            } else {
                log('error', `开启失败:${result.head.msg}`);
                return;
            }
            await common.sleep(1000);
            await exec(num - execNum);
        }

        await exec(args.num);
    },

    /**
     * 刷新用户信息
     */
    refreshUserInfo: async (args: {auto: boolean} = { auto: false }) => {
        const userStore = useUserStore()
        const payload = PAYLOADS['refreshUserInfo']
        let result = await requests.pf(payload)
        if (result.head.state == 0) {
            userStore.setUser(result)
            log('success', `刷新用户信息成功`)
            if (args.auto) {
                message.success(`登录成功`)
            }
            return true
        } else {
            log('error', `刷新用户信息失败:${result.head.msg}`)
            return false
        }
    },

    /**
     * 每日商店免费
     */
    dailyShopFree: async () => {
        const payloads: { name: string, num: number, data: any }[] = PAYLOADS['dailyShopFree']
        log('processing', `开始领取商店广告资源`)
        for (const payload of payloads) {
            log('processing', `开始领取${payload.name}`)
            for (let i = 0; i < payload.num; i++) {
                log('processing', `领取${payload.name}第${i + 1}次`)
                let result = await requests.pf(payload.data)
                if (result.head.state == 0) {
                    log('success', `领取${payload.name}成功`)
                    _logGain(result.head.gain)
                } else {
                    // 领取失败，跳出循环
                    result.head.state == 164 ? log('error', `领取${payload.name}失败:无领取次数`) : log('error', `领取${payload.name}失败:${result.head.msg}`)
                    break
                }
                await common.sleep(1000)
            }
            await common.sleep(1000)
        }
        log('processing', `领取商店广告资源结束`)
    },

    /**
     * 每日广告体力
     */
    dailyEnergyReward: async (args: { num: number }) => {
        const payload = PAYLOADS['dailyEnergyReward']
        log('processing', `开始领取每日广告体力`)
        for (let i = 0; i < args.num; i++) {
            log('processing', `领取每日广告体力第${i + 1}次`)
            let result = await requests.pf(payload)
            if (result.head.state == 0) {
                log('success', `领取每日广告体力成功`)
                _logGain(result.head.gain)
            } else {
                result.head.state == 164 ? log('error', `领取每日广告体力失败:无领取次数`) : log('error', `领取每日广告体力失败:${result.head.msg}`)
                break
            }
            await common.sleep(1000)
        }
    },

    /**
     * 寻宝装备宝箱
     */
    dailyEquipReward: async () => {
        const payloads = PAYLOADS['dailyEquipReward']
        log('processing', `开始领取寻宝装备宝箱`)
        for (const payload of payloads) {
            log('processing', `开始领取${payload.name}`)
            let result = await requests.pf(payload.data)
            if (result.head.state == 0) {
                log('success', `领取${payload.name}成功`)
                _logGain(result.head.gain)
            } else {
                result.head.state == 72 ? log('error', `领取${payload.name}失败:无领取次数`) : log('error', `领取${payload.name}失败:${result.head.msg}`)
            }
            await common.sleep(1000)
        }
    },

    /**
     * 星际探索
     */
    dailyExploreReward: async () => {
        const payloads = PAYLOADS['dailyExploreReward']
        log('processing', `开始领取星际探索`)
        for (const payload of payloads) {
            log('processing', `开始领取${payload.name}`)
            for (let i = 0; i < payload.num; i++) {
                log('processing', `领取${payload.name}第${i + 1}次`)
                let result = await requests.pf(payload.data)
                if (result.head.state == 0) {
                    log('success', `领取${payload.name}成功`)
                    _logGain(result.head.gain)
                } else {
                    (result.head.state == 67 || result.head.state == 155) ? log('error', `领取${payload.name}失败:无领取次数`) : log('error', `领取${payload.name}失败:${result.head.msg}`)
                    break
                }
                await common.sleep(1000)
            }
            await common.sleep(1000)
        }
    },

    /**
     * 发送弹幕20钻石
     */
    sendDanMu: async () => {
        const payload = PAYLOADS['sendDanMu']
        log('processing', `开始发送弹幕`)
        let result = await requests.pf(payload)
        if (result.head.state == 0) {
            log('success', `发送弹幕成功`)
            _logGain(result.head.gain)
        } else {
            log('error', `发送弹幕失败:${result.head.msg}`)
        }
    },

    /**
     * 桌面启动钻石
     */
    desktopStart: async () => {
        const payload = PAYLOADS['desktopStart']
        log('processing', `开始领取桌面启动钻石`)
        let result = await requests.pf(payload)
        if (result.head.state == 0) {
            log('success', `领取成功`)
            _logGain(result.head.gain)
        } else {
            log('error', `领取失败:${result.head.msg}`)
        }
    },

    /**
     * 助战金币领取
     */
    dailyHelpGold: async () => {
        const payload = PAYLOADS['dailyHelpGold']
        log('processing', `开始领取助战金币`)
        let result = await requests.pf(payload)
        if (result.head.state == 0) {
            log('success', `领取成功`)
            _logGain(result.head.gain)
        } else {
            log('error', `领取失败:${result.head.msg}`)
        }
    },

    /**
     * 奖励-无尽宝箱x3
     */
    activeEndlessReward: async () => {
        const ids = [71, 72, 73]
        for (const id of ids) {
            const payload = PAYLOADS['activeEndlessReward']
            payload.id = id
            log('processing', `开始领取无尽宝箱:${id}`)
            let result = await requests.pf(payload)
            if (result.head.state == 0) {
                log('success', `领取成功`)
                _logGain(result.head.gain)
            } else {
                log('error', `领取失败:${result.head.msg}`)
            }
            await common.sleep(1000)
        }
    },

    /**
     * 奖励-体力x100
     */
    activeEnergyReward: async () => {
        const payload = PAYLOADS['activeEnergyReward']
        log('processing', `开始领取体力x100`)
        let result = await requests.pf(payload)
        if (result.head.state == 0) {
            log('success', `领取成功`)
            _logGain(result.head.gain)
        } else {
            log('error', `领取失败:${result.head.msg}`)
        }
    },

    /**
     * 活跃度5档
     */
    activeReward: async () => {
        const indexS = [0, 1, 2, 3, 4]
        for (const index of indexS) {
            const payload = PAYLOADS['activeReward']
            payload.index = index
            log('processing', `开始领取活跃度:${index + 1}`)
            let result = await requests.pf(payload)
            if (result.head.state == 0) {
                log('success', `领取成功`)
                _logGain(result.head.gain)
            } else {
                log('error', `领取失败:${result.head.msg}`)
            }
            await common.sleep(1000)
        }
    },

    /**
     * VIP每日奖励
     */
    dailyVipReward: async (args: {level: number}) => {
        const ids = [100, 104, 105, 101, 106, 102, 103, 107]
        if (args.level > ids.length) {
            args.level = ids.length
        }
        if (args.level < 1) {
            args.level = 1
        }
        for (let i = 0; i < args.level; i++) {
            const id = ids[i]
            const payload = PAYLOADS['dailyVipReward']
            payload.id = id
            log('processing', `开始领取VIP每日奖励:${i+1}`)
            let result = await requests.pf(payload)
            if (result.head.state == 0) {
                log('success', `领取成功`)
                _logGain(result.head.gain)
            } else {
                log('error', `领取失败:${result.head.msg}`)
            }
            await common.sleep(1000)
        }
    },

    /**
     * CDK兑换
     */
    cdkDo: async () => {
        const settingStore = useSettingStore()
        const payload = PAYLOADS['cdkDo']
        let cdkS = settingStore.cdk.split('\n')
        // 去除已使用
        cdkS = cdkS.filter(cdk => !settingStore.usedCdk.includes(cdk))
        for (const cdk of cdkS){
            if (!cdk || cdk.length == 0) {
                continue
            }
            log('processing', `开始兑换:${cdk}`)
            payload.cdkeyCode = cdk
            let result = await requests.pf(payload)
            if (result.head.state == 0) {
                settingStore.usedCdk.push(cdk)
                log('success', `兑换成功`)
                _logGain(result.head.gain)
            } else {
                log('error', `兑换失败:${result.head.msg}`)
            }
            await common.sleep(1000)
        }
    },

    /**
     * 闯关攻打
     */
    levelAttack: async (args: LevelAttack) => {
        if(args.num < 0) args.num = 1
        await _attackNormal(args)
    },

    /**
     * 闯关扫荡
     */
    levelSweep: async (args: LevelAttack) => {
        const userStore = useUserStore()
        const sweepId = userStore.getSweepId()
        if(!sweepId) {
            log('error', `扫荡失败:无法获取到扫荡卡数据`)
            return
        }
        if(args.num != 1) args.num = 1
        for (let i = 0; i < args.num; i++) {
            log('processing', `开始扫荡关卡:${args.level}`)
            const payload = PAYLOADS['level']['sweep']
            const levelArray = common.generateLevel(args.level, args.is_hero?2:8)
            payload.id = levelArray[0]
            payload.subId = levelArray[1]
            payload.sweepCardId = sweepId
            payload.type = args.is_hero?3:0
            const result = await requests.pf(payload)
            if (result.head.state == 0) {
                log('success', `扫荡成功`)
                const exp: number = _logGain(result.head.gain)
                await _getTwoGain(args.two_gain, exp, args.is_hero)
                await common.sleep(1000)
            } else {
                log('error', `扫荡失败:${result.head.msg}`)
                break
            }
        }
    },

    /**
     * 无尽攻打
     */
    endlessAttack: async (args: EndlessAttack) => {
        if(args.num < 0) args.num = 1
        log('processing', `开始攻打无尽`)
        for (let i = 0; i < args.num; i++) {
            const joinGame = PAYLOADS['joinGame']
            joinGame.type = 1
            joinGame.id = 0
            joinGame.subId = 0
            let result = await requests.pf(joinGame)
            if (result.head.state != 0) {
                log('error', `进入无尽失败:${result.head.msg}`)
                break
            }
            //@source-ignore
            //ns.enc.anti_104_1(null, null)
            const load = PAYLOADS['endless']['load']
            let actionInfos: any[] = result.actions
            const actionTag = action.getActionTag(0, actionInfos, _getBinStore().binData['stage_endless_0_stage-0_data'], 'endless')
            load.actionTag = actionTag
            load.bossReward = args.reward_num

            await common.sleep(args.attack_timer * 1000)
            result = await requests.pf(load)
            if (result.head.state != 0) {
                log('error', `攻打失败:${result.head.msg}`)
                break
            }
            const end = PAYLOADS['endless']['end']
            actionInfos = result.actions
            end.actionTag = actionTag
            end.bossReward = args.reward_num

            await common.sleep(1000)
            result = await requests.pf(end)
            if (result.head.state == 0) {
                log('success', `攻打成功`)
                _logGain(result.head.gain)
            }else{
                log('error', `攻打失败:${result.head.msg}`)
                break
            }
            await common.sleep(args.sleeps)
        }
    },

    /**
     * 购买无尽道具
     */
    buyEndlessItem: async (args: EndlessBuy) => {
        if(args.num < 0) args.num = 1
        const payload = PAYLOADS['endless']['buy']
        payload.sdTargetData.sd_id = args.id
        payload.sdTargetData.num = args.num
        let result = await requests.pf(payload)
        if (result.head.state == 0) {
            log('success', `购买成功`)
            _logGain(result.head.gain)
        } else {
            log('error', `购买失败:${result.head.msg}`)
        }
    },

    /**
     * PVP
     */
    pvpAttack: async (args: PvpAttack) => {
        if(args.done_num < 0) args.done_num = 1
        if(args.max_fail_num < 0) args.max_fail_num = 1
        log('processing', `开始PVP`)
        let failNum = 0
        let doneNum = 0
        for (let i = 0; i < args.done_num; i++) {
            if (failNum > args.max_fail_num) {
                log('processing', `本次共完成${doneNum}次`)
                log('error', `超出最大失败次数`)
                break
            }
            const startMatch = PAYLOADS['pvp']['match']
            let result = await requests.pf(startMatch)
            if (result.head.state != 0) {
                failNum++
                log('error', `开始匹配失败:${result.head.msg}`)
                continue
            }
            let isCheckSuccess = false;
            for (let o = 0; o < 15; o++) {
                const check = PAYLOADS['pvp']['check']
                result = await requests.pf(check)
                if (result.head.state == 0) {
                    isCheckSuccess = true
                    log('success', `匹配成功`)
                    break
                }
                await common.sleep(1000)
            }
            if (!isCheckSuccess) {
                failNum++
                log('error', `匹配失败`)
                continue
            }
            const joinGame = PAYLOADS['joinGame']
            joinGame.type = 1
            joinGame.id = 1
            joinGame.subId = 0
            result = await requests.pf(joinGame)
            if (result.head.state != 0) {
                failNum = 0
                log('error', `进入对局失败:${result.head.msg}`)
                break
            }
            //@source-ignore
            //ns.enc.anti_104_1(null, null)
            const end = PAYLOADS['pvp']['end']
            const actionInfos = result.actions
            const len = actionInfos.length
            end.actionTag = action.getActionTag(0, actionInfos, _getBinStore().binData['stage_endless_0_stage-0_data'], 'endless')
            end.actionIndex = len
            end.totalWave = len
            end.totalAction = len
            await common.sleep(10 * 1000)
            result = await requests.pf(end)
            if (result.head.state == 0) {
                doneNum++
                failNum = 0
                log('success', `对局完成`)
                _logGain(result.head.gain)
            } else {
                failNum++
                log('error', `结算失败:${result.head.msg}`)
                break
            }
        }
    },

    /**
     * 活动BOSS通用
     */
    periodAttack: async (args: PeriodAttack) => {
        if(args.num < 0) args.num = 1
        log('processing', args.type == 4 ? `开始攻打活动关卡` : `开始攻打BOSS关卡`)
        const type: "normal" | "endless" | "hero" | "boss" | "period" | "hyperboss" | "expedition"= args.type == 4 ? 'period' : 'boss'
        for (let i = 0; i < args.num; i++) {
            const joinGame = PAYLOADS['joinGame']
            joinGame.type = args.type
            joinGame.id = args.id
            joinGame.subId = args.sub
            if(args.multi) joinGame.multi = args.num
            let result = await requests.pf(joinGame)
            if (result.head.state != 0) {
                log('error', `进入关卡失败:${result.head.msg}`)
                break
            }
            //@source-ignore
            //ns.enc.anti_104_1(null, null)
            const end = PAYLOADS[type]['end']
            const actionInfos = result.actions
            const len = actionInfos.length
            end.actionTag = action.getActionTag(0, actionInfos, _getBinStore().binData[`stage_${type}_${args.id}_stage-${args.sub}_data`], type)
            end.actionIndex = len
            end.totalWave = len
            end.totalAction = len
            await common.sleep(args.attack_timer * 1000)
            console.log(end)
            result = await requests.pf(end)
            if (result.head.state == 0) {
                log('success', `攻打成功`)
                _logGain(result.head.gain)
            } else {
                log('error', `攻打失败:${result.head.msg}`)
                break
            }
        }
    },

    /**
     * 超限BOSS
     */
    hyperBossAttack: async (args: HyperBossAttack) => {
        console.log(args)
        const ids = args.ids
        const subs = args.subs
        for (let i = 0; i < ids.length; i++) {
            for (let j = 0; j < subs.length; j++) {
                const payload = PAYLOADS['joinGame']
                payload.id = ids[i]
                payload.subId = subs[j]
                payload.hyperBossType = args.hyperBossType
                payload.type = args.type
                let result = await requests.pf(payload)
                if (result.head.state != 0) {
                    log('error', `进入关卡失败:${result.head.msg}`)
                    break
                }
                //@source-ignore
                //ns.enc.anti_104_1(null, null)
                const end = PAYLOADS['boss']['end']
                const actionInfos = result.actions
                const len = actionInfos.length
                end.actionTag = action.getActionTag(0, actionInfos, _getBinStore().binData[`stage_hyperboss_${ids[i]}_stage-${subs[j]}_data`], 'hyperboss')
                end.actionIndex = len
                end.totalWave = len
                end.totalAction = len
                end.gameDuration = args.attack_timer
                end.battleDuration = args.attack_timer - 15
                await common.sleep(10 * 1000)
                result = await requests.pf(end)
                if (result.head.state == 0) {
                    log('success', `攻打成功`)
                    _logGain(result.head.gain)
                } else {
                    log('error', `攻打失败:${result.head.msg}`)
                    break
                }
            }
        }
    },

}