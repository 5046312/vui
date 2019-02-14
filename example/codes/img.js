let code = {}
code.base = `
<template>
    <v-img height="180px" width="180px" :src='require("@/assets/01.jpg")'/>
    <v-img height="180px" :src='require("@/assets/01.jpg")'/>
</template>
`
code.cover = `
<template>
    <v-img height="180px" width="180px" :cover="true" :src='require("@/assets/01.jpg")'/>
</template>
`

code.radius = `
<template>
    <v-img height="180px" width="180px" :cover="true" radius="33px" :src='require("@/assets/01.jpg")'/>
    <v-img height="180px" width="180px" :cover="true" radius="122px" :src='require("@/assets/01.jpg")'/>
</template>
`

code.thumb = `
<template>
    <v-img height="180px" width="180px" :cover="true" :thumb="true" :src='require("@/assets/01.jpg")'/>
</template>
`

export default code