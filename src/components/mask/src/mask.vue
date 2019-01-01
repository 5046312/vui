<template>
  <div id="vui-mask" :style="{background: color, zIndex: zindex}" @click.stop.prevent="close"></div>
</template>
<script>
export default {
  name: "v-mask",
  data() {
    return {
      opacity: "0.6",
      zindex: 1000,
    };
  },
  computed: {
    color() {
      return `rgba(60, 60, 60, ${this.opacity})`;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/mask";
</style>