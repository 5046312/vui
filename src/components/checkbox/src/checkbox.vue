<template>
    <span class="vui-checkbox" :class="{active: checked}" @click="checkHandle">
        <v-icon type="ios-checkmark" v-if="checked"/>
    </span>
</template>
<script>
import { removeItem } from "../../../utils/helper";
export default {
    name: "v-checkbox",
    props: {
        value: Array,
        val: String // 多选
    },
    methods: {
        checkHandle() {
            if (this.checked) {
                removeItem(this.value, this.val);
            } else {
                this.value.push(this.val);
            }
            this.$emit("input", this.value);
        }
    },
    computed: {
        checked() {
            return this.value.includes(this.val);
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/checkbox";
</style>
