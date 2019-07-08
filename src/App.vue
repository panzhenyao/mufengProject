<template>
  <div id="app">
    <mf-header></mf-header>
    <router-view />
    <mf-footer></mf-footer>
    <!-- 电梯导航 -->
    <section class="elevator-nav">
      <div class="mf-aside-btn erweima-box">
        <div class="erweima-img">
          <img :src="erweimaSrc" />
        </div>
      </div>
      <!-- 电梯导航功能按钮 -->
      <div class="mf-aside-btn elevator-btn" @click="backTop"></div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 控制回到顶部按钮是否显示
      toTopIsShow: false,
      // 二维码图标
      erweimaSrc: require('./upload/wechat.png')
    }
  },

  methods: {
    toTop() {
      if (document.documentElement.scrollTop > 0) {
        document.documentElement.scrollTop = 0
      }
    },
    // TweenJs 动画监听
    tweenAni: function() {
      requestAnimationFrame(this.tweenAni)
      TWEEN.update() // ================================= 关键是这句
    },

    // 回到顶部
    backTop: function() {
      // 获取当前的窗口滚动距离
      const appScrollTopNow = {
        y: window.scrollY
      } // ================================= 定义一个初始位置
      const appScrollTopEnd = {
        y: 0
      } // ================================= 定义一个结束位置

      // 设置新的缓动动画
      new TWEEN.Tween(appScrollTopNow) // 传入开始位置
        .to(AppScrollTopEnd, 600) // 指定时间内完成结束位置
        .easing(TWEEN.Easing.Quadratic.Out) // 缓动方法名
        .onUpdate(() => {
          // 上面的值更新时执行的设置
          document.documentElement.scrollTop = appScrollTopNow.y
          document.body.scrollTop = appScrollTopNow.y
        })
        .start() // ================================= 不要忘了合适的时候启动动画
    }
  },

  created() {
    var _this = this
    window.onscroll = function() {
      // 鼠标滚轮滚动距离超过10像素时，回到顶部按钮才显示
      if (document.documentElement.scrollTop > 10) {
        _this.toTopIsShow = true
      } else {
        _this.toTopIsShow = false
      }
    }
  },
  mounted() {
    // 初始化 TweenJs 监听
    this.tweenAni()
  }
}
</script>

<style lang='less' scoped>
</style>
