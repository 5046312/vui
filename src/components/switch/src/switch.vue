<template>
    <span class='vui-switch' :class="switchClass" @click="!readonly && $emit('click')">
        <span class='icon' :class='[type, size]'></span>
        <span class='text' v-if="text">
            <div class='on'>
                <span v-if="text == 'cn'" style="padding-left: 5px;">开</span>
                <span v-if="text == 'en'">On</span>
                <span v-if="text == 'icon'" style="padding-left: 3px;font-size: 32px;"><v-icon type="ios-checkmark"/></span>
            </div>
            <div class='off'>
                <span v-if="text == 'cn'" style="padding-left: 3px;">关</span>
                <span v-if="text == 'en'">Off</span>
                <span v-if="text == 'icon'" style="padding-left: 3px;font-size: 32px;"><v-icon type="ios-close"/></span>
            </div>
        </span>
    </span>
</template>
<script>
export default {
    name: 'v-switch',
    props: {
        value: Boolean,
        // 颜色
        type: {
            default: 'success'
        },
        // 尺寸 支持small
        size: String,
        // 只读
        readonly: Boolean,
        // 支持三种显示方式
        text: String,
    },
    computed: {
        switchClass(){
            return {
                select: this.value, 
                unselect: !this.value, 
                readonly: this.readonly, 
                small: this.size == 'small'
            }
        },
    }
}
</script>
<style lang="scss" scoped>
@import "../../../styles/components/switch";
</style>
