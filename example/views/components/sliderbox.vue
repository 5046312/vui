<template>
    <div>
        <v-demo :code="code.base">
            <div slot="desc">轮播 Slidebox</div>
            <div>
                <v-slidebox>
                    <v-slide>1</v-slide>
                    <v-slide>2</v-slide>
                    <v-slide>3</v-slide>
                </v-slidebox>
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
