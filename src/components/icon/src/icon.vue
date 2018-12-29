<template>
    <button :class="className" @click="$emit('click')">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "v-icon",
    data() {
        return {};
    },
    methods: {},
    computed: {
        className() {
            return "vui-icon";
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/button.scss";
</style>