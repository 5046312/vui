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
        bgColor: {
            default: '#fff'
        },
        color: {
            default: '#333'
        }
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
<style lang="scss" scoped>
@import "../../../styles/components/navbar";
</style>
