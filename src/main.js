import { createApp } from 'vue'
import App from './App.vue'
import BinUI from 'bin-ui-next'

import 'bin-ui-next/lib/styles/normalize.css' // 初始化样式
import 'bin-ui-next/lib/styles/scrollbar.css' // 滚动条样式
import 'bin-ui-next/lib/styles/index.css' // 组件库样式
import '@/styles/index.styl' // 项目样式

const app = createApp(App)
app.use(BinUI)
app.mount('#app', true)
