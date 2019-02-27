<template>
    <i class="vui-icon" :class="className"></i>
</template>
<script>
export default {
    name: "v-icon",
    props: {
        type: String
    },
    data() {
        return {};
    },

    methods: {},
    computed: {
        className() {
            return "vui-" + this.type;
        }
    }
};
</script>