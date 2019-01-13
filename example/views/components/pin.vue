<template>
    <div>
        <div style="margin: 20px;">
            <p>这是一个被钉住的例子</p>
            <p>他会再在上边缘触及到页面顶部时固定在原地</p>
        </div>
        <v-pin :bottom="0">
            <demo :code="code.base">
                <div slot="desc">scrollspy 滚动监听</div>
                <div>
                      asd              
                </div>
            </demo>
        </v-pin>
        

        <div style=" background: #eee">
            <h2 v-for="(item, index) in list" :key="index">{{item}}</h2>
        </div>

        <v-pin>
            <demo :code="code.base">
                <div slot="desc">scrollspy 滚动监听</div>
                <div>
                      asd              
                </div>
            </demo>
        </v-pin>

        <div style=" background: #eee">
            <h2 v-for="(item, index) in list" :key="index">{{item}}</h2>
        </div>
        <div style=" background: #eee">
            <h2 v-for="(item, index) in list" :key="index">{{item}}</h2>
        </div>
        <div style=" background: #eee">
            <h2 v-for="(item, index) in list" :key="index">{{item}}</h2>
        </div>
        <div style=" background: #eee">
            <h2 v-for="(item, index) in list" :key="index">{{item}}</h2>
        </div>
        <div style=" background: #eee">
            <h2 v-for="(item, index) in list" :key="index">{{item}}</h2>
        </div>
        
    </div>
</template>
<script>
import code from "@/codes/hr";
export default {
    components: {},
    data() {
        return {
            code,
            list: '1234567890'
        };
    },
    methods: {
        
    }
};
</script>
<style lang="scss" scoped>
</style>
