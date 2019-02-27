<template>
    <div>
        <div style="margin: 20px;">
            <p>这是一个被钉住的例子</p>
            <p>他会再在上边缘触及到页面顶部时固定在原地</p>
        </div>

        <v-pin>
            <demo :code="code.base">
                <div slot="desc">scrollspy 滚动监听</div>
                <div>
                    asd              
                </div>
            </demo>
        </v-pin>

        <div style=" background: #eee; height: 500px;overflow-y: scroll">
            <v-pin>
                <demo :code="code.base">
                    <div slot="desc">scrollspy 滚动监听</div>
                    <div>
                        asd              
                    </div>
                </demo>
            </v-pin>
            <h2 v-for="(item, index) in list">{{item}}</h2>
            <h2 v-for="(item, index) in list">{{item}}</h2>
            <h2 v-for="(item, index) in list">{{item}}</h2>
        </div>
        <div style="height: 20px;"></div>

        <div style=" background: #eee; height: 500px;overflow-y: scroll">
            <div style="height: 100px;display: flex;justify-content: center;align-items: center;">
                100px
            </div>
            <v-pin :top="100">
                <demo :code="code.base">
                    <div slot="desc">scrollspy 滚动监听</div>
                    <div>
                        asd              
                    </div>
                </demo>
            </v-pin>
            
            <h2 v-for="(item, index) in list">{{item}}</h2>
            <h2 v-for="(item, index) in list">{{item}}</h2>
            <h2 v-for="(item, index) in list">{{item}}</h2>
        </div>
        <div style="height: 20px;"></div>

        <!-- <v-pin>
            <demo :code="code.base">
                <div slot="desc">scrollspy 滚动监听</div>
                <div>
                      asd              
                </div>
            </demo>
        </v-pin> -->

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
export default {
    components: {},
    data() {
        return {
            code: {},
            list: '1234567890'
        };
    },
    methods: {
        
    }
};
</script>
<style lang="scss" scoped>
</style>
