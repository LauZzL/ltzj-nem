<script setup lang="ts">
import CodeMirror from "@/components/common/CodeMirror.vue";
import {onMounted, ref} from "vue";
import { useLoggerStore } from "@/store/logger";
import {useStatusStore} from "@/store/status.ts";
import {useSettingStore} from "@/store/setting.ts";
import common from "@/utils/common.ts";
import ScriptList from "@/components/ScriptList.vue";

const codeMirrorRef = ref(null);
const loggerStore = useLoggerStore()
const statusStore = useStatusStore()
const settingStore = useSettingStore()

const scripts = ref([])

const executor = () => {
  const code: string = settingStore.code
  try {
    const func = new Function(code)
    func()
  } catch (e) {
    loggerStore.log("error", `执行失败:${e}`)
  }
};

onMounted( async() => {
  //@ts-ignore
  const items = await go.main.App.GetJSFiles()
  items.forEach(item => {
    const fileName = item.Name
    const fileSource = item.Source
    const metaData = common.parseScriptMetadata(fileSource)
    scripts.value.push({
      name: fileName,
      source: fileSource,
      meta: metaData
    })
  })
})


</script>

<template>
  <a-tabs v-model:activeKey="statusStore.scriptActive" style="height: 100%" :bodyStyle="{'height': '100%'}">
    <a-tab-pane key="1" tab="开发者">
      <a-space style="margin-bottom: 10px">
        <a-button @click="executor">执行</a-button>
        <a-button>保存</a-button>
      </a-space>
      <CodeMirror ref="codeMirrorRef"></CodeMirror>
    </a-tab-pane>
    <a-tab-pane key="2" tab="已安装" force-render>
      <script-list :data="scripts"></script-list>
    </a-tab-pane>
  </a-tabs>
</template>

<style>
.ant-tabs-content-holder {
  height: 40% !important;
}

.ant-tabs-content {
  height: 100% !important;
}

</style>