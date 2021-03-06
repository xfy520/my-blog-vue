import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const paths = [
  {
    url: '/',
    view: "Index",
    meta: {
      title: '馨之缘'
    },
    children: [
      {
        url: '/home', view: 'Home',
        meta: {
          title: '馨之缘'
        }
      },
      {
        url: '/tags', view: 'tags/Tags',
        meta: {
          title: '标签'
        }
      },
      {
        url: '/bookmark', view: 'bookmark/Bookmark',
        meta: {
          title: '分类'
        }
      },
      {
        url: '/archive', view: 'archive/Archive',
        meta: {
          title: '归档'
        }
      },
      {
        url: '/file-alt', view: 'file-alt/FileAlt',
        meta: {
          title: '类别'
        }
      },
      {
        url: '/file-alt/:id', view: 'file-alt/LiKe',
        meta: {
          title: '理科'
        }
      },
      {
        url: '/link', view: 'link/Link',
        meta: {
          title: '链接'
        }
      },
      {
        url: '/about', view: 'about/About',
        meta: {
          title: '关于'
        }
      },
      {
        url: '/test', view: 'Test',
        meta: {
          title: '测试'
        }
      }
    ],
    redirect: '/home'
  }
]

function route(path) {
  const rtItem = {
    name: path.name || path.view,
    path: path.url,
    meta: path.meta || {},
    redirect: path.redirect || '',
    component: (resovle) => import(
      `@/views/${path.view}.vue`
    ).then(resovle)
  }

  if (Array.isArray(path.children)) {
    rtItem.children = []
    path.children.forEach((childPath) => {
      rtItem.children.push(route(childPath))
    })
  }
  return rtItem
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: paths.map(path => route(path)).concat([{
    path: '*',
    redirect: '/'
  }]),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {
      x: 0,
      y: 0
    }
  }
})

router.afterEach(route => {
  // 从路由的元信息中获取 title 属性
  if (route.meta.title) {
    document.title = route.meta.title;
    // 如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      const hackIframe = document.createElement('iframe');
      hackIframe.style.display = 'none';
      hackIframe.src = '/static/html/fixIosTitle.html?r=' + Math.random();
      document.body.appendChild(hackIframe);
      setTimeout(_ => {
        document.body.removeChild(hackIframe)
      }, 300)
    }
  }
})

export default router
