<template>
    <div class='vui-group'>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "v-group",
    props:{
        direction: {
            default: 'default'
        }
    },
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/group";
</style>