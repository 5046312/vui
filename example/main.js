import Vue from 'vue';
import App from './app.vue';
import Vui from '../src/vui';
Vue.use(Vui);
const app = new Vue({
    render: h => h(App)
}).$mount('#app');