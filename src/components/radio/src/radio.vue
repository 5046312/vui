<template>
    <span class='vui-radio' :class="{active: value == val}" @click="$emit('input', val)">
        <v-icon type="ios-checkmark" v-if="value == val"/>
    </span>
</template>
<script>
export default {
    name: 'v-radio',
    props: {
        value: String,
        val: String, // 单选
    },
}
</script>
<style lang="scss" scoped>
@import "../../../styles/components/radio";
</style>
