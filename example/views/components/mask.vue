<template>
    <v-layout>
        <div class='main-contain'>
            <v-demo :code="base">
                <div slot="desc">
                    单例模式，全局只会存在唯一的mask，所以多次调用也无需担心
                </div>
                <v-button @click="showMaskSchedule">弹出一个Mask遮罩，1s后关闭</v-button>
            </v-demo>
        </div>
    </v-layout>
</template>
<script>
import code from "@/codes/mask";
export default {
    components: {},
    data() {
        return {
            base: code.base
        };
    },
    methods: {
        showMaskSchedule(){
            this.$mask.show();
            setTimeout(() => {
                this.$mask.close();
            }, 2000);
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
