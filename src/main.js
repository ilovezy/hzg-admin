import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog'// error log
import './permission' // permission control
import './mock' // simulation data

import * as filters from './filters' // global filters


import './global/CONFIG'
import './global/Function'
import './global/Validate'
import './global/Platform'
import USER from './global/USER'
import axios from './global/fetch'
import _ from 'underscore'
import moment from 'moment'

window.USER = USER
window._ = _
window.moment = moment

Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

Vue.prototype.axios = axios

Vue.filter('formatPhone', formatPhone)
Vue.filter('formatThousands', formatThousands)
Vue.filter('formatDate', formatDate)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = true

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
