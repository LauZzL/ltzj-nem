<script setup lang="ts">
import {useStatusStore} from "@/store/status.ts";
import {useBinStore} from "@/store/bin.ts";
import {message} from "ant-design-vue";
import {useLoggerStore} from "@/store/logger.ts";
import {useAppStore} from "@/store/app.ts";
import {action} from "@/utils/action.ts";
import stage_normal from "@/assets/json/stage_normal.json"
import stage_period from "@/assets/json/stage_period.json"
import stage_boss from "@/assets/json/stage_boss.json"
import stage_hero from "@/assets/json/stage_hero.json"
import stage_endless from "@/assets/json/stage_endless.json"
import stage_hyperboss from "@/assets/json/stage_hyperboss.json"
import stage_expedition from "@/assets/json/stage_expedition.json"
import {useUserStore} from "@/store/user.ts";
import {Buffer} from "buffer";
import {ns} from '@/lib/ns'
import {ApiFactory} from "@/utils/featureFactory.ts";


const statusStore = useStatusStore();
const appStore = useAppStore();
const binStore = useBinStore();
const loggerStore = useLoggerStore();
const userStore = useUserStore();


window?.runtime?.EventsOn('AppInfo', async (e: { Version: string }) => {
  appStore.version = e.Version;
  statusStore.setGlobalLoading(true)
  statusStore.setGlobalLoadingText("加载数据中...")
  loggerStore.log("processing", "加载数据中")
  const _binConfig = [...stage_normal, ...stage_period, ...stage_boss, ...stage_hero, ...stage_endless, ...stage_hyperboss, ...stage_expedition].filter((item) => !binStore.binDataLoaded.includes(item.name))
  await action.loadAllBin(_binConfig, (file, data) => {
    if (data.length < 1) {
      message.error(`加载数据失败:${file},请重新启动应用程序`)
      loggerStore.log("error", "加载数据失败,请重新启动应用程序")
    } else {
      binStore.binDataLoaded.push(file)
      binStore.binData[file] = data
    }
  })
  statusStore.setGlobalLoadingText("加载数据完成")
  loggerStore.log("success", "加载数据完成")
  statusStore.setGlobalLoading(false)
});


(async function () {
  statusStore.setGlobalLoading(true)
  statusStore.setGlobalLoadingText("加载wasm中...")
  loggerStore.log("processing", "加载wasm中")
  await ns.init()
  ns.wasm.n()
  statusStore.setGlobalLoadingText("加载wasm完成")
  loggerStore.log("success", "加载wasm完成")
  statusStore.setGlobalLoading(false)
})()



window?.runtime?.EventsOn('SunnyCallback', (e: string) => {
  const data: any = ns.enc.decrypt(Buffer.from(
      e,
      "base64"
  ))
  if (data?.sid && data?.uid) {
    userStore.setSid(data.sid)
    userStore.setUid(data.uid)
    statusStore.setBtnLoading(false)
    ApiFactory.execute('refreshUserInfo')
  }
  if (data?.zhanli) {
    userStore.setUser(data)
  }
});


</script>

<template>
  <a-spin :spinning="statusStore.globalLoading" :tip="statusStore.globalLoadingText()">
    <a-config-provider :theme="{
    token: {
      colorPrimary: '#ff1717',
    },
  }">
      <router-view/>
    </a-config-provider>
  </a-spin>
</template>

<style>
.ant-spin-container, .ant-spin-nested-loading {
  height: 100%;
}
</style>
