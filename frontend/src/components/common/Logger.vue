<script setup lang="ts">
import {useLoggerStore} from "@/store/logger.ts";

const loggerStore = useLoggerStore();


interface ILog {
  id: string | number;
  time: string;
  type: string;
  msg: string;
  color?: string;
  icon?: {
    url: string;
    url2: string;
  };
}

// 在组件中使用ILog接口
const logs: ILog[] = loggerStore.getLogger() as ILog[];

console.log(logs);

</script>

<template>
  <div style="overflow-y: auto">

    <div class="log" v-for="log in logs" :key="log.id">
      <a-typography-paragraph style="margin-bottom: 0">
        <a-tag :bordered="false" :color="log.type">{{ log.time }}</a-tag>
        <a-image v-if="log?.icon != undefined" :src="log?.icon?.url" :fallback="log?.icon?.url2" alt="icon"
                 style="margin-left: 0.3rem;margin-right: 0.5rem; border-radius: 3px; width: 22px; height: 22px;"/>
        <span :style="log.color != undefined ? `color: ${log.color}`: ''">{{ log.msg }}</span>
      </a-typography-paragraph>
    </div>
  </div>
</template>

<style scoped>
.log {
  margin-top: 0;
  margin-bottom: 0.5em;
  font-weight: 500;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  display: flex;
}
</style>