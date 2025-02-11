import {defineStore} from 'pinia'
import {ref} from 'vue'

export type LevelAttack = {
    level: number,
    num: number,
    sleeps: number,
    attack_timer: number,
    is_hero: boolean,
    two_gain: number,
    score: number
}

export type EndlessAttack = {
    reward_num: number,
    sleeps: number,
    num: number,
    attack_timer: number
}

export type EndlessBuy = {
    num: number,
    id: number
}

export type PvpAttack = {
    done_num: number,
    max_fail_num: number
}

export type PeriodAttack = {
    id: number,
    sub: number,
    num: number,
    attack_timer: number,
    type: number,
    multi: boolean
}

export type HyperBossAttack = {
    ids: number[],
    subs: number[],
    hyperBossType: number,
    attack_timer: number,
    type: number,
    multi: number
}

export const useSettingStore = defineStore('setting', () => {
    const dailyBlueBoxNum = ref<number>(1)
    const vipLevel = ref<number>(0)
    const cdk = ref<string>("mnD8H6\\nL5T6QY\\nM2P9FH\\nT6K3WD\\nJ6B1XR\\nT6K3WD\\nJ6B1XR\\nV5J1QN\\nB8Z4SY\\nB8Z4SY\\nM2P9FH\\nV5J1QN\\nvip111\\nvip222\\nvip333\\nvip666\\nvip777\\nvip888\\ndyvip666\\nzs666\\nR7K2ML\\nX9R7PL\\nT6K3WD\\nJ6B1XR\\nM2P9FH\\nV5J1QN\\nL5T6QY\\nB8Z4SY\\nV5J1QN\\nmnD8H6\\nS9F3KT\\nLZ3T9P\\nF3N8WX\\nP3V8LF\\nH6J5LY\\nK6P9LY\\nS2H3UV\\nG7D0WJ\\nC9X5RA\\nA8M4ET\\nI3Z6FX\\nM8R5LV\\nY0T2HJ\\nV1B2WY\\nH6K8QS\\nQ5L9NE\\nL8W2HN\\nY5B1SD\\nF0Z7RN\\nM6X4QJ\\nJ2H9QK\\nC7N3TB\\nZ1W5HV\\nD8P2YZ\\nS3L8UJ\\nA1X4CE\\nH5Y2MG\\nQ8N6FV\\nW2T9BL\\nK3D4JW\\nG0R7KQ\\nP2F8RY\\nT9H3WL\\nR3Y5SN\\nE3W1SZ\\nJ9L6PC\\nY8N0QF\\nI4B9JT\\nQ6M2XP\\nK7D8ZG\\nR4P3XS\\nF1Q6BJ")
    const code = ref<string>('// ==NemScript==\n' +
        '// @name         example\n' +
        '// @version      1.0.0\n' +
        '// @icon         https://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg\n' +
        '// @description  example js!\n' +
        '// @author       example\n' +
        '// @site       https://github.com/LauZzL/ltzj-nem\n' +
        '// ==/NemScript==\n' +
        '\n' +
        '\n' +
        '(async function(){\n' +
        '  nem.logger(\'success\', \'开始执行了\');\n' +
        '  // 延迟3秒\n' +
        '  await nem.sleep(3000);\n' +
        '  nem.message.success(\'执行结束\');\n' +
        '})()')
    const usedCdk = ref<string[]>([])
    const levelAttack = ref<LevelAttack>({
        level: 1,
        num: 1,
        sleeps: 1000,
        attack_timer: 10,
        is_hero: false,
        two_gain: 0,
        score: 10000
    })
    const endlessAttack = ref<EndlessAttack>({
        reward_num: 5,
        sleeps: 1000,
        num: 1,
        attack_timer: 10
    })
    const endlessBuy = ref<EndlessBuy>({
        num: 1,
        id: 1
    })
    const pvpAttack = ref<PvpAttack>({
        done_num: 1,
        max_fail_num: 5
    })
    const periodAttack = ref<PeriodAttack>({
        id: 0,
        sub: 3,
        num: 1,
        attack_timer: 60,
        type: 4,
        multi: false
    })
    const bossAttack = ref<PeriodAttack>({
        id: 3,
        sub: 3,
        num: 1,
        attack_timer: 10,
        type: 2,
        multi: false
    })
    const hyperBossAttack = ref<HyperBossAttack>({
        ids: [],
        subs: [],
        hyperBossType: 1,
        attack_timer: 10,
        type: 5,
        multi: 1
    })
    const httpFlow = ref<any[]>([])
    const safeEnable = ref<boolean>(true)



    return {dailyBlueBoxNum, vipLevel, levelAttack, cdk, usedCdk, endlessAttack, endlessBuy, pvpAttack, periodAttack, bossAttack, httpFlow, hyperBossAttack, code, safeEnable}
})