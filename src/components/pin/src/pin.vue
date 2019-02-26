<template>
    <div class='vui-pin' :style="emptyHeight">
        <div :style="pinStyle" ref='pin'>
            <slot></slot>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'v-pin',
    props: {
        top: {
            default: 0,
        },

        // 距离底部多远不再固定
        bottom: {
            default: 0,
        }
    },
    data(){
        return {
            pin: false,
            pinHeight: 0, // pin dom的高度
            scrollTop: 0, // parent scrollTop
            topToParent: 0, // 当前top距离父元素顶部距离
        }
    },
    mounted(){
        this.pinHeight = this.$refs.pin.offsetHeight
        this.topToParent = this.$el.style.top

        let dom = this.$el.parentNode
        this.pin = dom.scrollTop > this.top
        dom.addEventListener("scroll", () => {
            console.log(dom.scrollTop, this.topToParent)
            this.scrollTop = dom.scrollTop
            this.pin = dom.scrollTop  > this.top + this.topToParent
        })

        
    },
    methods: {
    },
    computed:   {
        pinStyle(){
            let Y = this.pin ? this.scrollTop - this.top : 0
            return {
                transform: `translateY(${Y}px)`
            }
        },
        emptyHeight(){
            return {
                height: this.pinHeight + 'px',
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../styles/components/pin.scss";
</style>
