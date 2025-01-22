<template>
    <a-layout style="height: 100%;">
        <a-layout-content style="padding: 12px 12px;">
            <a-layout style="height: 100%;">
                <a-layout>
                    <layout-aside></layout-aside>
                    <a-layout>
                      <content-menu v-if="router.currentRoute.value.name.includes('FrameworkFeature')" class="content-menu" :items="items"></content-menu>
                      <layout-content style="height: 50%; overflow: auto"></layout-content>
                      <Logger class="logger"></Logger>
                    </a-layout>
                </a-layout>
            </a-layout>
        </a-layout-content>

    </a-layout>

</template>

<script lang="ts" setup>
import LayoutAside from './aside/Index.vue'
import LayoutContent from './content/Index.vue'
import Logger from '@/components/common/Logger.vue'
import ContentMenu from "@/components/common/ContentMenu.vue";

import {useRouter} from "vue-router";

const router = useRouter();
const routes = router.getRoutes();


const menuList = routes.filter(
    (item: any) => item.meta && item.meta.title && item.meta.isMenu && item.meta.menuType === 2
);

const items = menuList.map((item: any) => {
  return {
    key: item.path,
    title: item.meta.title,
    path: item.path
  };
});

</script>

<style scoped>
.logger, content-menu {
  margin-left: 12px;
  margin-top: 12px;
  padding: 12px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  height: 30%;
}
</style>
