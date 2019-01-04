let code = {}
code.base = `
<template>
    <v-button @click="showToast">弹出一个Toast</v-button>
</template>
<script>
    export default {
        methods: {
            showToast() {
                this.$toast("弹出一个Toast");
            }
        }
    }
</script>
`
code.click = `
<template>
    <v-button @click="showToast">弹出一个Toast</v-button>
</template>
<script>
    export default {
        methods: {
            showToast() {
                this.$toast("弹出一个Toast");
            }
        }
    }
</script>
`

export default code