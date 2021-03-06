import Vue from 'vue'

const componentsRequire = require.context('../components', true, /\.vue$/)

componentsRequire.keys().forEach((fileName) => {
  if (fileName === './index.js') return

  const path = fileName.replace(/(\.\/|\.vue)/g, '')

  Vue.component(path,componentsRequire(fileName).default)
})