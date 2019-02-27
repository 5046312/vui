import Vue from 'vue';
import App from './app.vue';
import routes from './route'
import Vui from '../src/vui';
import VueRouter from 'vue-router';
import '../src/styles/index.scss';
Vue.use(VueRouter)
Vue.use(Vui);
const router = new VueRouter({ routes })
router.afterEach(() => {
    window.scrollTo(0, 0)
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app'); 