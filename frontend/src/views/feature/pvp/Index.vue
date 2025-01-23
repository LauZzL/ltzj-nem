<script setup lang="ts">
import {useSettingStore} from "@/store/setting.ts";
import {useStatusStore} from "@/store/status.ts";
import {ApiFactory} from "@/utils/featureFactory.ts";


const settingStore = useSettingStore();
const statusStore = useStatusStore();

</script>

<template>
  <a-form :model="settingStore.pvpAttack" labelAlign="left" layout="inline">
    <a-form-item label="赛场">
      <a-radio checked>金币场</a-radio>
    </a-form-item>
    <div style="display: block;width: 100%;margin-top: 10px"/>
    <a-form-item label="成功">
      <a-input type="number" style="width: 150px;" v-model:value="settingStore.pvpAttack.done_num">
        <template #suffix>
          次
        </template>
      </a-input>
    </a-form-item>
    <a-form-item label="最大失败">
      <a-input type="number" style="width: 150px;" v-model:value="settingStore.pvpAttack.max_fail_num">
        <template #suffix>
          次
        </template>
      </a-input>
    </a-form-item>
    <div style="display: block;width: 100%;margin-top: 10px"/>
    <a-form-item label="操作">
      <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('pvpAttack', settingStore.pvpAttack)">出击</a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped>

</style>