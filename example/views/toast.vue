<template>
    <div>
        <div :code="code.base">
            <div slot="desc">Toast 吐司 默认2000后自动关闭；也可以直接点击关闭</div>
            <v-button @click="showToast">弹出一个Toast</v-button>
        </div>

        <div :code="code.time">
            <div slot="desc">Toast 吐司 设置关闭时间</div>
            <v-button @click="showTime">5s后自动关闭</v-button>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            code: {}
        };
    },
    methods: {
        showToast() {
            this.$toast.show("弹出一个Toast");
        },
        showTime(){
            this.$toast.show("弹出一个Toast", 5000);
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
