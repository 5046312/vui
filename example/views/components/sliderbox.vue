<template>
    <div>
        <v-demo :code="code.base">
            <div slot="desc">轮播 Sliderbox</div>
            <div>
                <v-sliderbox style="height: 200px; ">
                    <v-slider>1</v-slider>
                    <v-slider>2</v-slider>
                    <v-slider>3</v-slider>
                </v-sliderbox>
            </div>
        </v-demo>
    </div>
</template>
<script>
import code from "@/codes/hr";
export default {
    components: {},
    data() {
        return {
            code,
            value: []
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
