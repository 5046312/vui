<template>
    <div class="vui-layout">
        <slot name="header"></slot>
        <div class="content">
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
</template>
<script>
export default {
    name: "v-layout",
    data() {
        return {};
    },
    methods: {},
    computed: {
    }
};
</script>
<style lang="scss" scoped>
@import '../../../styles/base.scss';
.vui-layout{
    display: flex;
    flex-direction: column;
    .content{
        flex: 1;
        @include scrollbar();
    }
}
</style>