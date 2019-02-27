<template>
    <div class='vui-popup' v-show="value">
        <slot />
    </div>
</template>
<script>
// 弹出层
export default {
    name: 'v-popup',
    props: {
        value: Boolean,
    },
    watch:{
        value(val){
            if(val){
                this.$mask.show()
            }
        }
    },
    data(){
        return {
        }
    },
    mounted(){
    }
}
</script>