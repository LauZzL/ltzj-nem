<template>
  <a-tabs v-model:activeKey="statusStore.levelActive">
    <a-tab-pane key="1" tab="攻打">
      <a-form :model="settingStore.levelAttack" labelAlign="left" layout="inline">
        <a-form-item label="关卡">
          <a-input type="number" style="width: 150px;" v-model:value="settingStore.levelAttack.level">
            <template #suffix>
              关
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox v-model:checked="settingStore.levelAttack.is_hero">
            英雄
          </a-checkbox>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="间隔">
          <a-input type="number" style="width: 150px;" v-model:value="settingStore.levelAttack.sleeps">
            <template #suffix>
              毫秒
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="对局时间">
          <a-input type="number" style="width: 80px;" v-model:value="settingStore.levelAttack.attack_timer">
            <template #suffix>
              秒
            </template>
          </a-input>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="次数">
          <a-input type="number" style="width: 150px;" v-model:value="settingStore.levelAttack.num">
            <template #suffix>
              次
            </template>
          </a-input>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="双倍">
          <a-select
              ref="select"
              v-model:value="settingStore.levelAttack.two_gain"
              style="width: 150px"
          >
            <a-select-option :value="0">关闭</a-select-option>
            <a-select-option :value="1">任何情况</a-select-option>
            <a-select-option :value="2">3经验时</a-select-option>
          </a-select>
        </a-form-item>
        <div style="display: block;width: 100%;margin-top: 10px"/>
        <a-form-item label="操作">
          <a-button :loading="statusStore.getBtnLoading()"
                    @click="ApiFactory.execute('levelAttack', settingStore.levelAttack)">出击
          </a-button>
          <a-button :loading="statusStore.getBtnLoading()"
                    @click="ApiFactory.execute('levelSweep', settingStore.levelAttack)" style="margin-left: 20px">扫荡
          </a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>
    <a-tab-pane key="2" tab="自定义" force-render>
      <a-textarea v-model:value="settingStore.customLevelAttack.rule"></a-textarea>
      <a-space style="margin-top: 10px">
        <a-button @click="ApiFactory.execute('levelCustom', {rules:rules, type: 1})">攻打</a-button>
        <a-button @click="ApiFactory.execute('levelCustom', {rules:rules, type: 2})">扫荡</a-button>
        <a-button @click="editForm = true">自定义编辑器</a-button>
      </a-space>
      <a-modal v-model:open="editForm" title="规则编辑器" @ok="editForm = false">
        <a-form labelAlign="left" layout="inline">
          <a-form-item label="关卡">
            <a-input type="number" style="width: 150px;" v-model:value="edit_form.level">
              <template #suffix>
                关
              </template>
            </a-input>
          </a-form-item>
          <a-form-item label="难度">
            <a-select
                v-model:value="edit_form.is_hero"
                style="width: 150px"
            >
              <a-select-option :value="0">普通</a-select-option>
              <a-select-option :value="1">英雄</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="分数">
            <a-input type="number" style="width: 150px;" v-model:value="edit_form.score">
              <template #suffix>
                分
              </template>
            </a-input>
          </a-form-item>
          <a-form-item label="双倍">
            <a-select
                v-model:value="edit_form.two_gain"
                style="width: 150px"
            >
              <a-select-option :value="0">关闭</a-select-option>
              <a-select-option :value="1">任何情况</a-select-option>
              <a-select-option :value="2">3经验时</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="对局时间">
            <a-input type="number" style="width: 80px;" v-model:value="edit_form.attack_timer">
              <template #suffix>
                秒
              </template>
            </a-input>
          </a-form-item>
        </a-form>
        <a-space style="margin-top: 10px">
          <a-button @click="add_rule">添加</a-button>
        </a-space>
        <a-table :columns="columns" :data-source="rules" :pagination="false" style="margin-top: 10px">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'is_hero'">
            <span v-if="!record.is_hero">
              <a-tag>普通</a-tag>
            </span>
              <span v-else>
              <a-tag color="processing">英雄</a-tag>
            </span>
            </template>
            <template v-if="column.key === 'two_gain'">
            <span v-if="record.two_gain === 0">
              <a-tag>关闭</a-tag>
            </span>
              <span v-else-if="record.two_gain === 1">
              <a-tag color="success">任何情况</a-tag>
            </span>
              <span v-else-if="record.two_gain === 2">
              <a-tag color="processing">3经验时</a-tag>
            </span>
            </template>
            <template v-if="column.key === 'operation'">
              <a-button @click="delete_rule(record)">删除</a-button>
            </template>
          </template>
        </a-table>
      </a-modal>
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts" setup>
import {useStatusStore} from "@/store/status.ts";
import {useSettingStore} from "@/store/setting.ts";
import {ApiFactory} from '@/utils/featureFactory.ts'
import {TableColumnsType} from "ant-design-vue";
import {computed, ref} from "vue";


const statusStore = useStatusStore()
const settingStore = useSettingStore()

const editForm = ref<boolean>(false)

// [{"level":1,"is_hero":false,"score":10000,"two_gain":0,"attack_timer":10}]

const columns: TableColumnsType = [
  {title: '关卡', width: 20, dataIndex: 'level', key: 'level', fixed: 'left'},
  {title: '难度',  dataIndex: 'is_hero', key: 'is_hero', fixed: 'left'},
  {title: '分数', dataIndex: 'score', key: 'score'},
  {title: '双倍奖励', dataIndex: 'two_gain', key: 'two_gain'},
  {title: '攻打时间', dataIndex: 'attack_timer', key: 'attack_timer'},
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
  },
];

interface DataItem {
  level: number;
  is_hero: boolean;
  score: number;
  two_gain: number;
  attack_timer: number;
}

const rules = computed(() => {
  try {
    return JSON.parse(settingStore.customLevelAttack.rule)
  } catch (e) {
    return []
  }
})

const edit_form = ref({
  level: 1,
  is_hero: 1,
  two_gain: 0,
  attack_timer: 10,
  score: 10000
})


const add_rule = () => {
  const rules = JSON.parse(settingStore.customLevelAttack.rule);
  if (Array.isArray(rules)) {
    rules.push(JSON.parse(JSON.stringify(edit_form.value)));
    settingStore.customLevelAttack.rule = JSON.stringify(rules);
  } else {
    settingStore.customLevelAttack.rule = JSON.stringify(edit_form.value);
  }
}

const delete_rule = (e) => {
  const rules = JSON.parse(settingStore.customLevelAttack.rule);
  rules.splice(e, 1);
  settingStore.customLevelAttack.rule = JSON.stringify(rules);
}
</script>

