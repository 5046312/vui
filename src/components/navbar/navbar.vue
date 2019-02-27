<template>
    <div class='vui-navbar' :style="navbarStyle">
        <div class='title'>{{title}}</div>
        <span class='left'><slot name='left'/></span>
        <span class='right'><slot name='right'/></span>
    </div>
</template>
<script>
export default {
    name: 'v-navbar',
    props: {
        title: String,
        bgColor: String,
        color: { default: '#fff' }
    },

    computed: {
        navbarStyle(){
            return {
                background: this.bgColor,
                color: this.color
            }
        }
    }
}
</script>