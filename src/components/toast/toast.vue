<template>
    <v-transition name="fade">
        <div class="vui-toast" v-show="show" @click="show = false">
            <div class="tip">{{msg}}</div>
        </div>
    </v-transition>
</template>
<script>
export default {
    name: "v-toast",
    data() {
        return {
            msg: "",
            show: false
        };
    },
    methods: {},
    computed: {},
    created() {},
    destroyed() {}
};
</script>