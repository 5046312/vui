let code = {}
code.base = `
<template>
    <v-navbar title="Navbar"></v-navbar>
</template>
`
code.slot = `
<template>
    <v-navbar title="Navbar">
        <div slot="left">左</div>
        <div slot="right">右</div>
    </v-navbar>
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

export default code