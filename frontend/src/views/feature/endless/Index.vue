<template>
  <a-tabs v-model:activeKey="statusStore.endlessActive">
    <a-tab-pane key="1" tab="攻打">
      <a-form :model="settingStore.endlessAttack" labelAlign="left" layout="inline">
        <a-form-item label="宝箱">
          <a-select
              ref="select"
              v-model:value="settingStore.endlessAttack.reward_num"
              style="width: 150px"
          >
            <a-select-option :value="i" v-for="i in 5" :key="i">{{i}}个</a-select-option>
          </a-select>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="次数">
          <a-input type="number" style="width: 150px;" v-model:value="settingStore.endlessAttack.num">
            <template #suffix>
              次
            </template>
          </a-input>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="间隔">
          <a-input type="number" style="width: 150px;" v-model:value="settingStore.endlessAttack.sleeps">
            <template #suffix>
              毫秒
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="对局时间">
          <a-input type="number" style="width: 80px;" v-model:value="settingStore.endlessAttack.attack_timer">
            <template #suffix>
              秒
            </template>
          </a-input>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="操作">
          <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('endlessAttack', settingStore.endlessAttack)">宝箱</a-button>
          <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('endlessAttack', {
            reward_num: 0,
            num: settingStore.endlessAttack.num,
            sleeps: settingStore.endlessAttack.sleeps,
            attack_timer: settingStore.endlessAttack.attack_timer
          })" style="margin-left: 20px">光辉</a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>
    <a-tab-pane key="2" tab="购买">
      <a-form :model="settingStore.endlessBuy" labelAlign="left" layout="inline">
        <a-form-item label="道具">
          <a-select
              ref="select"
              v-model:value="settingStore.endlessBuy.id"
              style="width: 120px"
          >
            <a-select-option :value="item.id" v-for="item in endlessItems" :key="item.id">{{item.label}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="数量">
          <a-input type="number" style="width: 150px;" v-model:value="settingStore.endlessBuy.num">
            <template #suffix>
              个
            </template>
          </a-input>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="操作">
          <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('buyEndlessItem', settingStore.endlessBuy)">购买</a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts" setup>
import {useStatusStore} from "@/store/status.ts";
import {useSettingStore} from "@/store/setting.ts";
import {ApiFactory} from '@/utils/featureFactory.ts'
import {ref} from "vue";


const statusStore = useStatusStore()
const settingStore = useSettingStore()


const endlessItems = ref<{label:string, id: number}[]>([
  {
    label: '烈火',
    id: 1,
  },{
    label: '圣光',
    id: 2,
  },{
    label: '灰烬',
    id: 3,
  }
])

</script>

