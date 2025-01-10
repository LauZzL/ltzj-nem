<template>

  <div>
    <div class="anchor-nav">
      <a-anchor
          :affix="false"
          :items="items"
          :get-container="getContainer"
          :on-click="handleClick"
          :target-offset="10"
      ></a-anchor>
    </div>
    <!-- 右侧内容区域 -->
    <div class="content">
      <div id="user">
        <a-typography>
          <h5>我的</h5>
          <a-typography-paragraph style="display: flex;justify-content: space-between;align-items: center;">
            <div>
              <a-space wrap :size="16">
                <a-avatar shape="square" :size="32">
                  <template #icon><a-image :src="userStore.user.playerPo.head_url"></a-image></template>
                </a-avatar>
                <a-typography-text>{{userStore.user.playerPo.nick}}</a-typography-text>
              </a-space>
            </div>
            <div>
              <a-space>
                <a-button>
                  <template #icon>
                    <RedoOutlined />
                  </template>
                </a-button>
                <a-button danger @click="userStore.logout()">退出登录</a-button>
              </a-space>
            </div>
          </a-typography-paragraph>
          <a-descriptions>
            <a-descriptions-item label="金币">{{ userStore.user.playerPo.m1 }}</a-descriptions-item>
            <a-descriptions-item label="钻石">{{ userStore.user.playerPo.m2 }}</a-descriptions-item>
            <a-descriptions-item label="体力">{{ userStore.user.playerPo.energy }}</a-descriptions-item>
            <a-descriptions-item label="战力">{{ userStore.user.zhanli }}</a-descriptions-item>
            <a-descriptions-item label="挑战币">{{ userStore.user.playerPo.pvp_coin }}</a-descriptions-item>
            <a-descriptions-item label="已获得">{{ userStore.user.playerPo.pack_capability }}</a-descriptions-item>
            <a-descriptions-item label="氪金">{{ userStore.user.playerPo.rechargeValue }}</a-descriptions-item>
            <a-descriptions-item label="背包">{{ userStore.user.playerPo.pack_used }}/{{userStore.user.playerPo.pack_capability }}</a-descriptions-item>
            <a-descriptions-item label="贵族">{{ userStore.user.playerPo.vipLevel }}</a-descriptions-item>
            <a-descriptions-item label="章节">{{ userStore.user.playerPo.stageState }}</a-descriptions-item>
          </a-descriptions>
        </a-typography>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import type {AnchorProps} from "ant-design-vue";
import {useUserStore} from "@/store/user.ts";
import {RedoOutlined} from "@ant-design/icons-vue";

const userStore = useUserStore()

const items = ref([
  {
    key: '1',
    href: '#user',
    title: '我的',
  }
])
const getContainer = () => {
  return document.querySelector('.content');
};
const handleClick: AnchorProps['onClick'] = (e, link) => {
  e.preventDefault();
  console.log(link, 'link');
  console.log(getContainer, 'getContainer');
  if (link.href) {
    let element = document.getElementById(link.href.replace('#', ''))
    console.log('element', element)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
.anchor-nav {
  position: fixed;
  overflow-y: auto;
  padding: 16px;
  width: 30%;
}

.content {
  padding: 16px;
  width: 70%;
  margin-left: 30%;
}
</style>
