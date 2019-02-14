let code = {}
code.base = `
<template>
    <v-checkbox v-model="value" val="苹果">苹果</v-checkbox>
    <v-checkbox v-model="value" val="梨">梨</v-checkbox>
    <v-checkbox v-model="value" val="orange">橘子</v-checkbox>
</template>
<script>
export default {
    data() {
        return {
            value: []
        }
    }
};
</script>
`

export default code