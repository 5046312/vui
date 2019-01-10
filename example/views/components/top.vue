<template>
    <v-layout id="top">
        <div ref='box' style="height: 100%;overflow-y: scroll">
            <div class='height'></div>
            <v-top>回到顶部</v-top>
        </div>
    </v-layout>
</template>
<script>
import code from "@/codes/toast";
export default {
    components: {},
    data() {
        return {
            base: code.base,
        };
    },
    methods: {
    }
};
</script>
<style lang="scss" scoped>
#top{
    .height{
        height: 1200px;
        background: #eee;
    }
}
</style>
