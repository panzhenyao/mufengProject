<template>
  <div class="main">
    <div class="swiper-container1">
      <swiper :options="swiperOption1" ref="swiper1">
        <!-- 首页轮播图 -->
        <swiper-slide v-for="(item, index) in swiperImgList" :key="index">
          <img :src="item.src" />
          <div class="flex-title">
            <h4>{{item.title}}</h4>
            <span>{{item.content}}</span>
            <p class="button-detail">查看详情</p>
          </div>
        </swiper-slide>
        <!-- 轮播图控制 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="aboutus container">
      <div class="row abouts-content">
        <h3>关于慕枫</h3>
        <p>About MF</p>
        <div class="mf-line"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <p>慕枫网络原来名万里枫工作室，成立于2014年3月，一直致力于网站建设的标准化，流程化，以及个性化。</p>
              <p>从一个创业团队到一个成熟的网站设计公司，慕枫网络仅仅用了两年多的时间，慕枫网络建立了属于自己的品牌形象，形成了自己的极简化设计理念，并拥有一支战斗力极强的网站建设团队。</p>
            </div>
            <div class="col-md-8">
              <p>The original name Lifeng million mu Feng Network Studio, founded in March 2014, has been committed to the standardization, the website construction process, as well as individual.</p>
              <p>From a business team to a mature website design company, Mu Maple network only spent more than two years, Mu Feng network to establish their own brand image, has formed its own very simplified design concept, and has a strong fighting force website construction team.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row about-partner">
        <!-- 合作伙伴轮播图 -->
        <div class="swiper-container2">
          <swiper :options="swiperOption2" ref="swiper2">
            <swiper-slide v-for="item in swiperPartnerIcons" :key="item.id">
              <img :src="item.src" />
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev">
              <ul class="partnerButton-prev">
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="swiper-button-next" slot="button-next">
              <ul class="partnerButton-next">
                <li></li>
                <li></li>
              </ul>
            </div>
          </swiper>
        </div>
      </div>
    </div>
    <!-- 详情栏 -->
    <div class="index-detail">
      <div class="row">
        <div class="col-xs-6 col-md-2 detail-item" v-for="item in indexDetailLinks" :key="item.id">
          <div class="icon-detail">
            <i class="iconfont" :class="item.icon"></i>
            <h5>{{ item.title }}</h5>
          </div>
          <div class="content-detail">
            <p>{{ item.content }}</p>
          </div>
          <div>
            <a class="button-detail" href="javascript:;">查看详情</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 新闻栏 -->
    <div class="news-article">
      <!-- 新闻栏头部 -->
      <div class="container article-content">
        <div class="row">
          <h3>新闻中心</h3>
          <p>News Center</p>
          <div class="mf-line"></div>
        </div>
      </div>
      <!-- 新闻栏主体 -->
      <div class="article-item" v-for="item in newsInfoLists" :key="item.id">
        <div class="article-bg-shade"></div>
        <div class="container">
          <div class="row">
            <div class="col-xs-2 col-sm-1 left-artIndex">
              <div class="mf-index">
                <span>{{ (item.id + "").padStart(2,"0") }}</span>
              </div>
            </div>
            <div class="col-xs-10 col-sm-11 rigth-artContent">
              <div>
                <time>{{ item.createTime }}</time>
              </div>
              <div>
                <p class="active-item">{{ item.content }}</p>
              </div>
              <div>
                <span class="active-item">
                  <i class="iconfont icon-aui-icon-like"></i>58 LIKES
                </span>
                <span class="active-item">
                  <i class="iconfont icon-weixinxiaoxi"></i>查看详情
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 查看详情 -->
      <div class="articles-row-box">
        <div class="button-detail">查看详情</div>
      </div>
    </div>
    <!-- 信息栏 -->
    <div class="about-others">
      <div class="container mf-header">
        <div class="row">
          <h3>我们的团队</h3>
          <p>Idea about talents</p>
          <div class="mf-line"></div>
        </div>
      </div>
      <div class="others-content">
        <div class="row">
          <div class="others-pic col-md-6">
            <img src="../../upload/index-team.jpg" alt />
          </div>
          <div class="others-art col-md-6">
            <h5>没有最好，只有更好</h5>
            <p>吴群，慕枫网络创始人，大三开始创业，从扫楼推销开始起步，一步一步积累，从十平米的大学生创业基地到200的写字楼，从一人单打独斗到十几人的纯技术团队，毕业一年半的时间，目前慕枫网络网站定制开发类目已位列猪八戒网浙江省第一名 两年多的时间慕枫也一直坚守着自己的方向，坚持只做一件事，并将品质放在第一位。</p>
            <div>
              <a href="javascript:;" class="button-detail">加入我们</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 企业荣誉 -->
    <div class="aboutus-honor">
      <div class="container">
        <div class="row mf-header">
          <h3>企业荣誉</h3>
          <p>Enterprise honor</p>
          <div class="mf-line"></div>
        </div>
        <div class="row swiper-container3">
          <swiper :options="swiperOption3" ref="swiper3">
            <!-- 首页轮播图 -->
            <swiper-slide v-for="(item, index) in swiperHonorImgLists" :key="index">
              <img :src="item.src" />
            </swiper-slide>
            <!-- 轮播图控制按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: document.documentElement.clientWidth,
      swiperImgList: [
        {
          id: 1,
          src: require('../../upload/bg2_1920_950.jpg'),
          title: '农，天下之本',
          content: '非力车农无以富邦也'
        },
        {
          id: 2,
          src: require('../../upload/bg_1920_950.jpg'),
          title: '大踏步，大发展',
          content: '永不言退，我们是最好的团队'
        }
      ],
      // 配置swiper1
      swiperOption1: {
        pagination: {
          // 分页器相关设置都写在这个对象里，刚开始写错了写在外面，怎么点击都不切换- -|||
          el: '.swiper-pagination',
          clickable: true
        },
        paginationType: 'bullets',
        loop: true,
        loopAdditionalSlides: 1,
        initialSlide: 2,
        autoplay: false,
        slidesPerView: 1,
        allowTouchMove: true,
        spaceBetween: 0,
        observer: true,
        observeParents: true
      },
      swiperPartnerIcons: [
        { id: 1, src: require('../../assets/img/index-icon1.png') },
        { id: 2, src: require('../../assets/img/index-icon2.png') },
        { id: 3, src: require('../../assets/img/index-icon3.png') },
        { id: 4, src: require('../../assets/img/index-icon4.png') },
        { id: 5, src: require('../../assets/img/index-icon5.png') }
      ],
      // 配置swiper2
      swiperOption2: {
        slidesPerView: 4,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        allowTouchMove: true,
        loop: true,
        autoplay: true,
        loopAdditionalSlides: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      // 详情栏数据
      indexDetailLinks: [
        {
          id: 1,
          title: '极简设计',
          content:
            '对品牌最全面的概括。用最简洁的方式，最直观的传达企业理念，展示企业形象。',
          icon: 'icon-pingguo'
        },
        {
          id: 2,
          title: '极简流程',
          content:
            '对品牌最全面的概括。用最简洁的方式，最直观的传达企业理念，展示企业形象。',
          icon: 'icon-jingwuicon_svg-'
        },
        {
          id: 3,
          title: '极简价值',
          content:
            '对品牌最全面的概括。用最简洁的方式，最直观的传达企业理念，展示企业形象。',
          icon: 'icon-yu'
        },
        {
          id: 4,
          title: '极简文化',
          content:
            '对品牌最全面的概括。用最简洁的方式，最直观的传达企业理念，展示企业形象。',
          icon: 'icon-huafangtubiaozhizuomobandinggao-'
        },
        {
          id: 5,
          title: '慕枫优势',
          content:
            '对品牌最全面的概括。用最简洁的方式，最直观的传达企业理念，展示企业形象。',
          icon: 'icon-huluobu'
        }
      ],
      // 新闻栏数据
      newsInfoLists: [
        {
          id: 1,
          createTime: '2017.11.21',
          content: '宁波网站开加速 CDN和SEO优化相呼应'
        },
        {
          id: 2,
          createTime: '2017.11.20',
          content: '宁波网站开发和网站模板各自的优势'
        },
        {
          id: 3,
          createTime: '2017.11.19',
          content: '网站改版时网站开发如何将对SEO的影响降到最低'
        }
      ],
      // 配置swiper3
      swiperOption3: {
        autoplay: true,
        effect: 'fade',
        speed: 1000,
        // 手掌指针
        grabCursor: true,
        // 轮播图间距
        spaceBetween: 0,
        loop: true,
        slidesPerView: 3,
        pagination: '.swiper-pagination',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        observer: true,
        observeParents: true
      },
      swiperHonorImgLists: [
        {
          id: 1,
          src: require('../../upload/i-rotate1.png')
        },
        {
          id: 2,
          src: require('../../upload/i-rotate2.png')
        },
        {
          id: 3,
          src: require('../../upload/i-rotate3.png')
        },
        {
          id: 4,
          src: require('../../upload/i-rotate4.png')
        },
        {
          id: 5,
          src: require('../../upload/i-rotate5.png')
        }
      ]
    }
  },

  methods: {
    // 监视 screenWidth 的方法并重新复制
    reSetPerView() {
      this.$watch('screenWidth', val => {
        if (val > 992) {
          return null
        }
      })
    }
  },
  created() {},
  mounted() {
    var _that = this
    window.onresize = () => {
      // 监听屏幕变化
      return (() => {
        window.screenWidth = document.body.clientWidth
        _that.screenWidth = window.screenWidth
      })()
    }
  }
}
</script>

<style lang='less' scoped>
.main {
  position: relative;
  top: -2.5rem;
  // 轮播图样式
  .swiper-container1 {
    position: relative;
    max-height: 950px;
    z-index: 99999;
    img {
      width: 100%;
    }
    .flex-title {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 9999;
      color: #fff;
      transform: translate(-50%, -50%);
      text-align: center;
      
      h4 {
        font-size: 6.25rem;
        font-weight: 800;
      }
      span {
        font-weight: 500;
        font-size: 3.125rem;
      }
      @media screen and (max-width: 520px) {
        h4 {
        font-size: 3.25rem;
        font-weight: 800;
        }
        .button-detail {
          margin-top: 1rem;
          padding: 0.425rem;
        }
      }
    }
  }
  // 关于我们
  .aboutus {
    margin-top: 3.4375rem;
    h3 {
      color: #2c5b39;
      font-weight: 600;
      font-size: 4rem;
    }
    p {
      font-weight: 600;
      color: #9c9c9c;
      font-size: 3rem;
    }
    [class^='col-md-'] {
      padding: 0;
      line-height: 1.875rem;
      p {
        font-weight: 500;
        font-size: 2.1875rem;
        color: #9c9c9c;
      }
      p:nth-child(2) {
        margin-top: 1.8rem;
      }
    }
    .col-md-8 {
      padding-left: 3.125rem;
    }
    @media screen and (max-width: 992px) {
      .col-md-8 {
        padding-left: 0;
      }
    }
  }
  // 合作伙伴轮播图
  .about-partner {
    margin-top: 7.5rem;
    .swiper-container2 {
      position: relative;
      max-width: 68.75rem;
      left: 50%;
      transform: translate(-50%, 0);
      .swiper-slide {
        text-align: center;
      }
      [class^='swiper-button-'] {
        background-image: none;
        width: unset;
        [class^='partnerButton-'] {
          li {
            float: left;
            margin-left: 5px;
          }
          li::after {
            display: inline-block;
            content: '';
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #000;
          }
        }
      }
    }
  }
  // 详情栏
  .index-detail {
    margin: 4.375rem 0;
    background: url('../../upload/icon_1920_950.jpg') no-repeat;
    background-size: cover;
    .detail-item {
      position: relative;
      width: 20%;
      @media screen and(max-width: 750px) {
        width: 50%;
      }
      text-align: center;
      color: #fff;
      position: relative;
      box-sizing: border-box;
      padding: 18.75rem 0;
      text-align: center;
      margin: 0 auto;
      border-right: 1px solid #999;
      max-height: 70.5rem;
      h5 {
        font-size: 2.5rem;
      }
      .icon-detail {
        position: relative;
        font-size: 8rem;
        top: 1.25rem;
      }
      .button-detail {
        top: 0;
      }
      .content-detail {
        color: transparent;
      }
      .button-detail {
        position: relative;
        left: 0;
        top: 2.425rem;
        border-color: #fff;
        color: #fff;
        padding: 0.65rem 1.5rem;
        font-size: 16px;
      }

      div:nth-of-type(2) {
        p {
          position: relative;
          top: -2.25rem;
          height: 0;
          line-height: 2.3rem;
          padding: 0 20px;
        }
      }

      [class^='iconfont'] {
        font-size: 8.125rem;
      }
    }

    .detail-item:hover {
      .icon-detail {
        position: relative;
        top: -2.4rem;
        transition: top 0.25s linear;
      }
      .button-detail {
        position: relative;
        top: 5.25rem;
        transition: all 0.25s ease-out;
      }
      .content-detail {
        color: #fff;
        transition: all 0.3s ease-out;
      }
    }
    .button-detail:hover {
      background-color: #2c5b39;
      border: #2c5b39;
      color: #fff;
      transition: all 0.25s linear;
    }
  }
  // 新闻栏
  .news-article {
    .article-content {
      margin-top: 3.4375rem;
      h3 {
        color: #2c5b39;
        font-weight: 600;
        font-size: 4rem;
      }
      p {
        font-weight: 600;
        color: #9c9c9c;
        font-size: 3rem;
      }
    }
    .article-item {
      position: relative;
      background: url('../../upload/index_news_bg.jpg') no-repeat;
      padding: 3.125rem 0;
      .col-sm-1 {
        padding-left: 0;
      }
      @media screen and (max-width: 500px) {
        .left-artIndex {
          display: none;
        }
      }
      .rigth-artContent {
        div:nth-of-type(2) {
          margin: 0.625rem 0;
          p {
            font-size: 20px;
          }
        }
        div:nth-of-type(3) {
          span {
            [class^='iconfont'] {
              color: #bbb;
              margin-right: 0.625rem;
            }
          }
          span:nth-of-type(2) {
            margin-left: 0.9375rem;
          }
        }
      }
      .article-bg-shade {
        position: absolute;
        background: #fff;
        width: 100%;
        height: 100%;
        top: 0;
        opacity: 1;
      }
    }
    .article-item:hover {
      color: #fff;
      .article-bg-shade {
        opacity: 0;
        transition: all 0.25s ease-in;
      }
      .container {
        transform: translate(3%, 0);
        transition: all 0.25s ease-in;
      }
      [class^='iconfont'] {
        color: #fff !important;
        transition: all 0.25s ease-in;
      }
    }
    .active-item:hover {
      cursor: pointer;
      color: #2c5b39;
      transition: all 0.5s linear;
      i {
        color: #fff;
      }
    }
  }
  .articles-row-box {
    width: 100%;
    display: flex;
    margin: 2.875rem 0;
    .button-detail {
      border-color: #2c5b39;
      color: #2c5b39;
      margin-top: 0;
      padding: 0.65rem 1.5rem;
      font-size: 16px;
      width: unset;
    }
    .button-detail:hover {
      background-color: #2c5b39;
      color: #fff;
      transition: all 0.25s linear;
    }
  }
  // 信息栏
  .others-content {
    margin: 1.875rem 0;
    background-color: #f6f6f6;

    .others-pic {
      padding-right: 0;
      img {
        width: 100%;
      }
    }
    .others-art {
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      padding: 3.25rem 6rem;
      margin-top: 6.25rem;
      h5 {
        font-size: 3.475rem;
        font-weight: 600;
        color: #2c5b39;
      }
      p {
        margin: 2.8rem 0;
        color: #9c9c9c;
      }
      .button-detail {
        left: 0;
        border-color: #2c5b39;
        color: #2c5b39;
        margin-top: 0;
        padding: 0.65rem 1.5rem;
        font-size: 16px;
      }
      .button-detail:hover {
        background-color: #2c5b39;
        color: #fff;
        transition: all 0.25s linear;
      }
    }
    @media screen and (max-width: 990px) {
      .others-art {
        margin-top: unset;
      }
    }
  }
  // 企业荣誉栏
  .aboutus-honor {
    .swiper-container3 {
      margin: 5% 0;
      .swiper-slide {
        img {
          min-height: 21.875rem;
          max-width: 32.8125rem;
        }
        .swiper-slide-active {
          img {
            margin-top: 0;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
