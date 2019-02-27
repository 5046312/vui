<template>
    <div>
        <div>
            <div slot="desc">多选 Checkbox</div>
            <div>
                <div style="margin-bottom: 10px;">已选择：{{value}}</div>
                <v-checkbox v-model="value" val="苹果">苹果</v-checkbox>
                <v-checkbox v-model="value" val="梨">梨</v-checkbox>
                <v-checkbox v-model="value" val="orange">橘子</v-checkbox>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            value: []
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
