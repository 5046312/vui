<template>
    <span class='vui-radio' @click="$emit('input', val)">
        <span class='radio' :class="{active: value == val}">
            <v-icon type="ios-checkmark" v-if="value == val"/>
        </span>
        <span class='label'>
            <slot></slot>
        </span>
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
