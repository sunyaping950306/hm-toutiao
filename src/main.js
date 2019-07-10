import Vue from 'vue'
import App from './App.vue'

// 导包
import ElementUI from 'element-ui'
// 引入样式
import 'element-ui/lib/theme-chalk/index.css'

// 在vue-cli创建的项目中 @前缀代表的是根路径 src目录
import router from '@/router'

// 在全局范围注册组件（注册element-ui组件库）
Vue.use(ElementUI)

Vue.config.productionTip = false

// 职责：依赖项目需要的资源（js模块 css资源...）
// 职责2：实例化根实例  render()渲染APP组件  然后挂载到#app的容器内容

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
