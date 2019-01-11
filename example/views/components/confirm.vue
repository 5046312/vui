<template>
    <v-layout>
        <div style="padding: 50px;">
            <demo :code="base">
                <div slot="desc">Toast 吐司</div>
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
