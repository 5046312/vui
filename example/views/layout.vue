<template>
    <div class="layout">
        <div class="nav">
            <router-link class="title" to="/" tag="div">Welcome</router-link>
            <div v-for="(part, index) in list" :key="index">
                <div class="part-title">{{part.title}}</div>
                <div class="part-item">
                    <router-link
                        :to="'/' + index + '/' + item.path"
                        tag="div"
                        v-for="item in part.children"
                        :key="item.path"
                    >
                        {{item.meta.title}} {{item.path}}
                    </router-link>
                </div>
            </div>
        </div>
        <router-view class="content"></router-view>
    </div>
</template>
<script>
import { routerList } from "@/router";
export default {
    data() {
        return {
        };
    },
    computed: {
        list(){
            return routerList
        }
    }
};
</script>
<style lang="scss" scoped>
@mixin scrollbar() {
    /*滚动条整体样式*/
    &::-webkit-scrollbar {
        width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 4px;
    }
    
    /*滚动条里面小方块*/
    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: rgba(160, 160, 160, .2);
        &:hover{
            background-color: rgba(160, 160, 160, .6);
        }
    }
    /*滚动条里面轨道*/
    &::-webkit-scrollbar-track {
        border-radius: 0;
        background: rgba(160, 160, 160, 0);
    }
}
.layout {
    display: flex;
    height: 100%;
    width: 100%;
    .nav {
        width: 200px;
        background: #f9f9f9;
        height: 100%;
        overflow-y: hidden;
        &:hover {
            overflow-y: scroll;
            @include scrollbar();
        }

        .title {
            padding: 20px;
            cursor: pointer;
        }

        & > div {
            margin-bottom: 10px;
        }
        .part-title {
            padding: 10px 20px;
            border-bottom: 1px dashed #eee;
            cursor: default;
        }

        .part-item {
            padding: 10px 0;
            & > div {
                text-transform: capitalize;
                padding: 10px 0 10px 20px;
                margin-left: 20px;
                cursor: pointer;
                font-size: 15px;
                &:hover {
                    color: #4dabf7;
                }

                &.router-link-active {
                    color: #4dabf7;
                }
            }
        }
    }
    // router-view
    .content {
        flex: 1;
        overflow-y: hidden;
        &:hover{
            @include scrollbar();
        }
    }
}
</style>
