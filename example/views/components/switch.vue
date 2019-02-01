<template>
    <v-layout>
        <v-demo :code="code.base">
            <div slot="desc">进度条</div>
            <div>
                <v-switch v-model="value" @click="value = !value"/>
            </div>
        </v-demo>
    </v-layout>
</template>
<script>
import code from "@/codes/progress";
export default {
    components: {},
    data() {
        return {
            code,
            percent: 0,
            value: false,
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
