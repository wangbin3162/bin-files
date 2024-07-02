import { createApp } from 'vue'
import App from './App.vue'
import BinUI from 'bin-ui-design'

import 'bin-ui-design/dist/styles/index.css' // 组件库样式
import '@/styles/index.styl' // 项目样式

const app = createApp(App)
app.use(BinUI)
app.mount('#app', true)
