<template>
    <v-layout>
        <div class="main-contain">
            <demo :code="base">
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
                    <v-row width="12" class="block-bg">
                        <v-col width="6">
                            <div class="block blue">width = 6</div>
                        </v-col>
                        <v-col width="6">
                            <div class="block red">width = 6</div>
                        </v-col>
                    </v-row>
                </div>
            </demo>

            <demo :code="base">
                <div slot="desc">
                    <div>v-row组件支持间隔gutter设置，为相邻两v-col组件的px间距</div>
                </div>
                <div>
                    <v-row gutter="20" class="block-bg">
                        <v-col width="4">
                            <div class="block blue">width = 4</div>
                        </v-col>
                        <v-col width="4">
                            <div class="block blue">width = 4</div>
                        </v-col>
                        <v-col width="4">
                            <div class="block blue">width = 4</div>
                        </v-col>
                    </v-row>
                </div>
            </demo>

            <demo :code="base">
                <div slot="desc">
                    <div>v-row组件支持外边距margin设置，为v-row组件设置px外边距</div>
                </div>
                <v-row margin="20" class="block-bg">
                    <v-col width="6">
                        <div class="block blue">width = 6</div>
                    </v-col>
                    <v-col width="6">
                        <div class="block red">width = 6</div>
                    </v-col>
                </v-row>
            </demo>

            <demo :code="base">
                <div slot="desc">
                    <div>v-row组件支持不同的v-col水平方向对其方式 justify</div>
                </div>
                <v-row justify="start" class="block-bg">
                    <v-col width="3">
                        <div class="block blue">width = 3</div>
                    </v-col>
                    <v-col width="3">
                        <div class="block red">width = 3</div>
                    </v-col>
                    <v-col width="3">
                        <div class="block blue">width = 3</div>
                    </v-col>
                </v-row>

                <div style="height: 20px;"></div>

                <v-row justify="end" class="block-bg">
                    <v-col width="3">
                        <div class="block blue">width = 3</div>
                    </v-col>
                    <v-col width="3">
                        <div class="block red">width = 3</div>
                    </v-col>
                    <v-col width="3">
                        <div class="block blue">width = 3</div>
                    </v-col>
                </v-row>

                <div style="height: 20px;"></div>

                <v-row justify="between" class="block-bg">
                    <v-col width="3">
                        <div class="block blue">width = 3</div>
                    </v-col>
                    <v-col width="3">
                        <div class="block red">width = 3</div>
                    </v-col>
                    <v-col width="3">
                        <div class="block blue">width = 3</div>
                    </v-col>
                </v-row>

                <div style="height: 20px;"></div>

                <v-row justify="around" class="block-bg">
                    <v-col width="3">
                        <div class="block blue">width = 3</div>
                    </v-col>
                    <v-col width="3">
                        <div class="block red">width = 3</div>
                    </v-col>
                    <v-col width="3">
                        <div class="block blue">width = 3</div>
                    </v-col>
                </v-row>
            </demo>

            <demo :code="base">
                <div slot="desc">
                    <div>v-row组件支持不同的v-col垂直方向对其方式 align</div>
                </div>
                <v-row align="top" class="block-bg">
                    <v-col width="3">
                        <div class="block blue" style="height: 100px;">width = 3</div>
                    </v-col>
                    <v-col width="3">
                        <div class="block red" style="height: 40px;">width = 3</div>
                    </v-col>
                    <v-col width="3">
                        <div class="block blue" style="height: 70px;">width = 3</div>
                    </v-col>
                </v-row>

                <div style="height: 20px;"></div>

                <v-row align="center" class="block-bg">
                    <v-col width="3">
                        <div class="block blue" style="height: 100px;">width = 3</div>
                    </v-col>
                    <v-col width="3">
                        <div class="block red" style="height: 40px;">width = 3</div>
                    </v-col>
                    <v-col width="3">
                        <div class="block blue" style="height: 70px;">width = 3</div>
                    </v-col>
                </v-row>

                <div style="height: 20px;"></div>

                <v-row align="bottom" class="block-bg">
                    <v-col width="3">
                        <div class="block blue" style="height: 100px;">width = 3</div>
                    </v-col>
                    <v-col width="3">
                        <div class="block red" style="height: 40px;">width = 3</div>
                    </v-col>
                    <v-col width="3">
                        <div class="block blue" style="height: 70px;">width = 3</div>
                    </v-col>
                </v-row>

                <div style="height: 20px;"></div>
            </demo>

            <demo :code="base">
                <div slot="desc">
                    <div>v-col组件支持排序。order小的排在前</div>
                </div>
                <v-row class="block-bg">
                    <v-col width="3" order="4">
                        <div class="block blue">0,order 4</div>
                    </v-col>
                    <v-col width="3" order="3">
                        <div class="block red">1,order 3</div>
                    </v-col>
                    <v-col width="3" order="2">
                        <div class="block blue">2,order 2</div>
                    </v-col>
                    <v-col width="3" order="1">
                        <div class="block red">3,order 1</div>
                    </v-col>
                </v-row>
            </demo>

            <demo :code="base">
                <div slot="desc">
                    <div>v-col组件支持相对左侧偏移量，offset值仍为所占份数</div>
                </div>
                <v-row class="block-bg">
                    <v-col width="4" offset="1">
                        <div class="block blue">width=4 offet=1</div>
                    </v-col>
                    <v-col width="3" offset="1">
                        <div class="block red">width=3 offet=1</div>
                    </v-col>
                </v-row>

                <div style="height: 20px;"></div>

                <v-row class="block-bg">
                    <v-col width="4" offset="6">
                        <div class="block blue">width=4 offet=6</div>
                    </v-col>
                </v-row>

                <div style="height: 20px;"></div>

                <v-row class="block-bg">
                    <v-col width="4" offset="8">
                        <div class="block blue">width=4 offet=8</div>
                    </v-col>
                </v-row>
            </demo>
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
.block-bg {
    background: #f1f1f1;
    .block {
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        font-size: 12px;
        border-radius: 3px;
        &.blue {
            background: #1e90ff;
        }
        &.red {
            background: #ff6348;
        }
    }
}
</style>
