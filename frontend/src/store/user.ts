import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {

    const user = ref<any>(null)
    const _uid = ref(null)
    const _sid = ref(null)

    const setUser = (e: any) => {
        user.value = e
    }

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

    const logout = () => {
        user.value = null
        _uid.value = null
        _sid.value = null
    }

    return { user, setSid, setUid, getUid, getSid, logout, setUser }
})