<template>
  <v-app>
    <v-sheet elevation="6" class="navigation">
      <v-tabs
        background-color="cyan"
        dark
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
        centered
        height="36"
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <template v-for="(tab,idx) of tabs">
          <v-tab v-if="!tab.children" :to="tab.to" :key="idx">
            <font-awesome-icon :icon="tab.icon" size="lg" class="pr-1" />
            {{tab.title}}
          </v-tab>
          <v-menu
            v-if="tab.children"
            :key="idx"
            max-height="160"
            max-width="100"
            min-width="100"
            offset-y
            offset-overflow
            open-on-hover
            dark
          >
            <template v-slot:activator="{ on }">
              <v-tab v-on="on" :to="tab.to">
                <font-awesome-icon :icon="tab.icon" class="mr-1" />
                {{tab.title}}
                <v-icon right class="ml-n1">mdi-menu-down</v-icon>
              </v-tab>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in tab.children" :key="index" :to="item.to">
                <font-awesome-icon :icon="tab.icon" class="mr-1" />
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
        <v-tab>
          <font-awesome-icon icon="search" size="lg" title="搜索" />
        </v-tab>
      </v-tabs>
    </v-sheet>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    showMenu: false,
    tabs: [
      {
        title: "首页",
        icon: "home",
        to: "/home"
      },
      {
        title: "标签",
        icon: "tags",
        to: "/tags"
      },
      {
        title: "分类",
        icon: "bookmark",
        to: "/bookmark"
      },
      {
        title: "归档",
        icon: "archive",
        to: "/archive"
      },
      {
        title: "链接",
        icon: "address-book",
        to: "/link"
      },
      {
        title: "类别",
        icon: "file-alt",
        to: "/file-alt",
        children: [
          {
            title: "科学",
            to: "/file-alt/0"
          },
          {
            title: "人文",
            to: "/file-alt/1"
          },
          {
            title: "生活",
            to: "/file-alt/2"
          }
        ]
      },
      {
        title: "关于",
        icon: "address-card",
        to: "/about"
      },
      {
        title: "测试",
        icon: "address-card",
        to: "/test"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.theme--light{
  background: transparent !important;
}
.v-tab {
  max-width: 100px;
}
.navigation {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999999;
}
div[role="menu"] {
  margin-top: -0.2% !important;
}
div[role="menu"] div {
  background-color: #00bcd4 !important;
  border-color: #00bcd4 !important;
  border-radius: 0 !important;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
}
div[role="menu"]::-webkit-scrollbar {
  width: 9px;
  height: 9px;
  background: transparent;
  margin-left: 5% !important;
}
div[role="menu"]::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
}
div[role="menu"]::-webkit-scrollbar-track {
  background: rgb(238, 238, 238) !important;
}
.v-list-item {
  min-height: 36px;
  text-align: center;
}
.v-list-item--active{
  min-width: 100px;
  border-color:#ffeb3b;
  border-style: solid;
  border-width: 0 2px 0 2px;
}
</style>