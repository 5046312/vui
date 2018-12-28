import router from 'vue-router'
import Vue from 'vue'
Vue.use(router)


export const routerList = {
    'control': {
        title: '控件',
        children: [
            { meta: { title: '图标' }, path: 'icon', component: () => import("@/views/controls/icon") },
            { meta: { title: '按钮' }, path: 'button', component: () => import("@/views/controls/button") },
            { meta: { title: '进度' }, path: 'progress', component: () => import("@/views/controls/button") },
            { meta: { title: '标签' }, path: 'tag', component: () => import("@/views/controls/button") },
            { meta: { title: '多选' }, path: 'select', component: () => import("@/views/controls/button") },
            { meta: { title: '单选' }, path: 'radio', component: () => import("@/views/controls/button") },
            { meta: { title: '面包屑' }, path: 'bread', component: () => import("@/views/controls/button") },
            { meta: { title: '图片' }, path: 'picture', component: () => import("@/views/controls/button") },
            { meta: { title: '多级标题' }, path: 'title', component: () => import("@/views/controls/button") },
            { meta: { title: '分割线' }, path: 'hr', component: () => import("@/views/controls/button") },
        ]
    },
    'component': {
        title: '组件',
        children: [
            { meta: { title: '输入框' }, path: 'button', component: () => import("@/views/components/button") },
        ]
    }
}

export default new router({
    mode: "hash",
    routes: [
        // 首页
        { path: '/', component: () => import('@/views/index') },

        // 控件
        {
            path: '/control',
            component: () => import("@/views/layout"),
            redirect: '/control/button',
            children: routerList.control.children
        },

        // 组件
        {
            path: '/component',
            component: () => import("@/views/layout"),
            redirect: '/component/button',
            children: routerList.component.children
        },

        { path: '*', component: () => import('@/views/404') },
    ]
})