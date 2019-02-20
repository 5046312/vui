<template>
    <div class="vui-input" @mouseenter="hover = true" @mouseleave="hover = false">
        <div class='before'><slot name='before'/></div>
        <div class='input'>
            <input :type="type" @input="onInput" v-model="inputValue" :placeholder="placeholder">
            <div class='clear' v-show="clear && hover && value.length" @click='$emit("input", "")'>
                <v-icon type="ios-close-circle" />
            </div>
        </div>
        <div class='after'><slot name='after'/></div>
    </div>
</template>
<script>
export default {
    name: "v-input",
    props: {
        type: {
            default: "text"
        },
        value: [Number, String],
        placeholder: String,
        max: Number, // 最大长度
        clear: Boolean, // 是否显示清空按钮
    },
    data() {
        return {
            inputValue: this.value,
            hover: false,
        };
    },
    watch: {
        value(val) {
            this.inputValue = val;
        }
    },
    methods: {
        onInput(e) {
            // 最大长度
            const max = parseInt(this.max);
            if (max > 0) {
                this.$emit("input", e.target.value.substr(0, max));
            } else {
                this.$emit("input", e.target.value);
            }
        }
    },
    computed: {}
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/input";
</style>