<template>
    <span class='vui-radio' @click="$emit('input', val)">
        <span class='radio' :class="{active: value == val}">
            <div class='icon'>
                <div class="round" :class="{active: value == val}"></div>
            </div>
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
