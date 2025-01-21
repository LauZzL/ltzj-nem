import {requests} from './requests.ts'
import {useLoggerStore} from "@/store/logger.ts";
import {useUserStore} from "@/store/user.ts";
import {useSettingStore} from "@/store/setting.ts";
import {gain as Gain} from "@/utils/gain.ts";
import common from "@/utils/common.ts";
import {PAYLOADS} from "@/payloads";

const {log} = useLoggerStore()
const userStore = useUserStore()
const settingStore = useSettingStore()

/**
 * 显示奖励，传入gain文本
 * @param gain
 */
const _logGain = (gain: string) => {
    // 部分关卡返回金币奖励以#分割
    const _gain = gain.replace(/#/g, ',')
    const gain_json_array = Gain.gain2jsonarray(_gain)
    gain_json_array.map((g) => {
        log('success', `${g.name} x ${g.num}`, g.color, g.icon)
    })
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
    refreshUserInfo: async () => {
        const payload = PAYLOADS['refreshUserInfo']
        let result = await requests.pf(payload)
        if (result.head.state == 0) {
            userStore.user = result
            log('success', `刷新用户信息成功`)
        } else {
            log('error', `刷新用户信息失败:${result.head.msg}`)
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
        const payload = PAYLOADS['cdkDo']
        const cdkS = settingStore.cdk.split('\n')
        for (const cdk of cdkS){
            if (!cdk || cdk.length == 0) {
                continue
            }
            if (settingStore.usedCdk.includes(cdk)) {
                log('warning', `跳过:${cdk}已兑换`)
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
    }
}