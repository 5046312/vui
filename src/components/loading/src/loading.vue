<template>
    <div id="vui-loading">
        <div class="tip">{{msg}}</div>
    </div>
</template>
<script>
export default {
    name: "v-loading",
    data() {
        return {
            msg: ""
        };
    },
    methods: {},
    computed: {},
    created() {}
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/loading";
</style>