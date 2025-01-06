import {requests} from './requests.ts'
import {useStatusStore} from "@/store/status.ts";
import {useUserStore} from "@/store/user.ts";
import {useLoggerStore} from "@/store/logger.ts";
import {gain as Gain} from "@/utils/gain.ts";
import common from "@/utils/common.ts";

const {getCmdSequence} = useStatusStore()
const {getUid, getSid} = useUserStore()
const {log} = useLoggerStore()

/**
 * 显示奖励，传入gain文本
 * @param gain
 */
const _logGain = (gain: string) => {
    const gain_json_array = Gain.gain2jsonarray(gain)
    gain_json_array.map((g) => {
        log('success', `${g.name} x ${g.num}`, g.color, g.icon)
    })
}

export const api = {

    /**
     * 寻宝转盘
     */
    dailyWheelReward: async (args: { num: number }) => {
        console.debug(`Received parameters: ${args}`)
        for (let i = 0; i < args.num; i++) {
            log('processing', `寻宝转盘第${i + 1}次`)
            const payload = {
                "head": {
                    "cmdDataSplitLength": 0,
                    "cmdId": 64,
                    "cmdLength": 0,
                    "cmdSequence": getCmdSequence(),
                    "cmdVersion": 20,
                    "headVersion": 0,
                    "timestamp": Date.now(),
                    "crcVerify": 0,
                    "platform": 0,
                    "reconnect": false,
                    "sid": getSid(),
                    "uid": getUid()
                }
            }
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

    dailyBlueBoxReward: async (args: { num: number, type: number }) => {
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
            const payload = {
                "head": {
                    "cmdDataSplitLength": 0,
                    "cmdId": 11,
                    "cmdLength": 0,
                    "cmdSequence": getCmdSequence(),
                    "cmdVersion": 20,
                    "headVersion": 0,
                    "timestamp": Date.now(),
                    "crcVerify": 0,
                    "platform": 0,
                    "reconnect": false,
                    "sid": getSid(),
                    "uid": getUid()
                },
                "shopIndex": 4,
                "sdTargetData": {"type": 12, "sd_id": args.type, "quality": 4, "level": 0, "num": execNum},
                "adBuy": "0"
            };
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
    }
}