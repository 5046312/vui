<template>
    <v-layout>
        <v-demo :code="code.base">
            <div slot="desc">图片 Img 设置尺寸</div>
            <div>
                <v-img height="180px" width="180px" :src='require("@/assets/01.jpg")'/>
                <v-img height="180px" :src='require("@/assets/01.jpg")'/>
            </div>
        </v-demo>

        <v-demo :code="code.cover">
            <div slot="desc">图片 Img 开启cover模式</div>
            <div>
                <v-img height="180px" width="180px" :cover="true" :src='require("@/assets/01.jpg")'/>
            </div>
        </v-demo>

        <v-demo :code="code.radius">
            <div slot="desc">图片 Img 设置边框弧度</div>
            <div>
                <v-img height="180px" width="180px" :cover="true" radius="33px" :src='require("@/assets/01.jpg")'/>
                <v-img height="180px" width="180px" :cover="true" radius="122px" :src='require("@/assets/01.jpg")'/>
            </div>
        </v-demo>

        <v-demo :code="code.thumb">
            <div slot="desc">图片 Img 相册</div>
            <div>
                <v-img height="180px" width="180px" :cover="true" :thumb="true" :src='require("@/assets/01.jpg")'/>
            </div>
        </v-demo>
    </v-layout>
</template>
<script>
import code from "@/codes/img";
export default {
    components: {},
    data() {
        return {
            code,
            percent: 0
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
