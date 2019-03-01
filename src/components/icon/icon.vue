<template>
    <i class="vui-icon" :class="className"></i>
</template>
<script>
export default {
    name: "v-icon",
    props: { type: String },
    computed: {
        className() { return "vui-" + this.type }
    }
};
</script>