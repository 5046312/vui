<template>
    <div class="vui-bread">
        <div v-for="(item, index) in list" :key="index" @click="$emit('click', item)">
            <v-icon v-if="item.icon" :type="item.icon" style="font-size: 16px" :class='{active: item.active}'/>
            <span class='text' :class='{active: item.active  && index != list.length - 1}'>{{item.text}}</span>
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
