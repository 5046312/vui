<template>
    <div class="vui-sliderbox">
        <div class="slider" :style="sliderboxStyle">
            <slot></slot>
        </div>
        <div class="controll" v-if="controll">
            <div class="left" @click="prev">
                <v-icon type="ios-arrow-back"/>
            </div>
            <div class="right" @click="next">
                <v-icon type="ios-arrow-forward"/>
            </div>
        </div>
        <div class="step" v-if="step">
            <div
                class="dot"
                :class="{active: _index == value}"
                v-for="(item, _index) in total"
                :key="_index"
                @click="$emit('input', _index)"
            ></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "v-sliderbox",
    props: {
        value: Number, // 当前索引
        autoplay: Number, // 自动切换下一张的时间间隔（秒）
        loop: Boolean, // 是否循环播放
        controll: Boolean, // 显示左右切换按钮
        step: Boolean // 显示底部进步器
    },
    data() {
        return {
            total: 3, // 总页数
            width: 0 // 单个slider宽度
        };
    },
    mounted() {
        let total = 0;
        this.$slots.default.map(item => {
            if (
                item.componentOptions &&
                item.componentOptions.tag == "v-slider"
            )
                total++;
        });
        this.total = total;
        if (this.autoplay > 0) {
            const autoplayFunc = () => {
                setTimeout(() => {
                    this.next();
                    autoplayFunc();
                }, this.autoplay);
            };
            autoplayFunc();
        }
    },
    methods: {
        // 上一页
        prev() {
            const target = this.value - 1;
            if (target < 0) return this.$emit("input", this.total - 1);
            this.$emit("input", target);
        },

        // 下一页
        next() {
            const target = this.value + 1;
            if (target > this.total - 1) return this.$emit("input", 0);
            this.$emit("input", target);
        }
    },
    computed: {
        sliderboxStyle() {
            return {
                left: `-${this.value * 100}%`
            };
        }
    }
};
</script>