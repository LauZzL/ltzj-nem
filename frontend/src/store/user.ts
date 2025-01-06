import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {

    const user = ref(null)
    const _uid = ref(null)
    const _sid = ref(null)

    const setSid = (e: any) => {
        _sid.value = e
    }

    const setUid = (e: any) => {
        _uid.value = e
    }

    const getUid = () => {
        return _uid.value
    }

    const getSid = () => {
        return _sid.value
    }

    return { user, setSid, setUid, getUid, getSid }
})