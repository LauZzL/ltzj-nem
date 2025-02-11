<script setup lang="ts">
import {useStatusStore} from "@/store/status.ts";
import {useSettingStore} from "@/store/setting.ts";
import {ApiFactory} from "@/utils/featureFactory.ts";

const statusStore = useStatusStore();
const settingStore = useSettingStore();


const optionsStage = [
  { label: '天龙座', value: 1 },
  { label: '白鸟座', value: 2 },
  { label: '天马座', value: 0 },
  { label: '仙女座', value: 3 },
];

const optionsSub = [
  { label: '关卡1', value: 0 },
  { label: '关卡2', value: 1 },
  { label: '关卡3', value: 2 },
  { label: '关卡4', value: 3 },
  { label: '关卡5', value: 4 },
];

</script>

<template>
  <a-tabs v-model:activeKey="statusStore.timedActive">
    <a-tab-pane key="1" tab="超限模式">
      <a-form :model="settingStore.hyperBossAttack" labelAlign="left" layout="inline">
        <a-form-item label="关卡">
          <a-checkbox-group :options="optionsStage" v-model:value="settingStore.hyperBossAttack.ids"/>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="阶段">
          <a-checkbox-group :options="optionsSub" v-model:value="settingStore.hyperBossAttack.subs"/>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="难度">
          <a-radio-group v-model:value="settingStore.hyperBossAttack.hyperBossType">
            <a-radio :value="0">普通</a-radio>
            <a-radio :value="1">超限</a-radio>
          </a-radio-group>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="对局时间">
          <a-input type="number" style="width: 80px;" v-model:value="settingStore.hyperBossAttack.attack_timer">
            <template #suffix>
              秒
            </template>
          </a-input>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="操作">
          <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('hyperBossAttack', settingStore.hyperBossAttack)">攻打</a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>
    <a-tab-pane key="2" tab="巡航" force-render>Content of Tab Pane 2</a-tab-pane>
  </a-tabs>
</template>

<style scoped>

</style>