<template>
    <a-layout style="height: 100%;">
        <a-layout-content style="padding: 12px 12px;">
            <a-layout style="height: 100%;">
                <a-layout>
                    <layout-aside></layout-aside>
                    <layout-content></layout-content>
                </a-layout>
            </a-layout>
        </a-layout-content>
    </a-layout>

</template>

<script lang="ts" setup>
import LayoutAside from './aside/Index.vue'
import LayoutContent from './content/Index.vue'
</script>

<style>

</style>
