<template>
    <div>
        <v-demo :code="code.base">
            <div slot="desc">多选 Checkbox</div>
            <div>
                <div style="margin-bottom: 10px;">已选择：{{value}}</div>
                <v-checkbox v-model="value" val="苹果">苹果</v-checkbox>
                <v-checkbox v-model="value" val="梨">梨</v-checkbox>
                <v-checkbox v-model="value" val="orange">橘子</v-checkbox>
            </div>
        </v-demo>
    </div>
</template>
<script>
import code from "@/codes/checkbox";
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
