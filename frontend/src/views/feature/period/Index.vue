<script setup lang="ts">
import {useStatusStore} from "@/store/status.ts";
import {useSettingStore} from "@/store/setting.ts";
import {ApiFactory} from "@/utils/featureFactory.ts";


const settingStore = useSettingStore()
const statusStore = useStatusStore()
</script>

<template>
  <a-form :model="settingStore.periodAttack" labelAlign="left" layout="inline">
    <a-form-item label="关卡">
      <a-radio-group v-model:value="settingStore.periodAttack.id">
        <a-radio :value="0">陨石陷阱</a-radio>
        <a-radio :value="1">激光迷宫</a-radio>
        <a-radio :value="2">导弹猎场</a-radio>
      </a-radio-group>
    </a-form-item>
    <div style="display: block;width: 100%;margin-top: 10px"/>
    <a-form-item label="难度">
      <a-radio-group v-model:value="settingStore.periodAttack.sub">
        <a-radio :value="0">简单</a-radio>
        <a-radio :value="1">普通</a-radio>
        <a-radio :value="2">困难</a-radio>
        <a-radio :value="3">极难</a-radio>
      </a-radio-group>
    </a-form-item>
    <div style="display: block;width: 100%;margin-top: 10px"/>
    <a-form-item label="次数">
      <a-input type="number" style="width: 150px;" v-model:value="settingStore.periodAttack.num">
        <template #suffix>
          次
        </template>
      </a-input>
    </a-form-item>
    <a-form-item label="对局时间">
      <a-input type="number" style="width: 80px;" v-model:value="settingStore.periodAttack.attack_timer">
        <template #suffix>
          秒
        </template>
      </a-input>
    </a-form-item>
    <div style="display: block;width: 100%;margin-top: 10px"/>
    <a-form-item label="操作">
      <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('periodAttack', settingStore.periodAttack)">攻打</a-button>
      <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('periodAttack', {...settingStore.periodAttack, multi: true})" style="margin-left: 20px">闪击</a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped>

</style>