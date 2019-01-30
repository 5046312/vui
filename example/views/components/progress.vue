<template>
    <v-layout>
        <v-demo :code="base">
            <div slot="desc">进度条</div>
            <div>
                <v-progress :percent="percent" :tip="true"/>
                <v-progress :percent="percent"/>
                <v-progress type='warning' :percent="percent"/>
                <v-progress type='error' :percent="percent"/>
                <v-group>
                    <v-button @click="percent += 6" type="primary">增加进度</v-button>
                    <v-button @click="percent -= 6" type="danger">减少进度</v-button>
                </v-group>
            </div>
        </v-demo>

        <v-demo :code="base">
            <div slot="desc">顶部进度条 $bar</div>
            <div>
                <v-button @click='$bar.start()'>显示顶部加载条</v-button>
                <v-button @click='$bar.end()'>进度完成</v-button>
                <v-button @click='$bar.fail()'>进度失败</v-button>
            </div>
        </v-demo>
        
        <v-demo :code="base">
            <div slot="desc">进度环</div>
            <div>
                
            </div>
        </v-demo>
    </v-layout>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            base: '',
            percent: 0
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
