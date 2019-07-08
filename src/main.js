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
 * vue-awesome-swiper 轮播图插件
 */
import './plugins/element.js'
import './plugins/swiper.js'

/*
 * 样式部分
 * normalize.css
 * 全局样式
 * 阿里字体图标
 * hamburgers 样式
 * element-ui index.css
 * element-ui display.css
 * boostrap.css
 * swiper css
 */
// import './assets/css/normalize-v8.css'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import './assets/css/hamburgers.min.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css'
// import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

// 注册全局组件
Vue.component('mf-header', mfHeader)
Vue.component('mf-footer', mfFooter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
