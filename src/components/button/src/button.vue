<template>
    <button class="vui-button" :class="type" @click="$emit('click')">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "v-button",
    props:{
        type: {
            default: 'default'
        }
    },
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/button";
</style>