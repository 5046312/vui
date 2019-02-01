<template>
    <v-layout>
        <v-demo :code="code.base">
            <div slot="desc">标签</div>
            <div>
                <v-bread :list="list" @click="clickBread"/>
            </div>
        </v-demo>
    </v-layout>
</template>
<script>
import code from "@/codes/progress";
export default {
    components: {},
    data() {
        return {
            code,
            list: [
                { icon: 'ios-home', text: '首页', active: true},
                { icon: '', text: '文章', active: false},
                { text: '新增'},
            ]
        };
    },
    methods: {
        // 点击面包屑
        clickBread(res) {
            console.log(res)
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
