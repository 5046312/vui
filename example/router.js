import router from 'vue-router'
import Vue from 'vue'
import Vui from '../src/vui'
Vue.use(router)

export const routerList = {
    intro: {
        title: '欢迎',
        children: [
            { meta: { title: '介绍' }, path: 'introduce', component: () => import("@/views/intro/introduce") },
            { meta: { title: '安装' }, path: 'install', component: () => import("@/views/intro/install") },
            { meta: { title: '感谢' }, path: 'grateful', component: () => import("@/views/intro/grateful") },
        ]
    },
    layout: {
        title: '布局管理',
        children: [
            // { meta: { title: '布局' }, path: 'layout', component: () => import("@/views/components/layout") },
            { meta: { title: '栅格' }, path: 'grid', component: () => import("@/views/components/grid") },
            { meta: { title: '段落' }, path: 'paragraph', component: () => import("@/views/components/paragraph") },
            { meta: { title: '顶部导航' }, path: 'navbar', component: () => import("@/views/components/navbar") },
            { meta: { title: '底部导航' }, path: 'tabbar', component: () => import("@/views/components/tabbar") },
            { meta: { title: '导航' }, path: 'nav', component: () => import("@/views/components/nav") },
        ]
    },
    
    basic: {
        title: '基础控件',
        children: [
            { meta: { title: '图标' }, path: 'icon', component: () => import("@/views/components/icon") },
            { meta: { title: '按钮' }, path: 'button', component: () => import("@/views/components/button") },
            { meta: { title: '进度' }, path: 'progress', component: () => import("@/views/components/progress") },
            { meta: { title: '标签' }, path: 'tag', component: () => import("@/views/components/tag") },
            { meta: { title: '面包屑' }, path: 'bread', component: () => import("@/views/components/bread") },
            { meta: { title: '图片' }, path: 'img', component: () => import("@/views/components/img") },
            // { meta: { title: '多级标题' }, path: 'title', component: () => import("@/views/components/button") },
            { meta: { title: '分割线' }, path: 'hr', component: () => import("@/views/components/hr") },
        ]
    },

    form: {
        title: '表单',
        children: [
            { meta: { title: '输入框' }, path: 'input', component: () => import("@/views/components/button") },
            { meta: { title: '单选' }, path: 'radio', component: () => import("@/views/components/radio") },
            { meta: { title: '多选' }, path: 'checkbox', component: () => import("@/views/components/checkbox") },
            { meta: { title: '开关' }, path: 'switch', component: () => import("@/views/components/switch") },
        ]
    },
    common: {
        title: '常用',
        children: [
            { meta: { title: '过渡' }, path: 'transition', component: () => import("@/views/components/transition") },
            { meta: { title: '遮罩' }, path: 'mask', component: () => import("@/views/components/mask") },
            { meta: { title: '吐司' }, path: 'toast', component: () => import("@/views/components/toast") },
            // { meta: { title: '警告' }, path: 'alert', component: () => import("@/views/components/alert") },
            // { meta: { title: '加载' }, path: 'loading', component: () => import("@/views/components/loading") },
            // { meta: { title: '确认' }, path: 'confirm', component: () => import("@/views/components/confirm") },
            // { meta: { title: '模态框' }, path: 'modal', component: () => import("@/views/components/modal") },
            // { meta: { title: '滚动监听' }, path: 'scrollspy', component: () => import("@/views/components/scrollspy") },
            // { meta: { title: '钉' }, path: 'pin', component: () => import("@/views/components/pin") },
            // { meta: { title: '回到顶部' }, path: 'top', component: () => import("@/views/components/top") },
            { meta: { title: '分页' }, path: 'page', component: () => import("@/views/components/page") },
            { meta: { title: '轮播' }, path: 'sliderbox', component: () => import("@/views/components/sliderbox") },
        ]
    },
}

 const docRouter = new router({
    mode: "hash",
    routes: [
        // 首页
        { path: '/', component: () => import('@/views/index') },

        // 介绍
        {
            path: '/intro',
            component: () => import("@/views/layout"),
            redirect: 'intro/introduce',
            children: routerList.intro.children
        },

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

        // 常用
        {
            path: '/common',
            component: () => import("@/views/layout"),
            redirect: 'common/mask',
            children: routerList.common.children
        },

        { path: '*', component: () => import('@/views/404') },
    ]
})

docRouter.beforeEach((to, from, next) => {
    Vui.$bar.start()
    next();
});

docRouter.afterEach(() => {
    Vui.$bar.end();
});

export default docRouter