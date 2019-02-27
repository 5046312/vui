<template>
    <div class="vui-top" @click.stop.prevent='top'>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "v-top",
    props: {
        right: {
            default: '50'
        },
        bottom: {
            default: '50'
        },
        // 到达多少scrollTop时显示
        top: {
            default: 0
        }
    },
    data() {
        return {
            show: false,
        };
    },

    mounted(){
        if(this.top == 0){
            this.show = true
        }else{
            let dom = this.$el.parentNode
            this.show = dom.scrollTop > this.top
            dom.addEventListener("scroll", () => {
                this.show = dom.scrollTop > this.top
            })
        }
    },

    methods: {
        // 回到顶部
        back(){
            this.$el.parentNode.scrollTo(0, 0)
        }
    },
    computed: {
        // 定位属性
        style(){
            return {
                position: 'fixed',
                right: this.right + 'px',
                bottom: this.bottom + 'px'
            }
        }
    }
};
</script>