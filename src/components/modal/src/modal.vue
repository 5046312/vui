<template>
    <div id="vui-modal">
        <div class="tip">{{msg}}</div>
    </div>
</template>
<script>
export default {
    name: "v-modal",
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
@import "../../../styles/components/modal";
</style>