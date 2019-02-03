<template>
    <v-layout>
        <div style="padding: 50px;">
            <v-demo :code="base" bgColor="#eee">
                <div slot="desc">顶部导航</div>
                <div>
                    <v-page></v-page>
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
            list: [],
            index: 0,
        };
    },
    methods: {
        
    }
};
</script>
<style lang="scss" scoped>
</style>
