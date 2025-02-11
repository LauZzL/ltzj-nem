import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
    const version = ref<string|null>(null)
    const port = ref<number>(2026)

    return { version, port }
})