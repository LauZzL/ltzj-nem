<template>
    <layout></layout>
</template>
<script lang="ts" setup>
import Layout from '@/layout/Layout.vue';
import {useStatusStore} from "@/store/status.ts";

const statusStore = useStatusStore();
</script>
<style scoped>
#components-layout-demo-top-side-2 .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
}

.site-layout-background {
    background: #fff;
}
</style>