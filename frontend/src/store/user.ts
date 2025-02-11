import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {

    const user = ref<any>(null)
    const sweepId = ref<number|null>(null)
    const _uid = ref<string|null>("")
    const _sid = ref<string|null>("")

    const setUser = (e: any) => {
        function findItem(items: any[], type: number, sdId: number, quality: number, level: number): any | null {
            const item = items.find(item =>
                item.type === type &&
                item.sd_id === sdId &&
                item.quality === quality &&
                item.level === level
            );
            return item ? item : null;
        }
        const sweep = findItem(e.items, 14, 1, 100, 0)
        sweepId.value = sweep.id
        e.sweep = sweep
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

    const getSweepId = (): number|null => {
        return sweepId.value
    }

    const logout = () => {
        user.value = null
        _uid.value = null
        _sid.value = null
    }

    return { user, setSid, setUid, getUid, getSid, logout, setUser, getSweepId }
})