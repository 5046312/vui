<template>
    <div class="vui-button" :class="type" @click="$emit('click')" :style="buttonStyle">
        <div class='content'>
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