<template>
    <span id="demo-icon" @click="copy">
        <v-icon :type="type"></v-icon>
        <div class='type'>{{type}}</div>
    </span>
</template>
<script>
import Clipboard from "clipboard";
export default {
    props: {
        type: String
    },
    methods: {
        copy(){
            const clipboard = new Clipboard("#demo-icon", { text: () => `<v-icon type="${this.type}" />` });
            clipboard.on("success", e => {
                e.clearSelection();
                clipboard.destroy();
                this.$toast("已复制图标代码");
            });
        }
    }
}
</script>
<style lang="scss" scoped>
#demo-icon{
    padding: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: all .5s;
    box-shadow: 1px 1px 4px #eee;
    margin: 10px;
    &:hover{
        box-shadow: 1px 1px 4px #aaa;
        cursor: pointer;
    }
    &>i{
        height: 30px;
        width: 30px;
        font-size: 30px;
        box-sizing: border-box;
    }
    &>.type{
        margin: 0 10px;
    }
}
</style>
