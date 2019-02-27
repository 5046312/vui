<template>
    <v-transition name="fade">
        <div
            class="vui-mask"
            v-show="show"
            :style="{background: color, zIndex: zindex}"
            @click.stop.prevent="callback && callback()"
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
            callback: null,
            show: false
        };
    },
    computed: {
        color() {
            return `rgba(60, 60, 60, ${this.opacity})`;
        }
    },
    methods: {
        hide() {
            this.show = false;
        }
    }
};
</script>