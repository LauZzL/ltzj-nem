<script setup lang="ts">
import {useSettingStore} from "@/store/setting.ts";
import {useStatusStore} from "@/store/status.ts";

const settingStore = useSettingStore()
const statusStore = useStatusStore()

const props = defineProps({
  data: Array
})

const openSite = (e) => {
  window.open(e, '_blank')
}

const edit = (e) => {
  settingStore.code = e
  statusStore.scriptActive = "1"
}
</script>

<template>
  <div>
    <a-card v-for="(item, index) in props.data" :key="index">
      <div class="script-panel">
        <div class="script-info">
          <a-image :src="item.meta.icon" width="32px" height="32px" />
          <div class="script-content">
            <div class="script-name">{{ item.meta.name }} <a-tag color="success">{{ item.meta.version }}</a-tag></div>
            <div class="script-desc">{{ item.meta.description }}</div>
          </div>
        </div>
        <div class="script-action">
          <span class="script-author" @click="openSite(item.meta.site)">{{ item.meta.author }}</span>
          <a-space>
            <a-button type="default" @click="edit(item.source)">编辑</a-button>
            <a-button type="primary">运行</a-button>
          </a-space>
        </div>
      </div>
    </a-card>
  </div>
</template>

<style scoped>
.script-panel {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

.script-name {
  font-size: 16px;
  color: #333;
  font-weight: bold;
}

.script-desc {
  font-size: 12px;
  color: #666;
}

.script-info {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.script-content {
  margin-left: 10px;
}

.script-author {
  font-size: 12px;
  color: #666;
  margin-right: 10px;
  cursor: pointer;
}
</style>