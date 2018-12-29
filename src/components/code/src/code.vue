<template>
    <div v-text="code"></div>
</template>
<script>
export default {
    name: "v-code",
    props: {
        code: String,
    },
    data() {
        return {};
    },
    methods: {},
    computed: {
        className() {
            return "vui-code";
        },
    }
};
</script>
<style lang="scss" scoped>
</style>