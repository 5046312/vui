<template>
    <v-layout id="top">
        <demo>
            <div slot='desc'>
                需要放在返回顶部的父级下
            </div>
            <div style="height: 300px;overflow-y: scroll;position: relative">
                <div class='height'></div>
                <v-top>回到顶部</v-top>
            </div>
        </demo>
        
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
