<template>
  <div>
    <h1>LTZJ-NEM Build 4 <a-tag :bordered="false" color="processing">{{ appStore.version==null?'Loading...':appStore.version }}</a-tag></h1>
    <p>
      基于 <a href="https://go.dev/" target="_blank">Golang</a>、<a href="https://vuejs.org/" target="_blank">Vue3</a>、<a href="https://vitejs.dev/" target="_blank">Vite</a> 构建，跨平台、快速、免费。
    </p>
    <div class="home-container">
      <a-card>
        <a-space>
          <a-button @click="inputPort"><PlayCircleFilled />启动SunnyCore</a-button>
          <a-modal v-model:open="open" title="启动SunnyCore">
            <template #footer>
              <a-button key="cancel" @click="open = false">取消</a-button>
              <a-button key="start" type="primary" @click="startSunnyCore">启动</a-button>
            </template>
            <a-form layout="horizontal" :model="formState"  autocomplete="off">
              <a-form-item label="端口号">
                <a-input-number v-model:value="formState.port" placeholder="请输入端口号" />
              </a-form-item>
            </a-form>
          </a-modal>
          <a-button @click="stopSunnyCore"><PauseCircleFilled />停止SunnyCore</a-button>
        </a-space>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref, type UnwrapRef} from "vue";
import {useAppStore} from "@/store/app.ts";
import {useStatusStore} from "@/store/status.ts";
import {useLoggerStore} from "@/store/logger.ts";
import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons-vue'
import { StartSunnyCore, StopSunnyCore } from '@/wailsjs/go/main/App'
import {message, Modal} from "ant-design-vue";

interface Result{
  Code: number,
  Msg: string
}

interface FormState {
  port: number;
}
const formState: UnwrapRef<FormState> = reactive({
  port: 2026
});

const appStore = useAppStore();
const statusStore = useStatusStore();
const loggerStore = useLoggerStore();
const open = ref(false)

const inputPort = () => {
  open.value = true
}

const startSunnyCore = async () => {
  open.value = false
  statusStore.setGlobalLoadingText("启动中SunnyCore中...")
  loggerStore.log("processing", "启动中SunnyCore中")
  statusStore.setGlobalLoading(true)
  try {
    const result: Result = <Result>await StartSunnyCore(appStore.port)
    if (result.Code != 0) {
      Modal.error({
        title: '启动SunnyCore失败',
        content: result.Msg,
      });
    }else{
      message.success('启动成功，请重新登录游戏');
      loggerStore.log("success", "启动成功，等待登录游戏中")
    }
  } catch (e){
    Modal.error({
      title: '启动SunnyCore失败',
      content: e,
    });
    loggerStore.log("error", "启动SunnyCore失败")
  } finally {
    statusStore.setGlobalLoading(false)
  }
}

const stopSunnyCore = async () => {
  statusStore.setGlobalLoadingText("停止SunnyCore中...")
  loggerStore.log("processing", "停止SunnyCore中")
  statusStore.setGlobalLoading(true)
  try {
    const result: Result = <Result>await StopSunnyCore()
    if (result.Code != 0) {
      Modal.error({
        title: '停止SunnyCore失败，请重试',
        content: result.Msg,
      });
      loggerStore.log("error", "停止SunnyCore失败")
    }else{
      message.success('停止SunnyCore成功');
      loggerStore.log("success", "停止SunnyCore成功")
    }
  } catch (e) {
    Modal.error({
      title: '停止SunnyCore失败，请重试',
      content: e,
    });
    loggerStore.log("error", "停止SunnyCore失败")
  } finally {
    statusStore.setGlobalLoading(false)
  }

}


</script>

<style scoped>

</style>
