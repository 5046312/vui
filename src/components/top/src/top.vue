<template>
    <div class="vui-top" @click.stop.prevent='top'>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "v-top",
    props: {
    },
    data() {
        return {};
    },

    methods: {
        // 回到顶部
        top(){
            this.$el.parentElement.scrollTo(0, 0)
        }
    },
    computed: {
    }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/top.scss";
</style>