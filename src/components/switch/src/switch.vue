<template>
    <span class='vui-switch' :class="{select: value, unselect: !value}" @click="$emit('click')">
        <span class='text'></span>
        <span class='icon'></span>
    </span>
</template>
<script>
export default {
    name: 'v-switch',
    props: {
        value: Boolean
    }
}
</script>
<style lang="scss" scoped>
@import "../../../styles/components/switch";
</style>
