import { api } from './api.ts'
import {useStatusStore} from '@/store/status.ts'
import {useLoggerStore} from "@/store/logger.ts";
import {useUserStore} from "@/store/user.ts";
import { Modal } from "ant-design-vue";

const { setBtnLoading } = useStatusStore()
const { getUid,getSid } = useUserStore()
const { log } = useLoggerStore()

interface FactoryExecutor {
    name: string;
    executor: Function;
}

type FactoryMap = {
    [key: string]: FactoryExecutor;
};

const factoryMap: FactoryMap = {
    dailyWheelReward:  {
        "name": "寻宝转盘",
        "executor": async (args: { num: number}) => {
            return await api.dailyWheelReward(args)
        }
    },
    dailyBlueBoxReward:  {
        "name": "装备宝箱",
        "executor": async (args: { num: number, type: number}) => {
            return await api.dailyBlueBoxReward(args)
        }
    }
}

export const ApiFactory = {

    execute: async (feature: string, args?: object | null) => {
        const uid = getUid()
        const sid = getSid()
        if (!uid || !sid) {
            Modal.error({
                title: '错误',
                content: '请先登录游戏',
            });
            return
        }
        setBtnLoading(true)
        try {
            if (factoryMap[feature]) {
                log('processing', `开始执行:${factoryMap[feature].name}`)
                await factoryMap[feature].executor(args)
                log('processing', `${factoryMap[feature].name}执行完毕`)
            }else{
                Modal.error({
                    title: '错误',
                    content: '暂不支持该功能',
                });
            }
        } catch (error: any) {
            Modal.error({
                title: '错误',
                content: `出现了异常:${error}`,
            });
        } finally {
            setBtnLoading(false)
        }
    }

}