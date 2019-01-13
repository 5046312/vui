<template>
    <div>
        <demo :code="code.base">
            <div slot="desc">scrollspy 滚动监听</div>
            <div>
                                
            </div>
        </demo>

        <v-srollspy style="height: 500px;overflow-y: scroll;margin: 20px;">
            <div style=" background: #eee">
            <h2 v-for="(item, index) in list" :key="index">{{item}}</h2>
            </div>
        </v-srollspy>
    </div>
</template>
<script>
import code from "@/codes/hr";
export default {
    components: {},
    data() {
        return {
            code,
            list: '1234567890123456789012345678901234567890'
        };
    },
    methods: {
        
    }
};
</script>
<style lang="scss" scoped>
</style>
