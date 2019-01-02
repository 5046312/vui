<template>
    <div id="vui-confirm">
        <div class="tip">{{msg}}</div>
    </div>
</template>
<script>
export default {
    name: "v-confirm",
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
@import "../../../styles/components/confirm";
</style>