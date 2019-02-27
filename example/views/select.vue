<template>
    <div>
        <div>
            <div slot="desc">选择器 Select</div>
            <div>
                <v-select v-model="baseValue">
                    <v-option label="苹果" value="apple"/>
                    <v-option label="梨" value="pear" />
                    <v-option label="桃子" value="peach" />
                    <v-option label="菠萝" value="pineapple" />
                </v-select>
                <span style="padding: 0 10px">{{baseValue}}</span>
            </div>
        </div>

        <div>
            <div slot="desc">选择器 Select 禁用</div>
            <div>
                <v-select v-model="baseValue" disable>
                    <v-option label="苹果" value="apple"/>
                    <v-option label="梨" value="pear"/>
                    <v-option label="桃子" value="peach" />
                    <v-option label="菠萝" value="pineapple"/>
                </v-select>
                <span style="padding: 0 10px">{{baseValue}}</span>
            </div>
        </div>

        <div>
            <div slot="desc">选择器 Select 包含禁用Option项</div>
            <div>
                <v-select v-model="baseValue">
                    <v-option label="苹果" value="apple"/>
                    <v-option label="梨" value="pear" disable/>
                    <v-option label="桃子" value="peach" />
                    <v-option label="菠萝" value="pineapple" disable="菠萝都坏掉了"/>
                </v-select>
                <span style="padding: 0 10px">{{baseValue}}</span>
            </div>
        </div>

        <div>
            <div slot="desc">选择器 Select 清空按钮</div>
            <div>
                <v-select v-model="baseValue" del>
                    <v-option label="苹果" value="apple"/>
                    <v-option label="梨" value="pear"/>
                    <v-option label="桃子" value="peach" />
                    <v-option label="菠萝" value="pineapple"/>
                </v-select>
                <span style="padding: 0 10px">{{baseValue}}</span>
            </div>
        </div>

        <div style="padding-bottom: 500px;"></div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            code: {},
            baseValue: '',
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
.bg{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 41px;
    &.part-1{
        background: #aaa;
    }
    &.part-2{
        background: #ddd;
    }
    &.part-3{
        background: #ccc;
    }
    &.part-4{
        background: #bbb;
    }
}
</style>
