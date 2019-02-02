<template>
    <div>
        <v-demo :code="code.base">
            <div slot="desc">hr分割线</div>
            <div>
                <div>正常居中样式</div>
                <v-hr>Vui是组件库</v-hr>

                <div style="margin-top: 20px;">靠左样式</div>
                <v-hr position="left">Vui</v-hr>

                <div style="margin-top: 20px;">靠右样式</div>
                <v-hr position="right">Vui</v-hr>

                <div style="margin-top: 20px;">修改中间部分与两侧的分割线的间隔，50px</div>
                <v-hr margin="50">Vui</v-hr>    
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
