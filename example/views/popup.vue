<template>
    <div>
        <div>
            <div slot="desc">弹出层</div>
            <div>
                <v-button @click="show_1 = true">显示弹出层</v-button>
                <v-popup v-model="show_1">123</v-popup>
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
            show_1: false,
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
