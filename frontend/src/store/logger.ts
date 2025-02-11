import {defineStore} from 'pinia'
import {ref} from 'vue'
import common from "@/utils/common.ts";


export type LogType = 'processing' | 'warning' | 'error' | 'success' | 'magenta'

interface LogEntry {
    type: LogType,
    msg: string,
    id: number,
    time: string,
    color: string | undefined,
    icon: { url: string, url2: string } | undefined
}


export const useLoggerStore = defineStore('logger', () => {
    const _logger = ref<LogEntry[]>([])

    const log = (type: LogType, msg: string, color?: string | undefined ,icon?: { url: string, url2: string } | undefined) => {
        if (_logger.value.length >= 300) _logger.value.pop()
        _logger.value.unshift({
            type: type,
            msg: msg,
            id: _logger.value.length,
            time: common.getLocalDateTime(),
            color: color,
            icon: icon != undefined ? icon : undefined
        })
    }


    const getLogger = () => {
        return _logger.value
    }

    return {log, getLogger}
})