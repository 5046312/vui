<template>
    <div>
        <v-demo :code="code.base">
            <div slot="desc">单选</div>
            <div>
                <v-radio v-model="value" />
                <v-radio v-model="value" type="primary"/>
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
        };
    },
    methods: {
        
    }
};
</script>
<style lang="scss" scoped>
</style>
