import Vue from 'vue'
import App from './App.vue'
import Vui from '../src/vui'
Vue.use(Vui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
