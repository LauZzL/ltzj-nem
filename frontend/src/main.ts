import { createApp } from 'vue'
// @ts-ignore
import App from '@/App.vue'
import Router from '@/router/index';
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia'
import './style.css'
import 'ant-design-vue/dist/reset.css';
import { createFromIconfontCN } from '@ant-design/icons-vue';

const IconFont = createFromIconfontCN({
  scriptUrl: new URL('@/assets/js/iconfont.js', import.meta.url).href
});

const app = createApp(App)
const pinia = createPinia()

app.component('IconFont', IconFont);
app.use(Antd)
app.use(pinia)
app.use(Router)
app.mount('#app')