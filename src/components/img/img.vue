<template>
    <div class="vui-img" :class="{thumb: this.thumb}" :style="thumbStyle">
        <div class="img" :style="imgStyle"/>
        <div class="text">{{text}}</div>
    </div>
</template>
<script>
export default {
    name: "v-img",
    props: {
        src: String,
        height: String,
        width: String,
        text: String,
        radius: String,
        cover: {
            default: false
        },
        position: {
            default: "center"
        },
        // 缩略图
        thumb: {
            default: false
        }
    },
    data() {
        return {};
    },

    methods: {},
    computed: {
        thumbStyle() {
            const style = {};
            if (this.thumb) style.borderRadius = "4px";
            if (this.height) style.height = this.height;
            if (this.width) style.width = this.width;
            return style;
        },
        imgStyle() {
            const style = {};
            style.backgroundPosition = this.position;
            style.backgroundImage = "url(" + this.src + ")";
            style.backgroundSize = "100% 100%";
            if (this.height) style.height = this.height;
            if (this.width) style.width = this.width;
            if (this.radius && !this.thumb) style.borderRadius = this.radius;
            if (this.cover) style.backgroundSize = "cover";
            return style;
        }
    }
};
</script>