let code = {}
code.base = `
<template>
    <div>显示进度</div>
    <v-progress :percent="percent" :tip="true"/>
    <div>三种配色</div>
    <v-progress :percent="percent"/>
    <v-progress type='warning' :percent="percent"/>
    <v-progress type='error' :percent="percent"/>
</template>
`
code.bar = `
<template>
    <v-button @click='$bar.start()'>显示顶部加载条</v-button>
    <v-button @click='$bar.end()'>进度完成</v-button>
    <v-button @click='$bar.fail()'>进度失败</v-button>
</template>
`

export default code