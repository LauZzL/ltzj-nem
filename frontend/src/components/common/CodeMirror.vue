<script setup lang="ts">
import {ref} from "vue";
import Codemirror from 'codemirror-editor-vue3'
import 'codemirror/addon/display/placeholder.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/dracula.css'
import 'codemirror/lib/codemirror.css'


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

const code = ref('// ==NemScript==\n' +
    '// @name         example\n' +
    '// @version      1.0.0\n' +
    '// @description  example js!\n' +
    '// @author       example\n' +
    '// ==/NemScript==\n' +
    '\n' +
    '\n' +
    '(async function(){\n' +
    '\t\n' +
    '})()')


</script>

<template>
  <Codemirror
      v-model:value="code"
      :options="cmOptions"
      border
      style="height: 95%;"
  />
</template>

<style scoped>

</style>