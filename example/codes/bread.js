let code = {}
code.base = `
<template>
    <v-bread :list="list" @click="clickBread"/>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { icon: 'ios-home', text: '首页', active: true},
                { icon: '', text: '文章', active: false},
                { text: '新增'},
            ]
        }
    },
    methods: {
        // 点击面包屑
        clickBread(res) {
            console.log(res)
        }
    }
};
</script>
`

export default code