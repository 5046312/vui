<template>
    <v-layout>
        <div class='main-contain'>
            <demo :code="base">
                <div slot="desc">页面加载进度</div>
                <v-button @click="showToast">弹出一个Toast</v-button>
            </demo>
        </div>
    </v-layout>
</template>
<script>
import code from "@/codes/toast";
export default {
    components: {},
    data() {
        return {
            base: code.base
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
