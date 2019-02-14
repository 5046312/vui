<template>
    <div>
        <v-demo :code="code.base">
            <div slot="desc">单选 Radio</div>
            <div>
                <div style="margin-bottom: 10px;">已选择：{{value}}</div>
                <v-radio v-model="value" val="苹果">苹果</v-radio>
                <v-radio v-model="value" val="梨">梨</v-radio>
            </div>
        </v-demo>
    </div>
</template>
<script>
import code from "@/codes/radio";
export default {
    components: {},
    data() {
        return {
            code,
            value: "苹果",
        };
    },
    methods: {
        
    }
};
</script>
<style lang="scss" scoped>
</style>
