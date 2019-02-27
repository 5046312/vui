<template>
    <transition
        :name="name"
        :enter-active-class="enterClassName"
        :leave-active-class="leaveClassName"
    >
        <slot></slot>
    </transition>
</template>
<script>
export default {
    name: "v-transition",
    props: {
        name: {
            default: "fade"
        },
        in: {
            default: null,
        },
        out: {
            default: null,
        },
        duration: {
            default: '0.1'
        },
    },
    computed: {
        enterClassName() {
            return `animated ${this.name}In vui-transition`;
        },
        leaveClassName() {
            return `animated ${this.name}Out vui-transition`;
        }
    }
};
</script>