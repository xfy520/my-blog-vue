import Vue from 'vue'
import Vuetify from 'vuetify/lib';
import VueWechatTitle from 'vue-wechat-title'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import turn from '../../turn-page/lib/turn.umd.min.js'
import '../../turn-page/lib/turn.css'
import 'aos/src/sass/aos.scss'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/tooltip'
Vue.component('chart', ECharts)


//5905

import App from './App.vue'
import router from './router'
import store from './store'
import "./plugins"

Vue.config.productionTip = false

const vuetify = new Vuetify({})
Vue.use(turn)
Vue.use(Vuetify)
Vue.use(VueWechatTitle)

library.add(fas, far, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
