let code = {}
code.base = `
<template>
    <v-sliderbox style="height: 200px;" v-model="index" :autoplay="3000">
    <v-slider>1</v-slider>
    <v-slider>2</v-slider>
    <v-slider>3</v-slider>
    </v-sliderbox>
</template>
<script>
export default {
    data() {
        return {
            index: 0
        }
    }
};
</script>
`

code.controll = `
<template>
    <v-sliderbox style="height: 200px;" v-model="index" controll>
    <v-slider>1</v-slider>
    <v-slider>2</v-slider>
    <v-slider>3</v-slider>
    </v-sliderbox>
</template>
<script>
export default {
    data() {
        return {
            index: 0
        }
    }
};
</script>
`

code.step = `
<template>
    <v-sliderbox style="height: 200px;" v-model="index" step>
    <v-slider>1</v-slider>
    <v-slider>2</v-slider>
    <v-slider>3</v-slider>
    </v-sliderbox>
</template>
<script>
export default {
    data() {
        return {
            index: 0
        }
    }
};
</script>
`

code.model = `
<template>
    <v-sliderbox style="height: 200px;" v-model="index">
    <v-slider>1</v-slider>
    <v-slider>2</v-slider>
    <v-slider>3</v-slider>
    </v-sliderbox>
</template>
<script>
export default {
    data() {
        return {
            index: 0
        }
    }
};
</script>
`

export default code