<template>
    <a-layout-sider width="200" style="background: #fff;padding: 12px;border-radius: 12px;">
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline" :style="{ height: '100%', borderRight: 0 }"
            @click="handleClick">
            <a-menu-item v-for="item in items" :key="item.path" :id="item.path">
                <IconFont :type="item.icon" />
                <span>{{ item.title }}</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {useRouter} from "vue-router";

const selectedKeys = ref<string[]>(['/framework/home']);

const router = useRouter();
const routes = router.getRoutes();

const menuList = routes.filter(
    (item: any) => item.meta && item.meta.title && item.meta.isMenu && item.meta.menuType === 1
);

const items = menuList.map((item: any) => {
    return {
      key: item.path,
        icon: item.meta.icon,
        label: item.meta.title,
        title: item.meta.title,
        path: item.path
    };
});

const handleClick = (e: any) => {
    router.push(e.key);
};

</script>

<style scoped></style>
