import router from 'vue-router'
import Vue from 'vue'
Vue.use(router)
export default new router({
    mode: "hash",
    routes: [
        // 首页
        { path: '/', component: () => import('@/views/index') },

        // 组件
        {
            path: '/components',
            component: () => import("@/views/components/layout"),
            children: [
                { meta: { title: '组件' }, path: 'button', component: () => import("@/views/components/button") },
            ]
        },
        { path: '*', component: () => import('@/views/404') },
    ]
})