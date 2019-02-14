<template>
    <v-layout>
        <v-demo :code="code.base">
            <div slot="desc">顶部导航 Navbar</div>
            <div>
                <v-navbar title="Navbar"></v-navbar>
            </div>
        </v-demo>

        <v-demo :code="code.slot">
            <div slot="desc">顶部导航 Navbar 左右两侧slot</div>
            <div>
                <v-navbar title="Navbar">
                    <div slot="left">左</div>
                    <div slot="right">右</div>
                </v-navbar>
            </div>
        </v-demo>

        <v-demo :code="code.color">
            <div slot="desc">顶部导航 Navbar 文字颜色，背景颜色</div>
            <div>
                <v-navbar title="改变颜色" color="orange" bgColor="#1e1e1e">
                    <div slot="left">左</div>
                    <div slot="right">右</div>
                </v-navbar>
            </div>
        </v-demo>
    </v-layout>
</template>
<script>
import code from "@/codes/navbar";
export default {
    components: {},
    data() {
        return {
            code,
        };
    },
    methods: {
        
    }
};
</script>
<style lang="scss" scoped>
</style>
