<template>
    <button class="vui-button" :class="buttonClass" @click="!loading && $emit('click')" :style="buttonStyle">
        <v-icon class="icon" v-if="loading" type="md-refresh load"/>
        <span class='content'>
            <slot></slot>
        </span>
    </button>
</template>
<script>
export default {
    name: "v-button",
    props:{
        type: { default: 'default' },
        size: { default: '15' },
        empty: Boolean,
        block: Boolean,
        loading: Boolean
    },
    computed: {
        buttonStyle(){
            return { fontSize: this.size + 'px' }
        },
        buttonClass(){
            let classArray = [ this.type ]
            if(this.empty) classArray.push("empty")
            if(this.block) classArray.push("block")
            if(this.loading) classArray.push("loading")
            return classArray
        }
    }
};
</script>