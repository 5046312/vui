<template>
    <div>
        <div class='main-contain'>
            <div :code="base">
                <div slot="desc">页面加载进度</div>
                <v-button @click="showToast">弹出一个Toast</v-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            base: ''
        };
    },
    methods: {
        showToast() {
            this.$toast("弹出一个Toast");
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
