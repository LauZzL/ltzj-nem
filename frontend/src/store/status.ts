import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStatusStore = defineStore('status', () => {
    const globalLoading = ref(true)
    const _globalLoadingText = ref("")
    const _cmdSequence = ref(0)
    const cmdVersion = ref(11202)
    const clientVersion = ref("1.12.2")
    const featureDailyActive = ref(['1'])
    const levelActive = ref('1');
    const timedActive = ref('1');
    const endlessActive = ref('1');
    const scriptActive = ref('1');
    const dailyMenuSelect = ref([''])
    const _btnLoading = ref(false)

    const getCmdVersion = () => {
        return cmdVersion.value
    }

    const setCmdVersion = (e: number) => {
        cmdVersion.value = e
    }

    const getClientVersion = () => {
        return clientVersion.value
    }

    const setClientVersion = (e: string) => {
        clientVersion.value = e
    }

    const setGlobalLoading = (e: boolean) => {
        globalLoading.value = e
    }

    const setBtnLoading = (e: boolean) => {
        _btnLoading.value = e
    }

    const setGlobalLoadingText = (e: string) => {
        _globalLoadingText.value = e
    }

    const globalLoadingText = () => {
        return _globalLoadingText.value
    }

    const getBtnLoading = () => {
        return _btnLoading.value
    }

    const getCmdSequence = () => {
        _cmdSequence.value += 1
        return _cmdSequence.value
    }

    return { cmdVersion, clientVersion, setCmdVersion, setClientVersion ,globalLoading, dailyMenuSelect, levelActive, timedActive, endlessActive, scriptActive, globalLoadingText, featureDailyActive, getCmdVersion, getClientVersion, setGlobalLoadingText, setBtnLoading, getBtnLoading, getCmdSequence, setGlobalLoading }
})
