let code = {}
code.base = 
`
<template>
    <v-row width="12">
        <v-col width="6">
            <div>width = 6</div>
        </v-col>
        <v-col width="6">
            <div>width = 6</div>
        </v-col>
    </v-row>
</template>
`

code.gutter = `
<template>
    <v-row gutter="20">
        <v-col width="4">
            <div>width = 4</div>
        </v-col>
        <v-col width="4">
            <div>width = 4</div>
        </v-col>
        <v-col width="4">
            <div>width = 4</div>
        </v-col>
    </v-row>
</template>
`
code.margin = `
<template>
    <v-row margin="20">
        <v-col width="6">
            <div>width = 6</div>
        </v-col>
        <v-col width="6">
            <div>width = 6</div>
        </v-col>
    </v-row>
</template>
`

code.justify = `
<template>
    <v-row justify="start">
        <v-col width="3">
            <div>width = 3</div>
        </v-col>
        <v-col width="3">
            <div>width = 3</div>
        </v-col>
        <v-col width="3">
            <div>width = 3</div>
        </v-col>
    </v-row>
</template>
`

code.align = `
<template>
    <v-row align="top">
        <v-col width="3">
            <div>width = 3</div>
        </v-col>
        <v-col width="3">
            <div>width = 3</div>
        </v-col>
        <v-col width="3">
            <div>width = 3</div>
        </v-col>
    </v-row>
</template>
`

code.order = `
<template>
    <v-row>
        <v-col width="3" order="4">
            <div>0,order 4</div>
        </v-col>
        <v-col width="3" order="3">
            <div>1,order 3</div>
        </v-col>
        <v-col width="3" order="2">
            <div>2,order 2</div>
        </v-col>
        <v-col width="3" order="1">
            <div>3,order 1</div>
        </v-col>
    </v-row>
</template>
`

code.offset = `
<template>
    <v-row>
        <v-col width="4" offset="1">
            <div>width=4 offet=1</div>
        </v-col>
        <v-col width="3" offset="1">
            <div>width=3 offet=1</div>
        </v-col>
    </v-row>
</template>
`

export default code