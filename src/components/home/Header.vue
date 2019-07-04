<template>
  <div class="fix-header">
    <el-row>
      <el-col class="api-icon">
        <!-- 企业导航 -->
        <i class="iconfont icon-qq"></i>
        <i class="iconfont icon-weixin"></i>
        <i class="iconfont icon-weibo"></i>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <h1 class="logo-mf">
          沐风企业
          <img src="../../assets/img/logo.svg" alt />
        </h1>
        <!-- 企业logo -->
      </el-col>
      <el-col :span="18" class="hidden-md-and-up">
        <div class="communicate-nav">
          <button class="hamburger hamburger--spin" :class="{'is-active' : communBtn_isActive}" type="button" @click="communBtn_isActive=!communBtn_isActive">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </el-col>
      <el-col :span="18" class="hidden-sm-and-down">
        <!-- 导航 -->
        <el-menu
          default-active="activeNav"
          class="header-menu"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <span>HOME</span>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span>ABOUT</span>
            <span>关于</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span>SERVICES</span>
            <span>服务</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span>SERVICES</span>
            <span>新闻</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span>CASES</span>
            <span>案例</span>
          </el-menu-item>
          <el-menu-item index="6">
            <span>CONTACT</span>
            <span>联系</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 导航样式
      // 沟通导航样式按钮状态变量is-active
      communBtn_isActive: false
    }
  },

  methods: {
    // 导航栏选择
    handleSelect() {}
  },

  created() {}
}
</script>

<style lang='less' scoped>
.api-icon {
  height: 72px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

/* 阿里字体颜色 */
.icon-qq,
.icon-weixin,
.icon-weibo {
  font-size: 18px/1;
  color: #2c5b39;
}
.icon-weixin {
  margin: 0 18px;
}
/* 沐风logo */
.logo-mf {
  position: relative;
  top: -15px;
  font-size: 0;
  > img {
    max-width: 170px;
    min-height: 40px;
  }
}
/* element-ui menu */
.el-menu.el-menu--horizontal {
  border-bottom: none;
}

@media screen and (max-width: 1200px) {
  .header-menu > .el-menu-item[data-v-7787a17d] {
    margin: 0 0 0 1.125rem !important;
  }
}
.header-menu > .el-menu-item[data-v-7787a17d] {
  height: 2.25rem;
  line-height: 1;
  margin: 0 0 0 3.125rem;
  padding: 0.625rem 0;
  border-bottom: none;
}
.header-menu {
  float: right;
  border-bottom: none !important;
}
.header-menu > .el-menu-item span {
  color: #2c5b39;
  font-weight: 600;
}
.header-menu > .el-menu-item span:nth-of-type(1) {
  box-sizing: border-box;
  padding-right: 5px;
}
/* 沟通导航按钮 */
.communicate-nav {
  float: right;
  .hamburger-inner {
    color: #2c5b39;
  }
}
</style>
