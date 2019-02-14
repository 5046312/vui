let code = {}
code.base = `
<template>
    <v-page v-model="page" :total="15" border></v-page>
</template>
<script>
    export default {
        data: {
            return {
                page: 1,
            }
        }
    }
</script>
`

export default code