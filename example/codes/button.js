let code = {}
code.base = `
<template>
    <v-button>Default</v-button>
    <v-button type="primary">Primary</v-button>
    <v-button type="danger">Danger</v-button>
    <v-button type="warning">Warning</v-button>
    <v-button type="success">Success</v-button>
    <v-button type="error">Error</v-button>
    <v-button type="disable">Disable</v-button>
</template>
`
code.size = `
<template>
    <v-button type="primary" size="10">10 Size</v-button>
    <v-button type="primary">Default Size</v-button>
    <v-button type="primary" size="20">20 Size</v-button>
    <v-button type="primary" size="30">30 Size</v-button>
</template>
`
code.group = `
<template>
    <v-group>
        <v-button type="primary">Primary</v-button>
        <v-button type="danger">Danger</v-button>
        <v-button type="warning">Warning</v-button>
    </v-group>
</template>
`

export default code