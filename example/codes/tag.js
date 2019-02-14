let code = {}
code.base = `
<template>
    <v-tag>tag</v-tag>
    <v-tag type="primary">primary</v-tag>
    <v-tag type="info">info</v-tag>
    <v-tag type="success">success</v-tag>
    <v-tag type="error">error</v-tag>
    <v-tag type="warning">warning</v-tag>
    <v-tag type="danger">danger</v-tag>
</template>
`
code.dot = `
<template>
    <v-dot />
    <v-dot type="primary" />
    <v-dot type="info" />
    <v-dot type="success" />
    <v-dot type="error" />
    <v-dot type="warning" />
    <v-dot type="danger" />
</template>
`
code.color = `
<template>
    <v-navbar title="改变颜色" color="orange" bgColor="#1e1e1e">
        <div slot="left">左</div>
        <div slot="right">右</div>
    </v-navbar>
</template>
`

code.direction = `
<template>
    <v-dot type="primary" left>left</v-dot>
    <v-dot type="primary" right>right</v-dot>
</template>
`

export default code