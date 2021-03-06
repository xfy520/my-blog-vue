<template>
  <div>
    <headers></headers>
    <particles></particles>
    <tags-panel :tagsList="[]" title="文章标签"></tags-panel>
    <div class="content-text" data-aos="zoom-in-up">
      <div class="card-text">
        <div class="card-text-content">
          <div id="recommend-sections" class="recommend">
            <div class="row-text">
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../../assets/home/carouse/2.jpg') + ')'}"
                >
                  <div class="post-body">
                    <a
                      href="https://blinkfox.github.io/2018/11/24/ruan-jian-she-ji/ruan-jian-cheng-xu-she-ji-yuan-ze/"
                    >
                      <h3 class="post-title">软件程序设计原则</h3>
                    </a>
                    <a class="post-description">
                      一、前言软件也像人一样，具有生命力，从出生到死亡，会经历多种变化。软件架构设计也
                      不是一蹴而就的，是不断地演进发展。每个程序员都可以从理解编程
                    </a>
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <span class="publish-author">
                        <font-awesome-icon icon="bookmark" size="lg" class="pr-1" />2018-11-05
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../../assets/home/carouse/2.jpg') + ')'}"
                >
                  <div class="post-body">
                    <a
                      href="https://blinkfox.github.io/2018/11/05/hou-duan/java/java-io-zhi-shi-zheng-li/"
                    >
                      <h3 class="post-title">Java IO 知识整理</h3>
                    </a>
                    <a class="post-description">
                      各IO类关系梳理
                      InputStream: Java IO中的顶级的字节输入流的抽象类，定义了最基础的输入、读取的相关方法。实现了Close
                    </a>
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <span class="publish-author">
                        <font-awesome-icon icon="bookmark" size="lg" class="pr-1" />2018-11-05
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../../assets/home/carouse/3.jpg') + ')'}"
                >
                  <div class="post-body">
                    <a
                      href="https://blinkfox.github.io/2018/10/24/hou-duan/java/java-ji-he-kuang-jia-zhi-shi-zheng-li/"
                    >
                      <h3 class="post-title">Java集合框架知识整理</h3>
                    </a>
                    <a class="post-description">
                      Java集合框架主要由Collection和Map两个根接口及其子接口、实现类组成。
                      集合类关系梳理
                      Collection接口继承了Iter
                    </a>
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <span class="publish-author">
                        <font-awesome-icon icon="bookmark" size="lg" class="pr-1" />2018-11-05
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../../assets/home/carouse/5.jpg') + ')'}"
                >
                  <div class="post-body">
                    <a
                      href="https://blinkfox.github.io/2019/03/02/hou-duan/spring/springboot2.x-dan-yuan-ce-shi/"
                    >
                      <h3 class="post-title">SpringBoot2.x 单元测试</h3>
                    </a>
                    <a class="post-description">
                      一个 bug 被隐藏的时间越长，修复这个 bug 的代价就越大。
                      我曾经在 单元测试指南 一文中写到过单元测试的必要性和 Java 单元
                    </a>
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <span class="publish-author">
                        <font-awesome-icon icon="bookmark" size="lg" class="pr-1" />2018-11-05
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../../assets/home/carouse/5.jpg') + ')'}"
                >
                  <div class="post-body">
                    <a
                      href="https://blinkfox.github.io/2019/03/02/hou-duan/spring/springboot2.x-dan-yuan-ce-shi/"
                    >
                      <h3 class="post-title">SpringBoot2.x 单元测试</h3>
                    </a>
                    <a class="post-description">
                      一个 bug 被隐藏的时间越长，修复这个 bug 的代价就越大。
                      我曾经在 单元测试指南 一文中写到过单元测试的必要性和 Java 单元
                    </a>
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <span class="publish-author">
                        <font-awesome-icon icon="bookmark" size="lg" class="pr-1" />2018-11-05
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../../assets/home/carouse/5.jpg') + ')'}"
                >
                  <div class="post-body">
                    <a
                      href="https://blinkfox.github.io/2019/03/02/hou-duan/spring/springboot2.x-dan-yuan-ce-shi/"
                    >
                      <h3 class="post-title">SpringBoot2.x 单元测试</h3>
                    </a>
                    <a class="post-description">
                      一个 bug 被隐藏的时间越长，修复这个 bug 的代价就越大。
                      我曾经在 单元测试指南 一文中写到过单元测试的必要性和 Java 单元
                    </a>
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <span class="publish-author">
                        <font-awesome-icon icon="bookmark" size="lg" class="pr-1" />2018-11-05
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../../assets/home/carouse/5.jpg') + ')'}"
                >
                  <div class="post-body">
                    <a
                      href="https://blinkfox.github.io/2019/03/02/hou-duan/spring/springboot2.x-dan-yuan-ce-shi/"
                    >
                      <h3 class="post-title">SpringBoot2.x 单元测试</h3>
                    </a>
                    <a class="post-description">
                      一个 bug 被隐藏的时间越长，修复这个 bug 的代价就越大。
                      我曾经在 单元测试指南 一文中写到过单元测试的必要性和 Java 单元
                    </a>
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <span class="publish-author">
                        <font-awesome-icon icon="bookmark" size="lg" class="pr-1" />2018-11-05
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-text s12-text m6-text" data-aos="zoom-in-up">
                <div
                  @mouseenter="mouseover($event)"
                  @mouseleave="mouseLeave($event)"
                  class="post-card-text"
                  v-bind:style="{backgroundImage: 'url(' + require('../../assets/home/carouse/5.jpg') + ')'}"
                >
                  <div class="post-body">
                    <a
                      href="https://blinkfox.github.io/2019/03/02/hou-duan/spring/springboot2.x-dan-yuan-ce-shi/"
                    >
                      <h3 class="post-title">SpringBoot2.x 单元测试</h3>
                    </a>
                    <a class="post-description">
                      一个 bug 被隐藏的时间越长，修复这个 bug 的代价就越大。
                      我曾经在 单元测试指南 一文中写到过单元测试的必要性和 Java 单元
                    </a>
                    <div class="post-categories">
                      <span class="publish-date">
                        <font-awesome-icon icon="clock" size="lg" class="pr-1" />2018-11-05
                      </span>
                      <span class="publish-author">
                        <font-awesome-icon icon="bookmark" size="lg" class="pr-1" />2018-11-05
                      </span>
                    </div>
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
      height: 0
    };
  },
  methods: {
    mouseover(event) {
      let elem = event.currentTarget;
      elem.classList.add("animated");
      elem.classList.add("pulse");
    },
    mouseLeave(event) {
      let elem = event.currentTarget;
      elem.classList.remove("animated");
      elem.classList.remove("pulse");
    }
  },
  mounted() {
    this.height = parseInt(`${document.documentElement.clientHeight}`);
    window.addEventListener(
      "resize",
      () => {
        this.height = parseInt(`${document.documentElement.clientHeight}`);
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
@import "../../style/main.scss";
@import "../../style/tag.scss";
</style>