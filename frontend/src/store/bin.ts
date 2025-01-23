import {defineStore} from 'pinia'
import {ref} from 'vue'


export const useBinStore = defineStore('bin', () => {
    const binData = ref<Record<string, any>>({})
    const binDataLoaded = ref<string[]>([])

    return {binData, binDataLoaded}
})