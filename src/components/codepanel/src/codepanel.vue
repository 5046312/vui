<template>
    <div class="vui-code-panel">
        <div class="title" v-text="title" v-if="title"/>
        <div class="panel">
            <div class="desc" v-text="desc" v-if="title"/>
            <div v-html="code" class="code"></div>
            <div>
                <div :style="{height}" class="origin-code">
                    <v-code :code="code" ref='origin'></v-code>
                </div>
                <div class="show-control" @click="show = !show">{{show ? "收起源码" : "展开源码"}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "v-codepanel",
    props: {
        code: String,
        desc: String,
        title: String
    },
    data() {
        return {
            show: false
        };
    },
    watch: {
    },
    methods: {},
    computed: {
        height () {
            return this.show ? this.$refs.origin.$el.offsetHeight : 0
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/codepanel";
</style>