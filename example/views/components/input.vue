<template>
    <v-layout>
        <v-demo>
            <div slot="desc">输入框 Input</div>
            <div style="width: 200px;">
                <v-input v-model="val" placeholder="请输入一些文字吧"></v-input>
            </div>
        </v-demo>

        <v-demo>
            <div slot="desc">输入框 Input 清空按钮 clear</div>
            <div style="width: 200px;">
                <v-input v-model="val" placeholder="请输入一些文字吧" clear></v-input>
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
            val: ''
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
