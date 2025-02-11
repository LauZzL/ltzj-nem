<script setup lang="ts">
import {ref} from "vue";
import {useSettingStore} from "@/store/setting";
import Codemirror from 'codemirror-editor-vue3'
import 'codemirror/addon/display/placeholder.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/dracula.css'
import 'codemirror/lib/codemirror.css'

const settingStore = useSettingStore()

const cmOptions = ref({
  mode: 'javascript',
  theme: 'dracula',
  lineNumbers: true,
  lineWrapping: true,
  lint: true,
  styleActiveLine: true,
  readonly: true,
  viewportMargin: Infinity,
// gutters: ['CodeMirror-lint-markers'],
  placeholder: ''
})

</script>

<template>
  <Codemirror
      v-model:value="settingStore.code"
      :options="cmOptions"
      border
      style="height: 80%;"
  />
</template>

<style scoped>

</style>