import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStatusStore = defineStore('status', () => {
    const globalLoading = ref(true)
    const _globalLoadingText = ref("")
    const _cmdSequence = ref(0)
    const cmdVersion = ref(20)
    const featureDailyActive = ref(['1'])
    const _btnLoading = ref(false)


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

    return { globalLoading , globalLoadingText, featureDailyActive, cmdVersion, setGlobalLoadingText, setBtnLoading, getBtnLoading, getCmdSequence, setGlobalLoading }
})