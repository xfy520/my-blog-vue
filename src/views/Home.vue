<template>
  <div>
    <book-block
      shadowSides="0.8"
      shadowFlip="0.4"
      top="36px"
      interval="3000"
      keyCode
      :width="width + ''"
      :height="height + ''"
    >
      <div v-for="(item, index) in carouselList" :key="index" class="bb-item">
        <div
          v-bind:style="{height: height + 'px',  backgroundImage: 'url(' + item.img + ')', backgroundColor: '#F44336',  backgroundSize:'cover',
          backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', textAlign: 'center'}"
          class="red"
        >
          <div
            style="margin: 0 auto;position: relative; top: 50%; transform: translateY(-50%);z-index: 999999999;"
            v-bind:style="{maxWidth: (width / 1.5) + 'px'}"
          >
            <div
              style="font-size: 2.6rem !important; line-height: 1.85em !important; color: white;"
            >{{item.title}}</div>
            <div
              style="font-weight: 300;font-size: 1.25rem;line-height: 1.4em;color: #eee;"
            >{{item.content}}</div>
            <div style="position: relative;top: 10vh; text-align: center;">
              <a
                target="_blank"
                style="  color: white !important;margin: 10px 15px;border: 1px solid #fff;padding: 0 35px;
              height: 45px;line-height: 45px;border-radius: 30px;font-size: 1rem;position: relative;cursor: pointer;display: inline-block;"
              >
                <font-awesome-icon icon="eye" size="lg" class="pr-1" />阅读更多
              </a>
            </div>
          </div>
        </div>
      </div>
    </book-block>
    <particles></particles>
    <div class="content-text" data-aos="zoom-in-up">
      <div class="card-text">
        <div class="card-text-content">
          <div id="recommend-sections" class="recommend">
            <div class="title">文章列表</div>
            <div class="row-text">
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../assets/home/carouse/1.jpg') + ')'}"
                >
                  <div class="post-body">
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <div class="card-action-text article-tags">
                        <div class="marquee-inner-wrapper">
                          <div class="first">
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/设计模式/">
                              <span class="chip bg-color">设计模式</span>
                            </a>
                            <a href="/tags/设计模式/">
                              <span class="chip bg-color">设计模式</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://blinkfox.github.io/2018/11/24/ruan-jian-she-ji/ruan-jian-cheng-xu-she-ji-yuan-ze/"
                    >
                      <h3 class="post-title">软件程序设计原则</h3>
                    </a>
                    <p
                      class="post-description"
                    >一、前言软件也像人一样，具有生命力，从出生到死亡，会经历多种变化。软件架构设计也不是一蹴而就的，是不断地演进发展。每个程序员都可以从理解编程</p>
                    <a
                      class="read-more"
                      style="background:linear-gradient(to right,#FF5E3A 0%,#FF2A68 100%)"
                      target="_blank"
                    >
                      <font-awesome-icon icon="eye" size="lg" class="pr-1" />阅读更多
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../assets/home/carouse/2.jpg') + ')'}"
                >
                  <div class="post-body">
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <div class="card-action-text article-tags">
                        <div class="marquee-inner-wrapper">
                          <div class="first">
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/设计模式/">
                              <span class="chip bg-color">设计模式</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://blinkfox.github.io/2018/11/05/hou-duan/java/java-io-zhi-shi-zheng-li/"
                    >
                      <h3 class="post-title">Java IO 知识整理</h3>
                    </a>
                    <p class="post-description">
                      各IO类关系梳理
                      InputStream: Java IO中的顶级的字节输入流的抽象类，定义了最基础的输入、读取的相关方法。实现了Close
                    </p>
                    <a
                      class="read-more"
                      style="background:linear-gradient(to right,#EF4DB6 0%,#C643FC 100%)"
                      target="_blank"
                    >
                      <font-awesome-icon icon="eye" size="lg" class="pr-1" />阅读更多
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../assets/home/carouse/3.jpg') + ')'}"
                >
                  <div class="post-body">
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <div class="card-action-text article-tags">
                        <div class="marquee-inner-wrapper">
                          <div class="first">
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/设计模式/">
                              <span class="chip bg-color">设计模式</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://blinkfox.github.io/2018/10/24/hou-duan/java/java-ji-he-kuang-jia-zhi-shi-zheng-li/"
                    >
                      <h3 class="post-title">Java集合框架知识整理</h3>
                    </a>
                    <p class="post-description">
                      Java集合框架主要由Collection和Map两个根接口及其子接口、实现类组成。
                      集合类关系梳理
                      Collection接口继承了Iter
                    </p>
                    <a
                      class="read-more"
                      style="background:linear-gradient(to right,#1AD6FD 0%,#1D62F0 100%)"
                      target="_blank"
                    >
                      <font-awesome-icon icon="eye" size="lg" class="pr-1" />阅读更多
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../assets/home/carouse/5.jpg') + ')'}"
                >
                  <div class="post-body">
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <div class="card-action-text article-tags">
                        <div class="marquee-inner-wrapper">
                          <div class="first">
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/设计模式/">
                              <span class="chip bg-color">设计模式</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://blinkfox.github.io/2019/03/02/hou-duan/spring/springboot2.x-dan-yuan-ce-shi/"
                    >
                      <h3 class="post-title">SpringBoot2.x 单元测试</h3>
                    </a>
                    <p class="post-description">
                      一个 bug 被隐藏的时间越长，修复这个 bug 的代价就越大。
                      我曾经在 单元测试指南 一文中写到过单元测试的必要性和 Java 单元
                    </p>
                    <a
                      class="read-more"
                      style="background:linear-gradient(to right,#FFCC00 0%,#FF9500 100%)"
                      target="_blank"
                    >
                      <font-awesome-icon icon="eye" size="lg" class="pr-1" />>阅读更多
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../assets/home/carouse/5.jpg') + ')'}"
                >
                  <div class="post-body">
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <div class="card-action-text article-tags">
                        <div class="marquee-inner-wrapper">
                          <div class="first">
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/设计模式/">
                              <span class="chip bg-color">设计模式</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://blinkfox.github.io/2019/03/02/hou-duan/spring/springboot2.x-dan-yuan-ce-shi/"
                    >
                      <h3 class="post-title">SpringBoot2.x 单元测试</h3>
                    </a>
                    <p class="post-description">
                      一个 bug 被隐藏的时间越长，修复这个 bug 的代价就越大。
                      我曾经在 单元测试指南 一文中写到过单元测试的必要性和 Java 单元
                    </p>
                    <a
                      class="read-more"
                      style="background:linear-gradient(to right,#FFCC00 0%,#FF9500 100%)"
                      target="_blank"
                    >
                      <font-awesome-icon icon="eye" size="lg" class="pr-1" />>阅读更多
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../assets/home/carouse/5.jpg') + ')'}"
                >
                  <div class="post-body">
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <div class="card-action-text article-tags">
                        <div class="marquee-inner-wrapper">
                          <div class="first">
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/设计模式/">
                              <span class="chip bg-color">设计模式</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://blinkfox.github.io/2019/03/02/hou-duan/spring/springboot2.x-dan-yuan-ce-shi/"
                    >
                      <h3 class="post-title">SpringBoot2.x 单元测试</h3>
                    </a>
                    <p class="post-description">
                      一个 bug 被隐藏的时间越长，修复这个 bug 的代价就越大。
                      我曾经在 单元测试指南 一文中写到过单元测试的必要性和 Java 单元
                    </p>
                    <a
                      class="read-more"
                      style="background:linear-gradient(to right,#FFCC00 0%,#FF9500 100%)"
                      target="_blank"
                    >
                      <font-awesome-icon icon="eye" size="lg" class="pr-1" />>阅读更多
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../assets/home/carouse/5.jpg') + ')'}"
                >
                  <div class="post-body">
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <div class="card-action-text article-tags">
                        <div class="marquee-inner-wrapper">
                          <div class="first">
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/设计模式/">
                              <span class="chip bg-color">设计模式</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://blinkfox.github.io/2019/03/02/hou-duan/spring/springboot2.x-dan-yuan-ce-shi/"
                    >
                      <h3 class="post-title">SpringBoot2.x 单元测试</h3>
                    </a>
                    <p class="post-description">
                      一个 bug 被隐藏的时间越长，修复这个 bug 的代价就越大。
                      我曾经在 单元测试指南 一文中写到过单元测试的必要性和 Java 单元
                    </p>
                    <a
                      class="read-more"
                      style="background:linear-gradient(to right,#FFCC00 0%,#FF9500 100%)"
                      target="_blank"
                    >
                      <font-awesome-icon icon="eye" size="lg" class="pr-1" />>阅读更多
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../assets/home/carouse/5.jpg') + ')'}"
                >
                  <div class="post-body">
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <div class="card-action-text article-tags">
                        <div class="marquee-inner-wrapper">
                          <div class="first">
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/Java/">
                              <span class="chip bg-color">Java</span>
                            </a>
                            <a href="/tags/设计模式/">
                              <span class="chip bg-color">设计模式</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://blinkfox.github.io/2019/03/02/hou-duan/spring/springboot2.x-dan-yuan-ce-shi/"
                    >
                      <h3 class="post-title">SpringBoot2.x 单元测试</h3>
                    </a>
                    <p class="post-description">
                      一个 bug 被隐藏的时间越长，修复这个 bug 的代价就越大。
                      我曾经在 单元测试指南 一文中写到过单元测试的必要性和 Java 单元
                    </p>
                    <a
                      class="read-more"
                      style="background:linear-gradient(to right,#FFCC00 0%,#FF9500 100%)"
                      target="_blank"
                    >
                      <font-awesome-icon icon="eye" size="lg" class="pr-1" />>阅读更多
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pages-plumb :maxWidth="768"></pages-plumb>
    <pages-btn :maxWidth="768"></pages-btn>
  </div>
</template>

<script>
import { init } from "aos";
export default {
  data() {
    return {
      height: 0,
      width: 0,
      carouselList: [
        {
          title: "这是测试标题1",
          content:
            "这是省略内容1这是省略内容1这是省略内容1这是省略内容1这是省略内容1这是省略内容1这是省略内容1这是省略内容1这是省略内容1这是省略内容1这是省略内容1这是省略内容1",
          img: require("../assets/home/carouse/1.jpg"),
          url: ""
        },
        {
          title: "这是测试标题2",
          content: "这是省略内容2这是省略内容2这是省略内容2这是省略内容2",
          img: require("../assets/home/carouse/2.jpg"),
          url: ""
        },
        {
          title: "这是测试标题3",
          content:
            "这是省略内容3这是省略内容3这是省略内容3这是省略内容3这是省略内容3",
          img: require("../assets/home/carouse/3.jpg"),
          url: ""
        },
        {
          title: "这是测试标题4",
          content:
            "这是省略内容4这是省略内容4这是省略内容4这是省略内容4这是省略内容4这是省略内容4",
          img: require("../assets/home/carouse/4.jpg"),
          url: ""
        },
        {
          title: "这是测试标题5",
          content: "这是省略内容5这是省略内容5这是省略内容5这是省略内容5",
          img: require("../assets/home/carouse/5.jpg"),
          url: ""
        }
      ]
    };
  },
  methods: {
    mouseover(event) {
      let elem = event.currentTarget;
      elem.classList.add("animated");
      elem.classList.add("pulse");
      let first = elem.querySelector(".first");
      first.classList.add("first-marquee");
    },
    mouseLeave(event) {
      let elem = event.currentTarget;
      elem.classList.remove("animated");
      elem.classList.remove("pulse");
      let first = elem.querySelector(".first");
      first.classList.remove("first-marquee");
    }
  },
  mounted() {
    this.height = parseInt(`${document.documentElement.clientHeight}`) - 20;
    this.width = parseInt(`${document.documentElement.clientWidth}`);
    window.addEventListener(
      "resize",
      () => {
        this.height = parseInt(`${document.documentElement.clientHeight}`);
        this.width = parseInt(`${document.documentElement.clientWidth}`);
      },
      false
    );
    this.$nextTick(() => {
      init();
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../style/main.scss";
@import "../style/home.scss";
@media only screen and (max-width: 425px) {
  .content-text {
    padding-top: 36px !important;
  }
}
</style>