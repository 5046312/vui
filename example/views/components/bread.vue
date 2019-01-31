<template>
    <v-layout>
        <v-demo :code="code.base">
            <div slot="desc">标签</div>
            <div>
                <v-bread :list="list"/>
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
                { icon: 'ios-home', text: '首页', path: '/'},
                { icon: '', text: '文章', path: '/article'},
                { text: '新增', path: '/new'},
            ]
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
