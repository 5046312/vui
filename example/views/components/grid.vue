<template>
    <v-layout>
        <div class="main-contain">
            <v-codepanel :code="base">
                <div slot="desc">
                    <div>水平比例栅格，采用和Bootstrap一致的设定，最多12列，由width属性百分比来进行宽度设置，根据父容器宽度子容器进行适应</div>
                    <div>
                        栅格包括 父组件
                        <span style="color: blue">&lt;v-row&gt;</span> 列
                        和 子组件
                        <span style="color: blue">&lt;v-col&gt;</span> 行
                        组成
                    </div>
                </div>
                <div>
                    <v-row width="12">
                        <v-col width="6" style="background: red">1</v-col>
                        <v-col width="6" style="background: green">2</v-col>
                    </v-row>
                </div>
            </v-codepanel>

            <v-codepanel :code="base">
                <div slot="desc">
                    <div>v-row组件支持间隔gutter设置，为相邻两v-col组件的px间距</div>
                </div>
                <div>
                    <v-row gutter="20">
                        <v-col width="6">
                            <div style="background: red">1</div>
                        </v-col>
                        <v-col width="6">
                            <div style="background: green">2</div>
                        </v-col>
                    </v-row>
                </div>
            </v-codepanel>

            <v-codepanel :code="base">
                <div slot="desc">
                    <div>v-row组件支持外边距margin设置，为v-row组件设置px外边距</div>
                </div>
                <v-row margin="20">
                    <v-col width="6">
                        <div style="background: red">1</div>
                    </v-col>
                    <v-col width="6">
                        <div style="background: green">2</div>
                    </v-col>
                </v-row>
            </v-codepanel>
        </div>
    </v-layout>
</template>
<script>
import code from "@/codes/toast";
export default {
    components: {},
    data() {
        return {
            base: code.base
        };
    },
    methods: {
        showToast() {
            this.$toast("弹出一个Toast");
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
