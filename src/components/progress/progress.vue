<template>
    <div class='vui-progress' :style="progressStyle">
        <div class='contain' :style="radiusStyle">
            <div class='bar' :style="barStyle" :class='barClass'></div>
            <div class='bg' :style="radiusStyle"></div>
        </div>
        <div class='percent' :class='{success: isComplete}' v-if="tip">
            {{percentValue < 100 ? percentValue + '%' : '完成'}}
        </div>
    </div>
</template>
<script>
export default {
    name: 'v-progress',
    props: {
        // 颜色
        type: {
            default: 'primary'
        },
        // 粗细 px
        weight: {
            default: 10,
        },
        percent: {
            default: 0,
        },
        tip: {
            default: false,
        }
    },

    computed: {
        // 100%进度
        isComplete(){
            return this.percentValue == 100
        },
        percentValue(){
            if(this.percent < 0) return 0
            if(this.percent > 100) return 100
            return parseInt(this.percent)
        },
        progressStyle(){
            return {
                height: this.weight + 'px',
            }
        },
        barClass(){
            return {
                success: this.isComplete,
                warning: this.type == 'warning' && !this.isComplete,
                error: this.type == 'error' && !this.isComplete,
            }
        },
        barStyle(){
            return {
                borderRadius: this.weight + 'px',
                width: this.percentValue + '%',
            }
        },
        radiusStyle(){
            return {
                borderRadius: this.weight + 'px'
            }
        }
    }
}
</script>