<template>
    <layout></layout>
</template>
<script lang="ts" setup>
import Layout from '@/layout/Layout.vue';
import {onMounted} from "vue";
import {message} from "ant-design-vue";
import {useStatusStore} from "@/store/status.ts";
import {ltzj} from "@/utils/wasm.ts";


const statusStore = useStatusStore();


onMounted(() => {
  try {
    //@ts-ignore
    typeof go.main
    ltzj.encrypt({"head":{"cmdDataSplitLength":0,"cmdId":0,"cmdLength":0,"cmdSequence":0,"cmdVersion":0,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""}})
  } catch (e) {
    message.info(`出现了异常:${e},重载中`)
    location.href = './'
  }
})


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