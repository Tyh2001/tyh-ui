import Vue from 'vue'
import App from './App.vue'
import router from './router'

import tyhUi from './components/tyhUi'
import './components/tyhUi/style/index.css'

// import tyhUi from 'tyh-ui'
// import 'tyh-ui/style/index.css'

console.log(tyhUi)
Vue.use(tyhUi)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
