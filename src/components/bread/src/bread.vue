<template>
    <div class="vui-bread">
        <div v-for="(item, index) in list" :key="index">
            <v-icon v-if="item.icon" :type="item.icon" style="font-size: 16px"/>
            <span>{{item.text}}</span>
            <span class="divide" v-if="index != list.length - 1">{{divide}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "v-bread",
    props: {
        list: Array,
        divide: {
            default: "/"
        },
        size: {
            default: "16"
        }
    },
    data() {
        return {};
    },
    computed: {}
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/bread.scss";
</style>
