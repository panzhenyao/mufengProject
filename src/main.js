import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* 组件部分
 * 导入头部组件
 * 导入底部组件
 */
import mfHeader from './components/home/Header.vue'
import mfFooter from './components/home/Footer.vue'

/*
 * 插件部分
 * element-ui
 */
import './plugins/element.js'

/*
 * 样式部分
 * 全局样式
 * 阿里字体图标
 * element-ui.css
 */
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// 注册全局组件
Vue.component('mf-header', mfHeader)
Vue.component('mf-footer', mfFooter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
