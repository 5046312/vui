<template>
    <span class="vui-checkbox" @click="checkHandle">
        <span class="checkbox" :class="{active: checked}">
            <v-icon type="ios-checkmark" class='icon' :class='{active: checked}'/>
        </span>
        <span class="label">
            <slot/>
        </span>
    </span>
</template>
<script>
import { removeItem } from "../../utils/helper";
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