<template>
    <div>
        <v-demo :code="code.base">
            <div slot="desc">轮播 Sliderbox 自动播放 autoplay 为毫秒</div>
            <div>
                <v-sliderbox style="height: 200px;" v-model="index" :autoplay="3000">
                    <v-slider class='bg part-1'>1</v-slider>
                    <v-slider class='bg part-2'>2</v-slider>
                    <v-slider class='bg part-3'>3</v-slider>
                </v-sliderbox>
                <div style="text-align: center;padding: 10px;">当前索引： {{index}}</div>
            </div>
        </v-demo>

        <v-demo :code="code.controll">
            <div slot="desc">轮播 Sliderbox controll 用于显示左右操作按钮</div>
            <div>
                <v-sliderbox style="height: 200px;" v-model="index_1" controll>
                    <v-slider class='bg part-1'>1</v-slider>
                    <v-slider class='bg part-2'>2</v-slider>
                    <v-slider class='bg part-3'>3</v-slider>
                </v-sliderbox>
                <div style="text-align: center;padding: 10px;">当前索引： {{index_1}}</div>
            </div>
        </v-demo>

        <v-demo :code="code.step">
            <div slot="desc">轮播 Sliderbox step 用于显示底部进步器</div>
            <div>
                <v-sliderbox style="height: 200px;" v-model="index_2" step>
                    <v-slider class='bg part-1'>1</v-slider>
                    <v-slider class='bg part-2'>2</v-slider>
                    <v-slider class='bg part-3'>3</v-slider>
                </v-sliderbox>
                <div style="text-align: center;padding: 10px;">当前索引： {{index_2}}</div>
            </div>
        </v-demo>

        
        <v-demo :code="code.model">
            <div slot="desc">轮播 Sliderbox v-model为当前索引值</div>
            <div>
                <v-sliderbox style="height: 200px;" v-model="index_3">
                    <v-slider class='bg part-1'>1</v-slider>
                    <v-slider class='bg part-2'>2</v-slider>
                    <v-slider class='bg part-3'>3</v-slider>
                </v-sliderbox>
                <div style="display:flex;justify-content:space-between;margin-top: 20px;">
                    <v-button @click="index_3 = 0">设置索引为0</v-button>
                    <v-button @click="index_3 = 2">设置索引为2</v-button>
                </div>
            </div>
        </v-demo>
    </div>
</template>
<script>
import code from "@/codes/sliderbox";
export default {
    components: {},
    data() {
        return {
            code,
            index: 0,
            index_1: 0,
            index_2: 0,
            index_3: 0,
            index_4: 0,
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
        background: #aaa;
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
