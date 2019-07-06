<template>
  <footer>
    <div class="container">
      <div class="row partner">
        <div
          v-for="(item, index) in partnerInfo"
          :key="index"
          class="partner-icon col-md-2 col-sm-3 col-xs-4"
        >
          <img :src="item.url" />
        </div>
      </div>
    </div>
    <div class="business">
      <div class="container">
        <div class="row business-content">
          <div class="footer-logo">
            <img src="../../assets/img/logo_f.svg" />
          </div>
        </div>
        <div class="row footer-contact">
          <div class="col-md-3 col-sm-6 col-xs-6 footer-contact-part1">
            <h3>慕枫网络</h3>
            <ul class="contact-list">
              <li v-for="(item, index) in contactList" :key="index">
                <i>></i>
                {{item}}
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-6 contacted-msg footer-contact-part2">
            <p>
              <i class="iconfont icon-dizhi"></i> 宁波市鄞州区创新128号
            </p>
            <p>
              <i class="iconfont icon-dianhua"></i> 0574-2558 3731
            </p>
            <p>
              <i class="iconfont icon-youjian"></i> gsir.mfweb@qq.com
            </p>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-6 footer-contact-part3">
            <!-- 案例标签 -->
            <ul>
              <li v-for="(item, index) in exampleLink" :key="index" class="example-link">
                <a href="javascript:;">{{item}}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-6 footer-contact-part4">
            <div class="api-icon">
              <!-- 企业接口图标 -->
              <i class="iconfont icon-qq"></i>
              <i class="iconfont icon-weixin"></i>
              <i class="iconfont icon-weibo"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>
        © 2018 慕枫网络 All Rights Reserved. Design by MFWEB
        <span>
          <a>网站声明</a>
          <span>|</span>
          <a>隐私政策</a>
        </span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      assetsPath: '../../assets/img/',
      partnerInfo: [
        { id: 1, url: require('../../assets/img/icon1.png') },
        { id: 2, url: require('../../assets/img/icon2.png') },
        { id: 3, url: require('../../assets/img/icon3.png') },
        { id: 4, url: require('../../assets/img/icon4.png') },
        { id: 5, url: require('../../assets/img/icon5.png') },
        { id: 6, url: require('../../assets/img/icon6.png') },
        { id: 7, url: require('../../assets/img/icon7.png') },
        { id: 8, url: require('../../assets/img/icon8.png') },
        { id: 9, url: require('../../assets/img/icon9.png') },
        { id: 10, url: require('../../assets/img/icon10.png') },
        { id: 11, url: require('../../assets/img/icon11.png') },
        { id: 12, url: require('../../assets/img/icon12.png') }
      ],
      contactList: [
        '慕枫官网',
        '慕枫模板站',
        '慕枫酷站',
        '慕枫八戒网',
        '慕枫官网',
        '慕枫模板站',
        '慕枫酷站',
        '慕枫八戒网'
      ],
      exampleLink: ['农业案例', '林业案例', '渔业案例', '畜牧业案例']
    }
  },

  methods: {},

  created() {}
}
</script>

<style lang='less' scoped>
footer {
  border-top: 1px solid #dddddd;
  .partner {
    margin: 0 auto;
    padding: 1.875rem 0;
    max-width: 1168px;

    .partner-icon {
      max-width: 190px;
      width: 100%;
      margin: 0 auto;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      > img {
        max-width: 100%;
        max-height: 50px;
        width: 100%;
        opacity: 0.6;
      }
    }
    /* 自适应图片尺寸 */
    @media (max-width: 616px) {
      .partner-icon {
        max-width: 130px !important;
      }
    }
  }
  .business {
    background-color: #2c5c32;
    .business-content {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-logo {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        min-height: 9.375rem;
        max-width: 160px;
        width: 100%;
        padding-left: 14px;
        img {
          width: 100%;
        }
      }
    }
    .footer-contact {
      @media screen and (max-width: 499px) {
        .footer-contact-part1,
        .footer-contact-part2,
        .footer-contact-part3,
        .footer-contact-part4 {
          width: 100%;
          .api-icon {
            position: relative;
            top: -1.875rem;
          }
        }
      }
      @media screen and (max-width: 991px) {
        .footer-contact-part3 {
          width: 50%;
          align-items: flex-start;
          margin-top: 30px;
          padding-left: 28px;
        }
        .footer-contact-part4 {
          .api-icon {
            float: right;
          }
        }
      }
      h3 {
        color: #dddddd;
        font-size: 16px;
        font-weight: bold;
        margin: 0 0 6px 0;
        width: 100%;
        padding-left: 14px;
      }
      .contact-list {
        font-weight: 500;
        li {
          padding: 0.1875rem;
          color: #dddddd;
          transform: translate(30%, 0);
        }
      }
      .contacted-msg {
        > p {
          transform: translate(30%, 0);
          color: #dddddd;
        }
      }
      .api-icon {
        display: block;
        height: 0;
        > [class^='iconfont'] {
          color: #ddd;
        }
      }
      /* 慕枫网络案例链接 */
      .example-link {
        float: left;
        margin: 0 3px 6px 0;
        > a {
          background: rgba(255, 255, 255, 0.5);
          color: #ddd;
          height: 1.4375rem;
          width: 4.5625rem;
          padding: 2px 8px;
          border-radius: 2px;
          transition: all 0.3s ease-in;
        }
        > a:hover {
          color: rgba(44, 91, 57, 1);
          background: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #18411f;
    color: #ddd;
    text-align: center;
    p {
      margin: 10px 0 10px;
    }
    p span {
      margin-left: 20px;
      a {
        color: #ddd;
        cursor: pointer;
      }
      span {
        margin: 0 5px;
      }
    }
  }
}
</style>
