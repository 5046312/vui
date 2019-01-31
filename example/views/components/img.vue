<template>
    <v-layout>
        <v-demo :code="code.base">
            <div slot="desc">标签</div>
            <div>
                <v-img height="180" width="180" radius="102" :cover="true" :thumb="true" :src='require("@/assets/01.jpg")'/>
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
            percent: 0
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
