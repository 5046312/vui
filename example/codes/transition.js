let code = {}
code.base = `
<template>
    <v-transition name="fade">
    <span v-show="showFade">name = fade</span>
    </v-transition>
</template>
<script>
    export default {
        data: {
            return {
                showFade: false
            }
        }
    }
</script>
`

export default code