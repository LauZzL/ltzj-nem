import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingStore = defineStore('setting', () => {
    const dailyBlueBoxNum = ref(1)

    return { dailyBlueBoxNum }
})