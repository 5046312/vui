<template>
    <div class='vui-progress' :style="progressStyle">
        <div class='contain' :style="radiusStyle">
            <div class='bar' :style="barStyle" :class='{success: this.isComplete}'></div>
            <div class='bg' :style="radiusStyle"></div>
        </div>
        <div class='percent' :class='{success: this.isComplete}'>
            {{this.percentValue < 100 ? this.percentValue + '%' : '完成'}}
        </div>
    </div>
</template>
<script>
export default {
    name: 'v-progress',
    props: {
        // 粗细 px
        weight: {
            default: 10,
        },
        percent: {
            default: 0,
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
<style lang="scss" scoped>
@import "../../../styles/components/progress";
</style>
