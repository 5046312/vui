let code = {}
code.base = `
<template>
    <v-button @click="showToast">弹出一个Toast</v-button>
</template>
<script>
    export default {
        methods: {
            showToast() {
                this.$toast.show("弹出一个Toast");
            }
        }
    }
</script>
`

code.time = `
<template>
    <v-button @click="showTime">5s后自动关闭</v-button>
</template>
<script>
    export default {
        methods: {
            showTime() {
                this.$toast.show("5s后自动关闭", 5000);
            }
        }
    }
</script>
`
export default code