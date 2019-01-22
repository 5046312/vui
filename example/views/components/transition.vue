<template>
    <v-layout>
        <div class='main-contain'>
            <v-demo :code="base">
                <div slot="desc">
                    <div>对vue的transition组件和animate.css进行了简单封装。</div>
                    <div>对于animate.css中成对的动作可以直接传入name即可：</div>
                    <div>例如：fadeIn/fadeOut，只需传入name="fade"</div>
                </div>
                <v-button @click="showFade = !showFade;">fade</v-button>
                <v-transition name="fade">
                    <div v-show="showFade">name = fade</div>
                </v-transition>
            </v-demo>
        </div>
    </v-layout>
</template>
<script>
import code from "@/codes/toast";
export default {
    components: {},
    data() {
        return {
            base: code.base,
            showFade: false
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
