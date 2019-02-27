<template>
    <div>
        <div>
            <v-bread :list="list" @click="clickBread"/>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            list: [
                { icon: 'ios-home', text: '首页', active: true},
                { icon: '', text: '文章', active: false},
                { text: '新增'},
            ]
        };
    },
    methods: {
        // 点击面包屑
        clickBread(res) {
            console.log(res)
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
