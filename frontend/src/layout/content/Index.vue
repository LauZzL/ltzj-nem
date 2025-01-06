<template>
    <a-layout-content style="margin-left: 12px;padding: 12px;background-color: #fff;border-radius: 12px;">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.fullPath" />
        </keep-alive>
        <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.fullPath" />
      </router-view>
    </a-layout-content>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>
