<script setup lang="ts">
import router from "@/router";
import {computed, onMounted} from "vue";
import {useStatusStore} from "@/store/status.ts";

const statusStore = useStatusStore();

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  }
});

const menus = computed(() => {
  return props.items.map(item => {
    return {
      key: item.path,
      label: item.title,
    }
  })
})

const navTo = (to: {item: string, key: string, path: string}) => {
  if (to.key) {
    router.push({
      path: to.key
    });
  }
};

onMounted(() => {
  router.push({
    path: statusStore.dailyMenuSelect[0]
  })
})


</script>

<template>
  <div class="content-menu-container">
    <a-menu @click="navTo" v-model:selectedKeys="statusStore.dailyMenuSelect" mode="horizontal" :items="menus" />
  </div>
</template>

<style scoped>
.content-menu-container {
  margin-bottom: 12px;
  margin-left: 12px;
}
.content-menu-bd {
  display: flex;
  justify-content: center;
}
</style>