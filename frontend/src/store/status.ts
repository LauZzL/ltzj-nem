import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStatusStore = defineStore('status', () => {
    const globalLoading = ref(true)
    const globalLoadingText = ref("")

    const setGlobalLoading = (e: boolean) => {
        globalLoading.value = e
    }

    return { globalLoading , globalLoadingText, setGlobalLoading }
})