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
    <a-collapse-panel key="freeAd" header="免广告" :style="customStyle">
      <a-space wrap>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('dailyShopFree')">商城免费资源
        </a-button>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('dailyEnergyReward', {
          num: 1
        })">每日广告体力x1
        </a-button>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('dailyEnergyReward', {
          num: 4
        })">每日广告体力x4
        </a-button>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('dailyEquipReward')">寻宝装备宝箱
        </a-button>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('dailyExploreReward')">星际探索
        </a-button>
      </a-space>
    </a-collapse-panel>
    <a-collapse-panel key="dailyGet" header="每日领取" :style="customStyle">
      <a-space wrap>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('dailyWheelReward', {
          num: 1
        })">寻宝转盘
        </a-button>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('sendDanMu')">弹幕钻石</a-button>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('desktopStart')">桌面启动钻石
        </a-button>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('dailyHelpGold')">助战金币
        </a-button>
        <br>
        <a-space class="feature-daily-space" wrap>
          <a-input-number v-model:value="settingStore.vipLevel" prefix="等级:"/>
          <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('dailyVipReward', {
            level: settingStore.vipLevel
          })">贵族奖励
          </a-button>
        </a-space>
      </a-space>
    </a-collapse-panel>
    <a-collapse-panel key="activeReward" header="活跃奖励" :style="customStyle">
      <a-space wrap>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('activeEndlessReward')">
          奖励-无尽宝箱x3
        </a-button>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('activeEnergyReward')">
          奖励-体力x100
        </a-button>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('activeReward')">活跃度奖励
        </a-button>
      </a-space>
    </a-collapse-panel>
    <a-collapse-panel key="cdkDo" header="CDK兑换" :style="customStyle">
      <a-textarea v-model:value="settingStore.cdk" placeholder="请输入CDK"/>
      <br>
      <a-button style="margin-top: 5px" :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('cdkDo')">兑换</a-button>
    </a-collapse-panel>
    <a-collapse-panel key="clickGet" header="一键抽奖" :style="customStyle">
      <a-space class="feature-daily-space" wrap>
        <a-input-number v-model:value="settingStore.dailyBlueBoxNum" prefix="次数:"/>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('dailyWheelReward', {
          num: settingStore.dailyBlueBoxNum
        })">寻宝转盘
        </a-button>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('dailyEquipBoxReward', {
          num: settingStore.dailyBlueBoxNum,
          type: 21
        })">蓝色宝箱
        </a-button>
        <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('dailyBlueBoxReward', {
          num: settingStore.dailyBlueBoxNum,
          type: 22
        })">紫色宝箱
        </a-button>
      </a-space>
    </a-collapse-panel>
  </a-collapse>
</template>

<style scoped>
.feature-daily-space {
  margin-bottom: 0.5rem;
}
</style>