<template>
    <span class='vui-radio' @click="$emit('input', val)">
        <span class='radio' :class="{active: value == val}">
            <span class='icon' v-if="value == val">
                <v-icon type="ios-checkmark"/>
            </span>
        </span>
        <span class='label'><slot /></span>
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
