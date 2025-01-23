import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStatusStore = defineStore('status', () => {
    const globalLoading = ref(true)
    const _globalLoadingText = ref("")
    const _cmdSequence = ref(0)
    const _cmdVersion = ref(30)
    const featureDailyActive = ref(['1'])
    const levelActive = ref('1');
    const endlessActive = ref('1');
    const dailyMenuSelect = ref([''])
    const _btnLoading = ref(false)

    const getCmdVersion = () => {
        return _cmdVersion.value
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

    return { globalLoading, dailyMenuSelect, levelActive, endlessActive, globalLoadingText, featureDailyActive, getCmdVersion, setGlobalLoadingText, setBtnLoading, getBtnLoading, getCmdSequence, setGlobalLoading }
})