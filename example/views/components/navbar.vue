<template>
    <v-layout>
        <div style="padding: 50px;">
            <v-demo :code="base" bgColor="#eee">
                <div slot="desc">顶部导航</div>
                <div>
                    <v-navbar title="navbar"></v-navbar>
                </div>
            </v-demo>

            <v-demo :code="base" bgColor="#eee">
                <div slot="desc">顶部导航 左右两侧slot</div>
                <div>
                    <v-navbar title="navbar">
                        <div slot="left">左</div>
                        <div slot="right">右</div>
                    </v-navbar>
                </div>
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
            base: code.base
        };
    },
    methods: {
        
    }
};
</script>
<style lang="scss" scoped>
</style>
