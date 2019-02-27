<template>
    <div>
        <div>
            <v-tag>tag</v-tag>
            <v-tag type="primary">primary</v-tag>
            <v-tag type="info">info</v-tag>
            <v-tag type="success">success</v-tag>
            <v-tag type="error">error</v-tag>
            <v-tag type="warning">warning</v-tag>
            <v-tag type="danger">danger</v-tag>
        </div>

        <div>
            <v-dot/>
            <v-dot type="primary"/>
            <v-dot type="info"/>
            <v-dot type="success"/>
            <v-dot type="error"/>
            <v-dot type="warning"/>
            <v-dot type="danger"/>
        </div>

        <div>
            <v-dot>default</v-dot>
            <v-dot type="primary">primary</v-dot>
            <v-dot type="info">info</v-dot>
            <v-dot type="success">success</v-dot>
            <v-dot type="error">error</v-dot>
            <v-dot type="warning">warning</v-dot>
            <v-dot type="danger">danger</v-dot>
        </div>

        <div>
            <v-dot type="primary" left>left</v-dot>
            <v-dot type="primary" right>right</v-dot>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            code: {},
            percent: 0
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
