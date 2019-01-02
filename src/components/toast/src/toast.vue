<template>
    <div id="vui-toast">
        <div class="tip" :style="{opacity}">{{msg}}</div>
    </div>
</template>
<script>
export default {
    name: "v-toast",
    data() {
        return {
            msg: "",
            opacity: 0,
        };
    },
    methods: {},
    computed: {},
    created() {
        setTimeout(() => {
            this.opacity = 1
        }, 2000)
    },
    destroyed(){
        alert(123)
        this.opacity = 0
    }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/toast";
</style>