<template>
  <a-row :gutter="[16,16]">
    <a-col :span="4" v-for="feature in featureList" :key="feature.name">
      <div class="feature-item" @click="handleFeatureClick(feature)">
        <div class="feature-item-icon">
          <component :is="feature.icon" class="feature-icon" />
        </div>
        <div class="feature-name">
          <a-tag :bordered="false" color="red">{{ feature.name }}</a-tag>
        </div>
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Row as ARow, Col as ACol } from 'ant-design-vue';
import { GiftOutlined } from '@ant-design/icons-vue';

interface Feature {
  icon: any;
  name: string;
}

const featureList = ref<Feature[]>([
  { icon: GiftOutlined, name: '幸运转盘' },
]);

const handleFeatureClick = (feature: Feature) => {
  console.log(`Feature clicked: ${feature.name}`);
};
</script>

<style scoped>
.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 16px;
}

.feature-icon {
  font-size: 24px;
}

.feature-name {
  font-size: 14px;
}

.feature-item-icon {
  width: 50px;
  height: 50px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  display: flex;
  margin-bottom: 5px;
}

.ant-tag {
  margin-inline-end: 0 !important;
}
</style>
