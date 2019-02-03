<template>
    <div>
        <v-demo :code="code.base">
            <div slot="desc">单选</div>
            <div>
                <v-radio v-model="value" val="苹果" />
                <v-radio v-model="value" val="梨" />
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
            value: "苹果",
        };
    },
    methods: {
        
    }
};
</script>
<style lang="scss" scoped>
</style>
