import {message} from "ant-design-vue";
import {useLoggerStore} from "@/store/logger.ts";
import type {LogType} from "@/store/logger.ts";
import {requests} from "@/utils/requests.ts";
import common from "@/utils/common.ts";
// @ts-ignore
import {ns} from "@/lib/ns.js";


export const nem = {
    message: message,
    logger: (type: LogType, msg: string, color?: string | undefined ,icon?: { url: string, url2: string } | undefined) => {
        const {log} = useLoggerStore()
        log(type, msg, color, icon)
    },
    requests: requests,
    sleep: common.sleep,
    ns: ns,
}