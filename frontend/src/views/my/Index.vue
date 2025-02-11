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
                <a-button :loading="statusStore.getBtnLoading()" @click="refreshUser">
                  <template #icon>
                    <RedoOutlined />
                  </template>
                </a-button>
                <a-button :loading="statusStore.getBtnLoading()" danger @click="userStore.logout()">退出登录</a-button>
              </a-space>
            </div>
          </a-typography-paragraph>
          <a-descriptions>
            <a-descriptions-item label="金币">{{ userStore.user?.playerPo.m1 }}</a-descriptions-item>
            <a-descriptions-item label="钻石">{{ userStore.user?.playerPo.m2 }}</a-descriptions-item>
            <a-descriptions-item label="体力">{{ userStore.user?.playerPo.energy }}</a-descriptions-item>
            <a-descriptions-item label="战力">{{ userStore.user?.zhanli }}</a-descriptions-item>
            <a-descriptions-item label="挑战币">{{ userStore.user?.playerPo?.pvp_coin }}</a-descriptions-item>
            <a-descriptions-item label="已获得">{{ userStore.user?.playerPo?.pack_capability }}</a-descriptions-item>
            <a-descriptions-item label="氪金">{{ userStore.user?.playerPo?.rechargeValue }}</a-descriptions-item>
            <a-descriptions-item label="背包">{{ userStore.user?.playerPo?.pack_used }}/{{userStore.user?.playerPo?.pack_capability }}</a-descriptions-item>
            <a-descriptions-item label="贵族">{{ userStore.user?.playerPo?.vipLevel }}</a-descriptions-item>
            <a-descriptions-item label="章节">{{ userStore.user?.playerPo?.stageState }}</a-descriptions-item>
            <a-descriptions-item label="扫荡卡">{{ userStore.user?.sweep?.count }}</a-descriptions-item>
          </a-descriptions>
        </a-typography>
      </div>
      <div id="setting">
        <a-typography>
          <h5>设置</h5>
          <a-typography-paragraph>
            <a-space>
              <a-modal v-model:open="open" title="Bin Cache - 请手动复制信息">
                <a-textarea v-model:value="infoData"></a-textarea>
              </a-modal>
              <a-modal v-model:open="open2" title="Bin Cache - 请将信息粘贴到此处" ok-text="导入" @ok="importData">
                <a-textarea v-model:value="infoData"></a-textarea>
              </a-modal>
              <a-button @click="open2 = true">导入信息</a-button>
              <a-button @click="exportInfo">导出信息</a-button>
            </a-space>
          </a-typography-paragraph>
        </a-typography>
      </div>
      <div id="security">
        <a-typography>
          <h5>Security</h5>
          <a-typography-paragraph>
            <a-form>
              <a-form-item label="安全模式">
                <a-switch v-model:checked="settingStore.safeEnable" checked-children="开" un-checked-children="关" />
              </a-form-item>
            </a-form>
          </a-typography-paragraph>
        </a-typography>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {type AnchorProps, message} from "ant-design-vue";
import {useUserStore} from "@/store/user.ts";
import {RedoOutlined} from "@ant-design/icons-vue";
import {useStatusStore} from "@/store/status.ts";
import {useBinStore} from "@/store/bin.ts";
import {useSettingStore} from "@/store/setting.ts";
import {ApiFactory} from "@/utils/featureFactory.ts";

const userStore = useUserStore()
const statusStore = useStatusStore()
const binStore = useBinStore()
const settingStore = useSettingStore()

const infoData = ref<string>('')

const open = ref(false)
const open2 = ref(false)

const items = ref([
  {
    key: '1',
    href: '#user',
    title: '我的',
  },
  {
    key: '2',
    href: '#setting',
    title: '设置',
  },
  {
    key: '3',
    href: '#security',
    title: 'Security',
  }
])
const getContainer = () => {
  return document.querySelector('.content');
};
const handleClick: AnchorProps['onClick'] = (e, link) => {
  e.preventDefault();
  if (link.href) {
    let element = document.getElementById(link.href.replace('#', ''))
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
};


const refreshUser = async () => {
  await ApiFactory.execute('refreshUserInfo')
}

const exportInfo = async () => {
  const data = {
    binData: binStore.binData,
    binDataLoaded: binStore.binDataLoaded
  }
  infoData.value = JSON.stringify(data)
  open.value = true
}

const importData = async () => {
  const data = JSON.parse(infoData.value)
  binStore.binData = data.binData
  binStore.binDataLoaded = data.binDataLoaded
  open2.value = false
  message.success('导入成功!');
}

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
