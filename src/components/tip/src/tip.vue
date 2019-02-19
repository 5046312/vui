<template>
    <div class="vui-tip" @mouseenter="show = true" @mouseleave="show = false">
        <span><slot /></span>
        <div class='tip' :style="tipStyle">
            <div class='angle' :place-before="placeSplit.before" :place-after="placeSplit.after"></div>
            <div class='msg' ref="msg">{{content}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'v-tip',
    props: {
        content: String,
        place: { default: 'top' },
    },
    data(){
        return {
            show: false,
            slotHeight: 0,
            slotWidth: 0,
            msgWidth: 0,
        }
    },
    mounted(){
        // 获取slot 高度， 宽度
        this.slotHeight = this.$slots.default[0].componentInstance.$el.offsetHeight
        this.slotWidth = this.$slots.default[0].componentInstance.$el.offsetWidth
        this.msgWidth = this.$refs.msg.offsetWidth
    },
    computed: {
        // 位置分为主位before 和副位after
        placeSplit(){
            return {
                before: this.place.split(' ')[0],
                after: this.place.split(' ')[1]
            }
        },
        // tip 样式
        tipStyle(){
            let style = {
                top: '0px',
                left: '0px',
            }
            switch(this.placeSplit.before){
                case 'top':
                    style.top = `-${this.slotHeight + 10}px`
                    style.left = ''
                    break;
                case 'bottom':
                    style.top = `${this.slotHeight + 10}px`
                    break;
                case 'left':
                    style.left = `-${this.msgWidth + 10}px`
                    break;
                case 'right':
                    style.left = `${this.slotWidth + 10}px`
                    break;
            }
            return style
        },

    }
}
</script>
<style lang="scss" scoped>
@import "../../../styles/components/tip.scss";
</style>
