<template>
  <a-tabs v-model:activeKey="statusStore.levelActive">
    <a-tab-pane key="1" tab="攻打">
      <a-form :model="settingStore.levelAttack" labelAlign="left" layout="inline">
        <a-form-item label="关卡">
          <a-input type="number" style="width: 150px;" v-model:value="settingStore.levelAttack.level">
            <template #suffix>
              关
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox v-model:checked="settingStore.levelAttack.is_hero">
            英雄
          </a-checkbox>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="间隔">
          <a-input type="number" style="width: 150px;" v-model:value="settingStore.levelAttack.sleeps">
            <template #suffix>
              毫秒
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="对局时间">
          <a-input type="number" style="width: 80px;" v-model:value="settingStore.levelAttack.attack_timer">
            <template #suffix>
              秒
            </template>
          </a-input>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="次数">
          <a-input type="number" style="width: 150px;" v-model:value="settingStore.levelAttack.num">
            <template #suffix>
              次
            </template>
          </a-input>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="双倍">
          <a-select
              ref="select"
              v-model:value="settingStore.levelAttack.two_gain"
              style="width: 150px"
          >
            <a-select-option :value="0">关闭</a-select-option>
            <a-select-option :value="1">任何情况</a-select-option>
            <a-select-option :value="2">3经验时</a-select-option>
          </a-select>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="操作">
          <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('levelAttack', settingStore.levelAttack)">出击</a-button>
          <a-button :loading="statusStore.getBtnLoading()" style="margin-left: 20px">扫荡</a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>
    <a-tab-pane key="2" tab="自定义" force-render>
      施工中...
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts" setup>
import {useStatusStore} from "@/store/status.ts";
import {useSettingStore} from "@/store/setting.ts";
import {ApiFactory} from '@/utils/featureFactory.ts'


const statusStore = useStatusStore()
const settingStore = useSettingStore()



</script>

