let code = {}
code.base = `
<template>
    <v-nav :list="list" v-model="index"></v-nav>
</template>
<script>
    export default {
        data() {
            return {
                list: [
                    { name: "聊天" },
                    { name: "通讯录" },
                    { name: "发现" },
                    { name: "我的" }
                ],
                index: 0
            };
        }
    }
</script>
`
code.sliderbox = `
<template>
    <div>
        <v-nav :list="list" v-model="index"></v-nav>
        <v-sliderbox v-model="index">
            <v-slider>1</v-slider>
            <v-slider>2</v-slider>
            <v-slider>3</v-slider>
            <v-slider>4</v-slider>
        </v-sliderbox>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [
                    { name: "聊天" },
                    { name: "通讯录" },
                    { name: "发现" },
                    { name: "我的" }
                ],
                index: 0
            }
        }
    }
</script>
`

export default code