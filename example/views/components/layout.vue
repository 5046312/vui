<template>
    <v-layout>
        <div class="main-contain">
            <v-demo :code="code" desc="基础说明部分">
                
            </v-demo>
        </div>
    </v-layout>
</template>
<script>
import code from "@/codes/layout";
export default {
    components: {},
    data() {
        return {
            code: code.layout
        };
    }
};
</script>
<style lang="scss" scoped>
</style>
