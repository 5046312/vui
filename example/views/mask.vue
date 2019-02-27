<template>
    <div>
        <div class='main-contain'>
            <div :code="base">
                <div slot="desc">
                    单例模式，全局只会存在唯一的mask，所以多次调用也无需担心
                </div>
                <v-button @click="showMaskSchedule">弹出一个Mask遮罩，1s后关闭</v-button>
            </div>

            <div :code="base">
                <div slot="desc">
                    在show函数中传入点击mask的回调函数
                </div>
                <v-button @click="showMaskCallback">设置回调</v-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            base: ""
        };
    },
    methods: {
        showMaskSchedule(){
            this.$mask.show();
            setTimeout(() => {
                this.$mask.hide();
            }, 2000);
        },
        // 设置回调
        showMaskCallback(){
            this.$mask.show(() => {
                this.$mask.hide()
                this.$toast("执行回调函数")
            })
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
