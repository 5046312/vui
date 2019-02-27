<template>
    <ul class="vui-page" :class="{border: showBorder}" v-if="pageList.length">
        <li :class='{disable: value == 1}' @click="value == 1 || $emit('input', value - 1)"><v-icon type="ios-arrow-back" /></li>
        <li v-show="value > 3 && total > 7">1</li>
        <li v-show="value == 5 && total > 7">2</li>
        <div v-show="value > 5 && total > 7" @click="$emit('input', value - 5)">
            <span>−5</span>
        </div>

        <li @click="$emit('input', num)" v-for="num in pageList" :key="num" :class="{current: value == num}">{{num}}</li>
        
        <div v-show="value + 5 <= total && total > 7" @click="$emit('input', value + 5)">
            <span>+5</span>
        </div>
        <li v-show="value == total - 4 && total > 7">{{total - 1}}</li>
        <li v-show="value < total - 2 && total > 7">{{total}}</li>
        <li :class='{disable: value == total}'  @click="value == total || $emit('input', value + 1)"><v-icon type="ios-arrow-forward" /></li>
    </ul>
</template>
<script>
export default {
    name: "v-page",
    props: {
        value: Number, // 当前页数
        showNumber: { type: Number, default: 5 }, // pageList 中间显示几个页数选项
        total: { type: Number, default: 0 }, // 总页数

        border: { default: null }, // 显示边框
    },
    data() {
        return {};
    },
    watch: {},
    computed: {
        // 中间显示页码个数
        pageList() {
            if (this.total === 0) return [];
            let offset = Math.floor(this.showNumber / 2);
            let begin = Math.max(1, this.value - offset);
            let end = Math.min(this.total, this.value + offset);
            if (end - begin + 1 < this.showNumber) {
                begin = Math.max(1, end - this.showNumber + 1);
                end = Math.min(this.total, begin + this.showNumber - 1);
            }
            let items = [];
            for (let i = begin; i <= end; i++) {
                items.push(i);
            }
            return items;
        },
        
        // 显示li边框
        showBorder(){
            return this.border === "" || this.border
        }
    }
};
</script>