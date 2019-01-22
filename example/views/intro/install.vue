<template>
    <div id="install">
        <v-demo>
            <div slot="desc">安装</div>
            <div>
                在Vue项目中使用npm、yarn进行安装
            </div>
            <v-code code="npm install vui-ui" class="code"/>
            <v-code code="yarn add vui-ui" class="code"/>
        </v-demo>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
#install{
    .code{
        background: #eee;
        margin-top: 10px;
    }
}
</style>
