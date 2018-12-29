import router from 'vue-router'
import Vue from 'vue'
Vue.use(router)


export const routerList = {
    basic: {
        title: '基础控件',
        children: [
            { meta: { title: '图标' }, path: 'icon', component: () => import("@/views/components/icon") },
            { meta: { title: '按钮' }, path: 'button', component: () => import("@/views/components/button") },
            { meta: { title: '进度' }, path: 'progress', component: () => import("@/views/components/button") },
            { meta: { title: '标签' }, path: 'tag', component: () => import("@/views/components/button") },
            { meta: { title: '多选' }, path: 'select', component: () => import("@/views/components/button") },
            { meta: { title: '单选' }, path: 'radio', component: () => import("@/views/components/button") },
            { meta: { title: '面包屑' }, path: 'bread', component: () => import("@/views/components/button") },
            { meta: { title: '图片' }, path: 'picture', component: () => import("@/views/components/button") },
            { meta: { title: '多级标题' }, path: 'title', component: () => import("@/views/components/button") },
            { meta: { title: '分割线' }, path: 'hr', component: () => import("@/views/components/button") },
        ]
    },
    layout: {
        title: '布局管理',
        children: [
            { meta: { title: '布局' }, path: 'layout', component: () => import("@/views/components/layout") },
        ]
    },
    form: {
        title: '表单',
        children: [
            { meta: { title: '输入框' }, path: 'button', component: () => import("@/views/components/button") },
        ]
    },
    common: {
        title: '常用',
        children: [
            { meta: { title: '输入框' }, path: 'button', component: () => import("@/views/components/button") },
        ]
    },
}

export default new router({
    mode: "hash",
    routes: [
        // 首页
        { path: '/', component: () => import('@/views/index') },

        // 基础控件
        {
            path: '/basic',
            component: () => import("@/views/layout"),
            redirect: 'basic/icon',
            children: routerList.basic.children
        },

        // 布局管理
        {
            path: '/layout',
            component: () => import("@/views/layout"),
            redirect: 'layout/button',
            children: routerList.layout.children
        },

        { path: '*', component: () => import('@/views/404') },
    ]
})