import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import tyhUI from './tyhUi'
import tyhUI from 'tyh-ui'

console.log(tyhUI)
Vue.use(tyhUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
