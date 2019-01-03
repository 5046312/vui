<template>
    <v-transition name="fade">
        <div
            id="vui-mask"
            v-show="show"
            :style="{background: color, zIndex: zindex}"
            @click.stop.prevent="$emit('click', '')"
        ></div>
    </v-transition>
</template>
<script>
export default {
    name: "v-mask",
    data() {
        return {
            opacity: "0.6",
            zindex: 1000,
            show: false
        };
    },
    computed: {
        color() {
            return `rgba(60, 60, 60, ${this.opacity})`;
        }
    },
    methods: {
        close() {
            this.show = false;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/mask";
</style>