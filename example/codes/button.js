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