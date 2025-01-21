import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useSettingStore = defineStore('setting', () => {
    const dailyBlueBoxNum = ref<number>(1)
    const vipLevel = ref<number>(0)
    const cdk = ref<string>("mnD8H6\\nL5T6QY\\nM2P9FH\\nT6K3WD\\nJ6B1XR\\nT6K3WD\\nJ6B1XR\\nV5J1QN\\nB8Z4SY\\nB8Z4SY\\nM2P9FH\\nV5J1QN\\nvip111\\nvip222\\nvip333\\nvip666\\nvip777\\nvip888\\ndyvip666\\nzs666\\nR7K2ML\\nX9R7PL\\nT6K3WD\\nJ6B1XR\\nM2P9FH\\nV5J1QN\\nL5T6QY\\nB8Z4SY\\nV5J1QN\\nmnD8H6\\nS9F3KT\\nLZ3T9P\\nF3N8WX\\nP3V8LF\\nH6J5LY\\nK6P9LY\\nS2H3UV\\nG7D0WJ\\nC9X5RA\\nA8M4ET\\nI3Z6FX\\nM8R5LV\\nY0T2HJ\\nV1B2WY\\nH6K8QS\\nQ5L9NE\\nL8W2HN\\nY5B1SD\\nF0Z7RN\\nM6X4QJ\\nJ2H9QK\\nC7N3TB\\nZ1W5HV\\nD8P2YZ\\nS3L8UJ\\nA1X4CE\\nH5Y2MG\\nQ8N6FV\\nW2T9BL\\nK3D4JW\\nG0R7KQ\\nP2F8RY\\nT9H3WL\\nR3Y5SN\\nE3W1SZ\\nJ9L6PC\\nY8N0QF\\nI4B9JT\\nQ6M2XP\\nK7D8ZG\\nR4P3XS\\nF1Q6BJ")
    const usedCdk = ref<string[]>([])


    return {dailyBlueBoxNum, vipLevel, cdk, usedCdk}
})