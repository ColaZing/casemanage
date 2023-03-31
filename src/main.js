import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 新增代码：引入全部组件及样式
import ElementPlus from 'element-plus'
import pinia from './store'
import 'element-plus/dist/index.css'

//引入amfe-flexible
import 'amfe-flexible/index'






const app = createApp(App)
//启用pinia
app.use(pinia)
app.use(router)

// 新增代码：注册全部组件
app.use(ElementPlus)




app.mount('#app')
