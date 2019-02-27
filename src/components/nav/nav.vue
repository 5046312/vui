<template>
    <div class='vui-nav'>
        <div class='item' :class='{active: index == value}' v-for="(item, index) in list" :key="index" @click="$emit('input', index)">{{item.name}}</div>
        <div class='bar'><div class='line' :style="lineStyle"></div></div>
    </div>
</template>
<script>
export default {
    name: 'v-nav',
    props: {
        list: Array,
        value: Number,
    },
    computed: {
        lineStyle(){
            let width = 1 / this.list.length
            return {
                width: width * 100 + '%',
                transform: `translateX(${this.value * 100}%)`
            }
        }
    }
}
</script>