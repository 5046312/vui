<template>
    <div>
        <div>
            <div slot="desc">单选 Radio</div>
            <div>
                <div style="margin-bottom: 10px;">已选择：{{value}}</div>
                <div style="background: #aaa">
                    <v-radio v-model="value" val="苹果">苹果</v-radio>
                    <v-radio v-model="value" val="梨">梨</v-radio>
                </div>
            </div>
        </div>

        <div style="background: #aaa;margin-top: 10px;">
            <span style="display: inline-block;height: 20px;">
                <span style="display: inline-block;height: 20px;"></span>
                <span style="display: inline-block;height: 20px;">苹果</span>
            </span>
        </div>

        <div style="background: #aaa;margin-top: 10px;">
            <span style="display: inline; background: red;height: 50px;width: 50px;">inline</span>
            <span style="display: inline; background: red;height: 50px;width: 50px;">inline</span>
            <span style="display: inline; background: red;height: 50px;width: 50px;">inline</span>
        </div>

            
        <div style="background: #aaa;margin-top: 10px;">
            <span style="display: inline-block; background: red;height: 50px;width: 50px;">inline-block</span>
            <span style="display: inline-block; background: red;height: 50px;width: 50px;">inline-block</span>
            <span style="display: inline-block; background: red;height: 50px;width: 50px;">inline-block</span>
        </div>

        <div style="background: #aaa;margin-top: 10px;">
            <span style="display: inline-flex; background: red;height: 50px;width: 50px;">inline-block</span>
            <span style="display: inline-flex; background: red;height: 50px;width: 50px;">inline-block</span>
            <span style="display: inline-flex; background: red;height: 50px;width: 50px;">inline-block</span>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            code: {},
            value: "苹果"
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
