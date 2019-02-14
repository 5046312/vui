let code = {}
code.base = `
<template>
    <v-radio v-model="value" val="苹果">苹果</v-radio>
    <v-radio v-model="value" val="梨">梨</v-radio>
</template>
<script>
export default {
    data() {
        return {
            value: "苹果"
        }
    }
};
</script>
`

export default code