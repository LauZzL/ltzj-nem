<template>
  <el-watermark class="common-layout" :color="font.color" :content="['网易云音乐3']">
    <music-player></music-player>
    <el-container>
      <el-aside style="width: auto;">
        <menu-component style="height: 100%"></menu-component>
      </el-aside>
      <el-main style="overflow: auto; margin: 0; padding-top: 0;">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.fullPath" />
          </keep-alive>
          <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.fullPath" />
        </router-view>
      </el-main>
    </el-container>
  </el-watermark>
</template>

<script setup>
import MenuComponent from "@/components/aside/menuComponent.vue";
import { useMessageStore } from '@/store/message';
import { useLoggerStore } from '@/store/logger';
import { useUserStore } from "@/store/user";
import { useShopStore } from "@/store/shop";
import { useExecutorStore } from "@/store/executor";
import { useNemStore } from '@/store/nem';
import {useScriptStore} from "@/store/script.js";
import {useSettingStore} from "@/store/setting.js";
import {useBackPackStore} from "@/store/backpack.js";
import { ElMessage } from 'element-plus';
import { ElMessageBox,ElNotification } from 'element-plus';
import Webview from '@/utils/webview'

import { reactive, watch } from 'vue'
import { useDark } from '@vueuse/core'
import gain from "@/utils/gain";
import MusicPlayer from "@/components/common/MusicPlayer.vue";

console.log("\n %c LTZJ-NEM.build %c www.github.com/LauZzL/ltzj-nem", "color:#fff;background:linear-gradient(90deg,#448bff,#44e9ff);padding:5px 0;", "color:#000;background:linear-gradient(90deg,#44e9ff,#ffffff);padding:5px 10px 5px 0px;");

const isDark = useDark()

const font = reactive({
  color: 'rgba(0, 0, 0, .15)',
})

watch(
  isDark,
  () => {
    font.color = isDark.value
      ? 'rgba(255, 255, 255, .15)'
      : 'rgba(0, 0, 0, .15)'
  },
  {
    immediate: true,
  }
)

const messageStore = useMessageStore();
const loggerStore = useLoggerStore();
const userStore = useUserStore();
const shopStore = useShopStore();
const executorStore = useExecutorStore();
const nemStore = useNemStore();
const scriptStore = useScriptStore();
const settingStore = useSettingStore();
const backpackStore = useBackPackStore();

chrome.webview.addEventListener("message", function messageEvent(evt) {
  try {
    let data = evt.data;
    data = JSON.parse(decodeURIComponent(data));

    function filterEquips(usedItemIds) {
      return backpackStore.backpack.equips.filter(item => !usedItemIds.has(item.data.id));
    }

    function filterItems(usedItemIds) {
      return backpackStore.backpack.items.filter(item => !usedItemIds.has(item.data.id));
    }

    switch (data.cmd) {
      case -1:
        ElMessage({
          showClose: true,
          message: data.message,
          type: data.type
        });
        break;
      case -2:
        ElNotification({
          title: '一言',
          message: data.message,
          type: 'success',
        });
        break;
      case -3:
        settingStore.setting.player_id = data.message;
        break;
      case 10216:
        settingStore.setting.cdk_str = data.data.join('\n');
        break;
      case 77:
        userStore.setUser(data.data);
        backpackStore.backpack.equips = [];
        backpackStore.backpack.items = [];
        backpackStore.backpack.items = gain.json_parse4equips(data.data.items);
        backpackStore.backpack.equips = gain.json_parse4equips(data.data.equips);
        break;
      case 233:
        settingStore.setting.autoDay = data.data;
        break;
      case 153826:
        const lucky_gain = gain.gain_raw2json(data.data.gain_raw, true);
        const used_items = data.data.used_items;
        const luckyValue = data.data.luckyValue;
        const luckyType = data.data.luckyType;

        userStore?.user?.allLuckys.forEach(lucky => {
          if (lucky.type === Number(luckyType)) {
            lucky.luckyValue = Number(luckyValue);
          }
        });

        const usedItemIds = new Set(used_items.map(item => item.id));
        backpackStore.backpack.equips = filterEquips(usedItemIds);
        backpackStore.backpack.lucky = lucky_gain;
        break;
      case 153827:
        const usedItemIds2 = new Set(data.data.used_items.map(item => item.id));
        backpackStore.backpack.equips = filterEquips(usedItemIds2);
        backpackStore.backpack.items = filterItems(usedItemIds2);
        break;
      case 301:
        if (messageStore.capture) {
          data.index = messageStore.network.length + 1;
          messageStore.addNetwork(data);
        }
        break;
      case 48:
      case 49:
        loggerStore.add(decodeURIComponent(data.message));
        break;
      case 793:
        shopStore.setShop(data.data);
        break;
      case 1002:
        executorStore.setExecutor(data.data);
        break;
      case 1003:
        loggerStore.add_packet(data.message);
        break;
      case 1007:
        nemStore.setNem(data.data);
        break;
      case 3002:
        scriptStore.setScript(decodeURIComponent(atob(data.data.code)));
        return;
      case 3007:
        scriptStore.setScripts(data.data);
        return;
      default:
        if (data.cmd >= 3000 && data.cmd <= 3100) {
          loggerStore.add_script(data.message);
        } else if (200 < data.cmd && data.cmd < 300) {
          loggerStore.add(decodeURIComponent(data.message));
        }
        break;
    }
  } catch (error) {
    console.error('Error processing message:', error);
  }
});


</script>

<style scoped>
.common-layout,
.el-container {
  height: 100%;
  width: 100%;
}
</style>