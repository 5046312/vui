<template>
    <div class='vui-bread'>
        <div v-for="(item, index) in list" :key="index">
            <v-icon v-if="item.icon" :type="item.icon" />
            <span>{{item.text}}</span>
            <span class='divide' v-if="index != list.length - 1">{{divide}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'v-bread',
    props: {
        list: Array,
        divide: {
            default: '/'
        }
    },
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../styles/components/bread.scss";
</style>
