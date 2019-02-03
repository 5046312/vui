<template>
    <v-layout>
        <div style="padding: 50px;">
            <v-demo :code="base" bgColor="#eee">
                <div slot="desc">顶部导航</div>
                <div>
                    当前选中： {{index}}
                    <v-nav :list="list" v-model="index"></v-nav>
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
            base: code.base,
            list: [
                {name: '聊天'},
                {name: '通讯录'},
                {name: '发现'},
                {name: '我的'}
            ],
            index: 0,
        };
    },
    methods: {
        
    }
};
</script>
<style lang="scss" scoped>
</style>
