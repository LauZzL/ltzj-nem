<script setup lang="ts">
import {CaretRightOutlined} from "@ant-design/icons-vue";
import {useStatusStore} from "@/store/status.ts";
import {useSettingStore} from "@/store/setting.ts";
import {ApiFactory} from '@/utils/featureFactory.ts'

const statusStore = useStatusStore();
const settingStore = useSettingStore();
const customStyle =
    'background: #f7f7f7;border-radius: 4px;margin-bottom: 12px;border: 0;overflow: hidden';
</script>

<template>
  <a-collapse
      v-model:activeKey="statusStore.featureDailyActive"
      :bordered="false"
      style="background: rgb(255, 255, 255);"
  >
    <template #expandIcon="{ isActive }">
      <caret-right-outlined :rotate="isActive ? 90 : 0"/>
    </template>
    <a-collapse-panel key="1" header="免广告" :style="customStyle">
      <a-space>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('dailyShopFree')">商城免费资源
        </a-button>
      </a-space>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="一键抽奖" :style="customStyle">
      <a-space class="feature-daily-space">
        <a-input-number v-model:value="settingStore.dailyBlueBoxNum" prefix="次数:"/>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('dailyWheelReward', {
          num: settingStore.dailyBlueBoxNum
        })">寻宝转盘</a-button>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('dailyBlueBoxReward', {
          num: settingStore.dailyBlueBoxNum,
          type: 21
        })">蓝色宝箱</a-button>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('dailyBlueBoxReward', {
          num: settingStore.dailyBlueBoxNum,
          type: 22
        })">紫色宝箱</a-button>
      </a-space>
    </a-collapse-panel>
  </a-collapse>
</template>

<style scoped>
.feature-daily-space {
  margin-bottom: 0.5rem;
}
</style>