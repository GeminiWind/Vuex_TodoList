require('../bootstrap.js')

import Vue from 'vue'
import App from './App.vue'
import index from  './store/index.js'

new Vue({
  el: '#app',
  store: index,
  render: h => h(App)
})