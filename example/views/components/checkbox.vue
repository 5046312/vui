<template>
    <div>
        <v-demo :code="code.base">
            <div slot="desc">多选</div>
            <div>
                <v-checkbox v-model="value" val="苹果"/>
                <v-checkbox v-model="value" val="梨"/>
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
