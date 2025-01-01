import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
    const version = ref(null)
    const port = ref(2026)


    return { version, port }
})