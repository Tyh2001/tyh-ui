import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import tyhUI from 'tyh-ui'

import tyhUi from './components/tyhUi/src/index'
import './components/tyhUi/style/index.css'

console.log(tyhUi)
Vue.use(tyhUi)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
