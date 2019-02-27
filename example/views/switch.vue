<template>
    <div>
        <div :code="code.base">
            <div slot="desc">开关</div>
            <div>
                <v-switch v-model="value" @click="value = !value"/>
            </div>
        </div>

        <div :code="code.base">
            <div slot="desc">开关 颜色</div>
            <div>
                <v-switch type="primary" v-model="value" @click="value = !value"/>
                <v-switch type="info" v-model="value" @click="value = !value"/>
                <v-switch type="danger" v-model="value" @click="value = !value"/>
                <v-switch type="success" v-model="value" @click="value = !value"/>
                <v-switch type="error" v-model="value" @click="value = !value"/>
            </div>
        </div>

        <div :code="code.base">
            <div slot="desc">开关 尺寸</div>
            <div>
                <v-switch @click="value = !value" v-model="value"/>
                <v-switch size="small" @click="value = !value" v-model="value"/>
            </div>
        </div>

        <div :code="code.base">
            <div slot="desc">开关 内容</div>
            <div>
                <v-switch @click="value = !value" v-model="value" text='cn'/>
                <v-switch @click="value = !value" v-model="value" text='en'/>
                <v-switch @click="value = !value" v-model="value" text='icon'/>
            </div>
        </div>

        <div :code="code.base">
            <div slot="desc">开关 只读状态</div>
            <div style="display: flex;align-items: center;">
                <v-switch v-model="value" @click="value = !value" :readonly="readonly"></v-switch>
                <v-button @click='readonly = !readonly'>切换只读状态</v-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            code: {},
            percent: 0,
            value: false,
            readonly: false,
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
