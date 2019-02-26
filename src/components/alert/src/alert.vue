<template>
    <div class="vui-alert">
        <div class="tip">{{msg}}</div>
    </div>
</template>
<script>
export default {
    name: "v-alert",
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
@import "../../../styles/components/alert";
</style>