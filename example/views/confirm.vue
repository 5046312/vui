<template>
    <div>
        <div>
            <div slot="desc">Toast 吐司</div>
            <v-button @click="showToast">弹出一个Toast</v-button>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
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
