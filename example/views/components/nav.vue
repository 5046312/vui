<template>
    <v-layout>
        <v-demo :code="code.base" bgcolor="#eee">
            <div slot="desc">导航 Nav</div>
            <div>
                当前选中： {{index}}
                <v-nav :list="list" v-model="index"></v-nav>
            </div>
        </v-demo>

        <v-demo :code="code.sliderbox" bgcolor="#eee">
            <div slot="desc">与Sliderbox搭配使用</div>
            <div>
                <v-nav :list="list" v-model="index"></v-nav>
                <v-sliderbox v-model="index">
                    <v-slider class='bg part-1'>1</v-slider>
                    <v-slider class='bg part-2'>2</v-slider>
                    <v-slider class='bg part-3'>3</v-slider>
                    <v-slider class='bg part-4'>4</v-slider>
                </v-sliderbox>
            </div>
        </v-demo>
    </v-layout>
</template>
<script>
import code from "@/codes/nav";
export default {
    components: {},
    data() {
        return {
            code,
            list: [
                { name: "聊天" },
                { name: "通讯录" },
                { name: "发现" },
                { name: "我的" }
            ],
            index: 0
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
.bg{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 41px;
    &.part-1{
        background: #eee;
    }
    &.part-2{
        background: #ddd;
    }
    &.part-3{
        background: #ccc;
    }
    &.part-4{
        background: #bbb;
    }
}
</style>
