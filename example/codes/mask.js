let code = {}
code.base = `
<template>
    <v-button @click='showMask'>弹出一个Mask遮罩</v-button>
</template>
<script>
    export default {
        methods: {
            showMask() {
                this.$mask(.5, 999)
            }
        }
    }
</script>
`

export default code