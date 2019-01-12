let code = {}
code.base = `
<template>
    <div>正常居中样式</div>
    <v-hr>Vui</v-hr>
    
    <div>靠左样式</div>
    <v-hr position="left">Vui</v-hr>
    
    <div>靠右样式</div>
    <v-hr position="right">Vui</v-hr>

    <div>修改中间部分与两侧的分割线的间隔，50px</div>
    <v-hr margin="50">Vui</v-hr>
</template>
`

export default code