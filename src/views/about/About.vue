<template>
  <div>
    <headers></headers>
    <particles></particles>
    <div class="content-text">
      <div class="card-text">
        <div class="card-text-content">
          <div class="recommend">
            <div class="row-text">
              <div class="first">
                <div class="col-about center-align hide-on-med-and-down">
                  <div class="statis">
                    <span class="count">
                      <a href="/">59</a>
                    </span>
                    <span class="name">文章</span>
                  </div>
                  <div class="statis">
                    <span class="count">
                      <a href="/categories">6</a>
                    </span>
                    <span class="name">分类</span>
                  </div>
                  <div class="statis">
                    <span class="count">
                      <a href="/tags">31</a>
                    </span>
                    <span class="name">标签</span>
                  </div>
                </div>
                <div class="col-about">
                  <div class="profile center-align">
                    <div class="avatar">
                      <img
                        src="../../assets/avatar.jpg"
                        alt="blinkfox"
                        class="circle responsive-img avatar-img"
                      />
                    </div>
                    <div class="author">
                      <div
                        class="post-statis hide-on-large-only aos-init aos-animate"
                        data-aos="zoom-in-right"
                      >
                        <div class="statis">
                          <span class="count">
                            <a href="/">59</a>
                          </span>
                          <span class="name">文章</span>
                        </div>
                        <div class="statis">
                          <span class="count">
                            <a href="/categories">6</a>
                          </span>
                          <span class="name">分类</span>
                        </div>
                        <div class="statis">
                          <span class="count">
                            <a href="/tags">31</a>
                          </span>
                          <span class="name">标签</span>
                        </div>
                      </div>
                      <div class="title">blinkfox</div>
                      <div class="career">软件工程师</div>
                      <div
                        class="social-link hide-on-large-only aos-init aos-animate"
                        data-aos="zoom-in-left"
                      >
                        <a href="https://github.com/blinkfox" class="tooltipped" target="_blank">
                          <font-awesome-icon :icon="['fab','github']" size="lg" />
                        </a>
                        <a href="mailto:1181062873@qq.com" class="tooltipped" target="_blank">
                          <font-awesome-icon icon="envelope-open" size="lg" />
                        </a>
                        <a
                          href="tencent://AddContact/?fromId=50&amp;fromSubId=1&amp;subcmd=all&amp;uin=1181062873"
                          class="tooltipped"
                          target="_blank"
                        >
                          <font-awesome-icon :icon="['fab','qq']" size="lg" />
                        </a>
                        <a href="/atom.xml" class="tooltipped" target="_blank">
                          <font-awesome-icon icon="rss" size="lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-about hide-on-med-and-down">
                  <div class="social-link">
                    <a href="https://github.com/blinkfox" class="tooltipped" target="_blank">
                      <font-awesome-icon :icon="['fab','github']" size="lg" />
                    </a>
                    <a href="mailto:1181062873@qq.com" class="tooltipped" target="_blank">
                      <font-awesome-icon icon="envelope-open" size="lg" />
                    </a>
                    <a
                      href="tencent://AddContact/?fromId=50&amp;fromSubId=1&amp;subcmd=all&amp;uin=1181062873"
                      class="tooltipped"
                      target="_blank"
                    >
                      <font-awesome-icon :icon="['fab','qq']" size="lg" />
                    </a>
                    <a href="/atom.xml" class="tooltipped" target="_blank">
                      <font-awesome-icon icon="rss" size="lg" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="two introduction center-align"
              >现实的抽象是语言，语言的抽象是程序，程序的抽象是数理逻辑，数理逻辑的抽象是超越认知的真理。</div>
              <div class="three">
                <div class="title center-align">文章统计图</div>
                <div class="row-about">
                  <div class="col-about">
                    <chart :options="radar" :auto-resize="true" :initOptions="initOptions" />
                  </div>
                  <div class="col-about">
                    <chart :options="radar" :auto-resize="true" :initOptions="initOptions" />
                  </div>
                  <div class="col-about">
                    <chart :options="radar" :auto-resize="true" :initOptions="initOptions" />
                  </div>
                </div>
              </div>
              <div class="four">
                <div class="title center-align">
                  <font-awesome-icon icon="gift" size="lg" class="pr-1" />&nbsp;&nbsp;我的项目
                </div>
                <div class="row-about">
                  <div class="my-project">
                    <div class="info center-align">
                      <a
                        class="icon"
                        style="background: linear-gradient(to bottom right, #66BB6A 0%, #81C784 100%)"
                      >
                        <font-awesome-icon icon="rocket" size="lg" class="pr-1" />
                      </a>
                      <div class="info-title">
                        <a>hexo-theme-matery</a>
                      </div>
                      <div class="info-desc">一个采用 Material Design 和响应式设计的 Hexo 博客主题。</div>
                    </div>
                  </div>
                  <div class="my-project">
                    <div class="info center-align">
                      <a
                        class="icon"
                        style="background: linear-gradient(to bottom right, #F06292 0%, #EF5350 100%)"
                      >
                        <font-awesome-icon icon="database" size="lg" class="pr-1" />
                      </a>
                      <div class="info-title">
                        <a>Fenix</a>
                      </div>
                      <div class="info-desc">这是 Spring Data JPA 复杂或动态 SQL 查询的扩展库。</div>
                    </div>
                  </div>
                  <div class="my-project">
                    <div class="info center-align">
                      <a
                        class="icon"
                        style="background: linear-gradient(to bottom right, #29B6F6 0%, #1E88E5 100%)"
                      >
                        <font-awesome-icon icon="file-alt" size="lg" class="pr-1" />
                      </a>
                      <div class="info-title">
                        <a>typora-vue-theme</a>
                      </div>
                      <div class="info-desc">这是 Typora Markdown 编辑器的类似 Vue 文档风格的主题。</div>
                    </div>
                  </div>
                  <div class="my-project">
                    <div class="info center-align">
                      <a
                        class="icon"
                        style="background: linear-gradient(135deg, #e079fc 0%, #7c44ff 100%)"
                      >
                        <font-awesome-icon icon="compress" size="lg" class="pr-1" />
                      </a>
                      <div class="info-title">
                        <a>stalker</a>
                      </div>
                      <div class="info-desc">这是一个简单的用来对 Java 代码做性能评估的工具库。</div>
                    </div>
                  </div>
                  <div class="my-project">
                    <div class="info center-align">
                      <a
                        class="icon"
                        style="background: linear-gradient(135deg, #309286 0%, #32dbc6 100%)"
                      >
                        <font-awesome-icon icon="table" size="lg" class="pr-1" />
                      </a>
                      <div class="info-title">
                        <a>mini-table</a>
                      </div>
                      <div class="info-desc">这是一个轻量级、零依赖、可定制化修改的 Java ASCII 表格生成库。</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="five">
                <div class="title center-align">
                  <font-awesome-icon icon="wrench" size="lg" class="pr-1" />&nbsp;&nbsp;我的技能
                </div>
                <div class="row-about">
                  <div class="col-about">
                    <div class="skillbar">
                      <div
                        class="skillbar-title"
                        style="background: linear-gradient(to right, #FF0066 0%, #FF00CC 100%); width: 90%"
                      >
                        <span>Java</span>
                      </div>
                      <div class="skill-bar-percent">90%</div>
                    </div>
                  </div>
                  <div class="col-about">
                    <div class="skillbar">
                      <div
                        class="skillbar-title"
                        style="background: linear-gradient(to right, #9900FF 0%, #CC66FF 100%); width: 80%"
                      >
                        <span>JavaScript</span>
                      </div>
                      <div class="skill-bar-percent">80%</div>
                    </div>
                  </div>
                  <div class="col-about">
                    <div class="skillbar">
                      <div
                        class="skillbar-title"
                        style="background: linear-gradient(to right, #2196F3 0%, #42A5F5 100%); width: 80%"
                      >
                        <span>HTML5</span>
                      </div>
                      <div class="skill-bar-percent">80%</div>
                    </div>
                  </div>
                  <div class="col-about">
                    <div class="skillbar">
                      <div
                        class="skillbar-title"
                        style="background: linear-gradient(to right, #00BCD4 0%, #80DEEA 100%); width: 70%"
                      >
                        <span>CSS</span>
                      </div>
                      <div class="skill-bar-percent">70%</div>
                    </div>
                  </div>
                  <div class="col-about">
                    <div class="skillbar">
                      <div
                        class="skillbar-title"
                        style="background: linear-gradient(to right, #4CAF50 0%, #81C784 100%); width: 90%"
                      >
                        <span>SQL</span>
                      </div>
                      <div class="skill-bar-percent">90%</div>
                    </div>
                  </div>
                  <div class="col-about">
                    <div class="skillbar">
                      <div
                        class="skillbar-title"
                        style="background: linear-gradient(to right, #FFEB3B 0%, #FFF176 100%); width: 80%"
                      >
                        <span>程序设计</span>
                      </div>
                      <div class="skill-bar-percent">80%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="six">
                <div class="title center-align">
                  <font-awesome-icon icon="book" size="lg" class="pr-1" />&nbsp;&nbsp;其他技能
                </div>
                <main class="content" style="min-height: 252px;">
                  <div id="tags" class="container-tags chip-container">
                    <div class="card-tags">
                      <div>
                        <div class="tag-title center-align">
                          <i class="fas fa-tags"></i>
                          &nbsp;&nbsp;{{title}}
                        </div>
                        <div class="tag-chips">
                          <a href="/tags/Hexo/" title="Hexo: 2">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #F9EBEA;"
                            >
                              Hexo
                              <span class="tag-length">2</span>
                            </span>
                          </a>
                          <a href="/tags/hexo-theme-matery/" title="hexo-theme-matery: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #F5EEF8;"
                            >
                              hexo-theme-matery
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/JavaScript/" title="JavaScript: 4">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #D5F5E3;"
                            >
                              JavaScript
                              <span class="tag-length">4</span>
                            </span>
                          </a>
                          <a href="/tags/PostgreSQL/" title="PostgreSQL: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #E8F8F5;"
                            >
                              PostgreSQL
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/数据库/" title="数据库: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #FEF9E7;"
                            >
                              数据库
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/Java/" title="Java: 43">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #F8F9F9;"
                            >
                              Java
                              <span class="tag-length">43</span>
                            </span>
                          </a>
                          <a href="/tags/Google/" title="Google: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #82E0AA;"
                            >
                              Google
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/整洁代码/" title="整洁代码: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #D7BDE2;"
                            >
                              整洁代码
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/重构/" title="重构: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #A3E4D7;"
                            >
                              重构
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/测试/" title="测试: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #85C1E9;"
                            >
                              测试
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/面向对象编程/" title="面向对象编程: 3">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #F8C471;"
                            >
                              面向对象编程
                              <span class="tag-length">3</span>
                            </span>
                          </a>
                          <a href="/tags/CPU缓存/" title="CPU缓存: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #F9E79F;"
                            >
                              CPU缓存
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/UML/" title="UML: 2">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #FFF;"
                            >
                              UML
                              <span class="tag-length">2</span>
                            </span>
                          </a>
                          <a href="/tags/设计原则/" title="设计原则: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #FEF9E7;"
                            >
                              设计原则
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/性能测试/" title="性能测试: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #F8F9F9;"
                            >
                              性能测试
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/MVEL/" title="MVEL: 2">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #D5F5E3;"
                            >
                              MVEL
                              <span class="tag-length">2</span>
                            </span>
                          </a>
                          <a href="/tags/单元测试/" title="单元测试: 2">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #D7BDE2;"
                            >
                              单元测试
                              <span class="tag-length">2</span>
                            </span>
                          </a>
                          <a href="/tags/JPA/" title="JPA: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #F5EEF8;"
                            >
                              JPA
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/Fenix/" title="Fenix: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #85C1E9;"
                            >
                              Fenix
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/Spring/" title="Spring: 2">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #F9E79F;"
                            >
                              Spring
                              <span class="tag-length">2</span>
                            </span>
                          </a>
                          <a href="/tags/SpringBoot/" title="SpringBoot: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #F9E79F;"
                            >
                              SpringBoot
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/Git/" title="Git: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #F9E79F;"
                            >
                              Git
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/Linux/" title="Linux: 4">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #E8F8F5;"
                            >
                              Linux
                              <span class="tag-length">4</span>
                            </span>
                          </a>
                          <a href="/tags/Typora/" title="Typora: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #F8F9F9;"
                            >
                              Typora
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/Markdown/" title="Markdown: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #F8F9F9;"
                            >
                              Markdown
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/Vue/" title="Vue: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #D5F5E3;"
                            >
                              Vue
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/GitLab-CI/" title="GitLab CI: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #85C1E9;"
                            >
                              GitLab CI
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/DevOps/" title="DevOps: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #F8F9F9;"
                            >
                              DevOps
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/Jenkins/" title="Jenkins: 1">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #D7BDE2;"
                            >
                              Jenkins
                              <span class="tag-length">1</span>
                            </span>
                          </a>
                          <a href="/tags/设计模式/" title="设计模式: 14">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #85C1E9;"
                            >
                              设计模式
                              <span class="tag-length">14</span>
                            </span>
                          </a>
                          <a href="/tags/Apache/" title="Apache: 4">
                            <span
                              class="chip center-align waves-effect chip-default"
                              style="background-color: #82E0AA;"
                            >
                              Apache
                              <span class="tag-length">4</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
              <div class="seven">
                <div class="title center-align">
                  <font-awesome-icon icon="image" size="lg" class="pr-1" />&nbsp;&nbsp;相册
                </div>
                <div class="row-about">
                  <div class="photo">
                    <div class="img-item">
                      <img src="../../assets/medias/0.jpg" class="responsive-img" />
                    </div>
                  </div>
                  <div class="photo">
                    <div class="img-item">
                      <img src="../../assets/medias/1.jpg" class="responsive-img" />
                    </div>
                  </div>
                  <div class="photo">
                    <div class="img-item">
                      <img src="../../assets/medias/2.jpg" class="responsive-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radar: {},
      initOptions: {
        height: 310,
        width: 310
      }
    };
  },
  mounted() {
    this.radar = {
      tooltip: {},
      radar: {
        name: {
          textStyle: {
            color: "#fff",
            fontSize: 13
          }
        },
        indicator: [
          { name: "前端", max: 26 },
          { name: "数据库", max: 26 },
          { name: "编程之道", max: 26 },
          { name: "软件工具", max: 26 },
          { name: "软件设计", max: 26 },
          { name: "后端", max: 26 }
        ],
        nameGap: 5,
        center: ["50%", "55%"],
        radius: "64%"
      },
      series: [
        {
          type: "radar",
          color: ["#3ecf8e"],
          itemStyle: { normal: { areaStyle: { type: "default" } } },
          data: [
            {
              value: [6, 1, 3, 8, 16, 25],
              name: "文章分类数量"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/main.scss";





.container-tags {
  margin-right: auto;
  margin-left: auto;
}

.chip-container .tag-title {
  margin-bottom: 10px;
  color: #ffffff;
  font-size: 1.75rem;
  font-weight: 400;
  text-align: center;
}

.chip-container .tags-posts {
  margin-top: 20px;
}

.chip-container .chip-default {
  color: #34495e;
}

.chip-container .chip {
  margin: 10px 10px;
  padding: 19px 14px;
  display: inline-flex;
  line-height: 0;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .12);
  z-index: 0;
}

.chip-container .chip:hover {
  color: #fff;
  background: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%) !important;
}


.card-tags .card-tags-content {
  padding: 24px;
  border-radius: 0 0 2px 2px
}

.card-tags .card-tags-content p {
  margin: 0
}

.card-tags .card-tags-reveal {
  padding: 24px;
  position: absolute;
  background-color: #fff;
  width: 100%;
  overflow-y: auto;
  left: 0;
  top: 100%;
  height: 100%;
  z-index: 3;
  display: none
}


.chip .tag-length {
  margin-left: 5px;
  margin-right: -2px;
  font-size: 0.5rem;
}

.chip-default .tag-length {
  color: #e91e63;
  margin-top: 1px;
}

.chip {
  display: inline-block;
  height: 32px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  line-height: 32px;
  padding: 0 12px;
  border-radius: 16px;
  background-color: #e4e4e4;
  margin-bottom: 5px;
  margin-right: 5px
}

.chip:focus {
  outline: none;
  background-color: #26a69a;
  color: #fff
}

.waves-effect {
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  z-index: 1;
  -webkit-transition: .3s ease-out;
  transition: .3s ease-out
}



.seven .row-about .photo {
  float: left;
  width: 33.33333333333333%;
  margin-left: auto;
  left: auto;
  right: auto;
  margin: 0.5rem 0;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;
}

.seven .row-about .photo img {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  cursor: pointer;
}

.skillbar .skillbar-title span {
  display: block;
  background: rgba(0, 0, 0, 0.15);
  padding: 0 20px;
  height: 30px;
  line-height: 30px;
  border-radius: 35px;
  -webkit-border-radius: 35px;
  -moz-border-radius: 35px;
}

.skillbar .skill-bar-percent {
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  color: rgba(0, 0, 0, 0.5);
}

.five .skillbar .skillbar-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 110px;
  font-size: 0.9rem;
  color: #ffffff;
  border-radius: 35px;
  -webkit-border-radius: 35px;
  -moz-border-radius: 35px;
}

.five .skillbar {
  position: relative;
  display: block;
  max-width: 360px;
  margin: 15px auto;
  background: #eee;
  height: 30px;
  border-radius: 35px;
  -moz-border-radius: 35px;
  -webkit-border-radius: 35px;
  -webkit-transition: 0.4s linear;
  -moz-transition: 0.4s linear;
  -o-transition: 0.4s linear;
  transition: 0.4s linear;
  -webkit-transition-property: width, background-color;
  -moz-transition-property: width, background-color;
  -o-transition-property: width, background-color;
  transition-property: width, background-color;
}

.four {
  height: 512px;
}

.five .row-about .col-about {
  float: left;
  width: 50%;
}

@media only screen and (max-width: 768px) {
  .five .row-about .col-about {
    width: 100%;
  }
}

.four .row-about .my-project {
  width: 33.333333333333%;
  float: left;
}

@media only screen and (max-width: 768px) and (min-width: 424px) {
  .four .row-about .my-project {
    width: 50% !important;
  }
  .seven .row-about .photo {
    width: 50% !important;
  }
}

@media only screen and (max-width: 425px) {
  .four .row-about .my-project {
    width: 100% !important;
  }
  .seven .row-about .photo {
    width: 100% !important;
  }
  .content-text {
    padding: 9px !important;
  }
}

.info {
  background-color: transparent !important;
  border-color: transparent !important;
}

.my-project .info {
  max-width: 360px;
  margin: 0 auto;
  padding: 1rem 0 1rem;
}

.my-project .info .icon {
  display: inline-block;
  width: 76px;
  height: 76px;
  text-align: center;
  line-height: 76px;
  color: #fff;
  font-size: 1.75rem;
  border-radius: 50%;
}

.my-project .info .info-title {
  margin: 1.25rem 0 0.875rem;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5em;
}

.my-project .info .info-title a {
  color: #fff;
}

.my-project .info .info-desc {
  margin: 0 0 10px;
  font-size: 0.9rem;
  color: #bbb;
}

.three .row-about {
  height: 320px;
}

@media only screen and (max-width: 1339px) and (min-width: 768px) {
  .three .row-about .col-about {
    width: 50% !important;
  }
  .three .row-about {
    height: 640px !important;
    margin-left: -10%;
    margin-right: -10%;
  }
  .three .row-about .col-about:last-child {
    position: absolute;
    left: 50%;
    top: 48%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}

@media only screen and (max-width: 425px) {
  .three .row-about .col-about {
    width: 100% !important;
    position: absolute;
    left: 50%;
    top: 25%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .three .row-about .col-about:nth-child(2) {
    top: 35%;
  }
  .three .row-about .col-about:nth-child(3) {
    top: 45%;
  }
  .three .row-about {
    height: 750px !important;
  }
}

.three,
.three .title,
.four .title,
.five .title,
.six .title,
.seven .title {
  font-size: 2rem !important;
}

.three,
.four,
.five,
.six,
.seven {
  font-size: 2rem !important;
  padding: 1.6rem 1.5rem 0.8rem 1.5rem;
  color: #fff;
}

.two.introduction {
  margin: 1.5rem auto 3rem;
  max-width: 600px;
  color: #bbb;
}

@media only screen and (min-width: 993px) {
  .first .hide-on-large-only {
    display: none !important;
  }
}

@media only screen and (max-width: 992px) {
  .hide-on-med-and-down {
    display: none !important;
  }
  .first .col-about:nth-child(2) {
    width: 100% !important;
  }
}

.first .profile .author {
  margin-top: -80px;
}

.first .profile .author .title {
  margin-bottom: 0.1rem;
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
}

.first .profile .author .career {
  margin: 8px 0;
  font-size: 0.9rem;
  font-weight: 400;
  color: #ffe;
}

.first .statis .count {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: underline;
}

.first .statis .name {
  font-size: 0.9rem;
  color: #fff;
}

.first .statis .count a {
  color: #42b983;
}

.first .statis {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  text-align: center;
  letter-spacing: 0.03rem;
}

.first .social-link {
  margin: 0.5rem 0;
  text-align: center;
}

.first .social-link a {
  display: inline-block;
  width: 2.3rem;
  height: 2.3rem;
  line-height: 2.2rem;
  margin: 0 0.5rem;
  padding: 0;
  color: #fff;
  border: 1px solid #0f9d58;
  background: radial-gradient(#4cbf30, #0f9d58);
  font-size: 0.9rem;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.21), 0 2px 3px rgba(0, 0, 0, 0.1);
}

.first,
.two,
.three,
.four {
  width: 90%;
}

.first,
.two,
.three,
.four,
.seven .row-about {
  margin-left: auto;
  margin-right: auto;
}

.first:after {
  content: "";
  display: table;
  clear: both;
}

.first .col-about,
.three .row-about .col-about {
  float: left;
  width: 33.333333333333333%;
}

.first .profile .avatar-img {
  max-width: 160px;
  width: 100%;
  margin: 0 auto;
  transform: translate3d(0, -65%, 0);
}

img.responsive-img,
video.responsive-video {
  max-width: 100%;
  height: auto;
}
.first .circle {
  border-radius: 50%;
}
img {
  border-style: none;
}

.center-align {
  text-align: center;
}

.echarts {
  width: 310px;
  height: 310px;
  margin-left: auto;
  margin-right: auto;
}

.row-text {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.row-text:after {
  content: "";
  display: table;
  clear: both;
}

.card-text .card-text-content {
  padding: 24px;
  border-radius: 0 0 2px 2px;
}

.content-text {
  position: relative;
  top: 1%;
  margin: 0 auto;
  z-index: 36;
  margin-bottom: 3%;
}

@media only screen and (max-width: 1024px) {
  .content-text {
    width: 95% !important;
  }
}

.content-text {
  width: 64%;
}

.card-text {
  border-radius: 10px;
  -webkit-box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.07) !important;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
}

.card-text {
  position: relative;
  background-color: rgba($color: #34393f, $alpha: 0.3);
  -webkit-transition: -webkit-box-shadow 0.25s;
  transition: -webkit-box-shadow 0.25s;
  transition: box-shadow 0.25s;
  transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
}
</style>