<script setup lang="ts">
import {load_wasm, ltzj} from './utils/wasm';
import {Buffer} from 'buffer';
import {useStatusStore} from "@/store/status.ts";
import {useUserStore} from "@/store/user.ts";
import {message} from "ant-design-vue";
import {useLoggerStore} from "@/store/logger.ts";

const loggerStore = useLoggerStore();
const statusStore = useStatusStore();
const userStore = useUserStore();



//@ts-ignore
if (!window?.ltwasm) {
  statusStore.setGlobalLoadingText("加载wasm中...")
  loggerStore.log("processing", "加载wasm中")
  load_wasm().then(() => {
    statusStore.setGlobalLoadingText("加载wasm完成")
    loggerStore.log("success", "加载wasm完成")
    statusStore.setGlobalLoading(false)
    // @ts-ignore
    window.ltwasm = ltzj;
    // @ts-ignore
    window?.runtime?.EventsOn('SunnyCallback', (e: string) => {
      // @ts-ignore
      const data = window.ltwasm.decrypt(Buffer.from(
          e,
          "base64"
      ))
      if (data?.sid && data?.uid) {
        userStore.setSid(data.sid)
        userStore.setUid(data.uid)
        statusStore.setBtnLoading(false)
        message.success("登录成功")
        loggerStore.log("success", "登录成功")
      }
      if (data?.zhanli) {
        userStore.user = data
      }
      //@ts-ignore
      console.debug(data);
    });

  });
}


</script>

<template>
  <a-spin :spinning="statusStore.globalLoading" :tip="statusStore.globalLoadingText">
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
