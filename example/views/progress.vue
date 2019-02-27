<template>
    <div>
        <div>
            <v-progress :percent="percent" :tip="true"/>
            <v-progress :percent="percent"/>
            <v-progress type='warning' :percent="percent"/>
            <v-progress type='error' :percent="percent"/>
            <v-group style="height: 35px;margin-top: 10px;">
                <v-button @click="percent += 6" type="primary">增加进度</v-button>
                <v-button @click="percent -= 6" type="danger">减少进度</v-button>
            </v-group>
        </div>

        <div>
            <v-button @click='$bar.start()'>显示顶部加载条</v-button>
            <v-button @click='$bar.end()'>进度完成</v-button>
            <v-button @click='$bar.fail()'>进度失败</v-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            percent: 0
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
