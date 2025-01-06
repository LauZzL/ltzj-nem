<script setup lang="ts">
import router from "@/router";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  }
});

const navTo = (to: string) => {
  if (to) {
    router.push(to);
  }
};
</script>

<template>
  <div class="content-menu-container">
    <a-card size="small" :bordered="true" style="margin-left: 12px">
      <div class="content-menu-bd">
        <a-space>
          <a-button @click="navTo(item.path)" v-for="item in props.items" type="text" danger>{{ item.title }}</a-button>
        </a-space>
      </div>
    </a-card>
  </div>
</template>

<style scoped>
.content-menu-container {
  margin-bottom: 12px;
}
.content-menu-bd {
  display: flex;
  justify-content: center;
}
</style>