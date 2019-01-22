import Vue from 'vue'
import App from './App.vue'
import Vui from '../src/vui'
Vue.use(Vui)
import router from './router'

import Code from '@/components/code'
Vue.component('v-code', Code);
import Demo from '@/components/demo'
Vue.component('v-demo', Demo);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
