import Vue from 'vue'
import App from './App.vue'
import Vui from '../src/vui'
Vue.use(Vui)
import router from './router'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
