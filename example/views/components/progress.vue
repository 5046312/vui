<template>
    <v-layout>
        <v-demo :code="base">
            <div slot="desc">进度条</div>
            <div>
                <v-progress :percent="percent"/>
                <v-button @click="percent += 6">增加</v-button>
                <v-button @click="percent -= 6">减少</v-button>
                <v-progress type='warning'/>
                <v-progress type='success'/>
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
