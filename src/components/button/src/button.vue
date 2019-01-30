<template>
    <div class="vui-button" :class="type" @click="$emit('click')" :style="buttonStyle">
        <div style="padding: .6em 1em;font-size: 1.1em">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "v-button",
    props:{
        type: {
            default: 'default'
        },
        size: {
            default: '14'
        }
    },
    computed: {
        buttonStyle(){
            return {
                fontSize: this.size + 'px',
            }
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/button";
</style>