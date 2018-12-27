<template>
    <div class='layout'>
        <div class='nav'>
            <div>components</div>
            <div v-for="item in '12312312312'" style="margin-bottom: 102px;">components</div>
        </div>
        <router-view class='content'></router-view>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.layout{
    display: flex;
    height: 100%;
    width: 100%;
    .nav{
        width: 200px;
        background: #eee;
        height: 100%;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            /*滚动条整体样式*/
            width: 3px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 3px;
        }
        &::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            border-radius: 3px;
            background: rgba(0, 0, 0, 0.3);
        }
        &::-webkit-scrollbar-track {
            /*滚动条里面轨道*/
            border-radius: 0;
            background: rgba(0, 0, 0, 0.1);
        }
    }
    // router-view
    .content{
        width: 100%;
    }
}
</style>
