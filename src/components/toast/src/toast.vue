<template>
    <v-transition name="fade">
        <div id="vui-toast" v-show="show" @click="show = false">
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
<style lang="scss" scoped>
@import "../../../styles/components/toast";
</style>