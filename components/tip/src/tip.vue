<template>
    <div class="vui-tip" @mouseenter="show = true" @mouseleave="show = false">
        <span>
            <slot/>
        </span>
        <div
            class="tip"
            v-show="show"
            :style="tipStyle"
            :place-before="placeSplit.before"
            :place-after="placeSplit.after"
        >
            <div class="angle" :style="angleStyle"></div>
            <div class="msg" ref="msg" v-html="content"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "v-tip",
    props: {
        content: String,
        place: { default: "top" }
    },
    data() {
        return {
            show: true,
            slotHeight: 0,
            slotWidth: 0,
            msgWidth: 0,
            msgHeight: 0,
            elWidth: 0,
            elHeight: 0
        };
    },
    watch: {
        
    },
    mounted() {
        this.getOffset()
        this.show = false
    },
    methods: {
        getOffset(){
            // 获取slot 高度， 宽度
            this.slotHeight = this.$slots.default[0].componentInstance.$el.offsetHeight;
            this.slotWidth = this.$slots.default[0].componentInstance.$el.offsetWidth;
            this.msgWidth = this.$refs.msg.offsetWidth;
            this.msgHeight = this.$refs.msg.offsetHeight;
            this.elWidth = this.$el.offsetWidth;
            this.elHeight = this.$el.offsetHeight;
        }
    },
    computed: {
        // 位置分为主位before 和副位after
        placeSplit() {
            return {
                before: this.place.split(" ")[0],
                after: this.place.split(" ")[1]
            };
        },
        // tip 样式
        tipStyle() {
            let style = {};
            switch (this.placeSplit.before) {
                case "top":
                    style.top = `-${this.slotHeight + 10}px`;
                    if (this.placeSplit.after == "left") {
                        style.left = "0";
                    } else if (this.placeSplit.after == "right") {
                        style.right = "0";
                    } else {
                        style.left = - (this.msgWidth - this.elWidth) / 2 + "px";
                    }
                    break;
                case "bottom":
                    style.top = `${this.slotHeight + 10}px`;
                    if (this.placeSplit.after == "left") {
                        style.left = "0";
                    } else if (this.placeSplit.after == "right") {
                        style.right = "0";
                    } else {
                        style.left = -(this.msgWidth - this.elWidth) / 2 + "px";
                    }
                    break;
                case "left":
                    style.right = `${this.elWidth + 10}px`;
                    if (this.placeSplit.after == "top") {
                        style.top = "0";
                    } else if (this.placeSplit.after == "bottom") {
                        style.bottom = "0";
                    } else {
                        style.top =
                            -(this.msgHeight - this.elHeight) / 2 + "px";
                    }
                    break;
                case "right":
                    style.left = `${this.slotWidth + 10}px`;
                    if (this.placeSplit.after == "top") {
                        style.top = "0";
                    } else if (this.placeSplit.after == "bottom") {
                        style.bottom = "0";
                    } else {
                        style.top =
                            -(this.msgHeight - this.elHeight) / 2 + "px";
                    }
                    break;
            }
            return style;
        },
        // angle
        angleStyle() {
            let style = {};
            switch (this.placeSplit.before) {
                case "top":
                    if (this.placeSplit.after == "left") {
                        style.left = `${this.elWidth / 2}px`;
                    } else if (this.placeSplit.after == "right") {
                        style.right = `${this.elWidth / 2 - 8}px`;
                    } else {
                        style.left = `50%`;
                    }
                    break;
                case "bottom":
                    if (this.placeSplit.after == "left") {
                        style.left = `${this.elWidth / 2}px`;
                    } else if (this.placeSplit.after == "right") {
                        style.right = `${this.elWidth / 2 - 8}px`;
                    } else {
                        style.left = `50%`;
                    }
                    break;
                case "left":
                    if (this.placeSplit.after == "top") {
                        style.top = `${this.elHeight / 2}px`;
                    } else if (this.placeSplit.after == "bottom") {
                        style.bottom = `${this.elHeight / 2 - 8}px`;
                    } else {
                        style.top = `50%`;
                    }
                    break;
                case "right":
                    if (this.placeSplit.after == "top") {
                        style.top = `${this.elHeight / 2}px`;
                    } else if (this.placeSplit.after == "bottom") {
                        style.bottom = `${this.elHeight / 2 - 8}px`;
                    } else {
                        style.top = `50%`;
                    }
                    break;
            }
            return style;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/tip.scss";
</style>
