<template>
  <div id="vui-code-panel">
    <div class="panel">
      <div class="left">
        <div class="desc" ref="desc">
          <slot name="desc"></slot>
        </div>
        <div class="show-style" ref="style">
          <slot></slot>
        </div>
      </div>
      <div class="right">
        <div :style="{height: height}" class="origin-code" :class="{transition}">
          <v-code :code="code" ref="origin"></v-code>
        </div>
        <div class="show-control" @click="show = !show">{{show ? "收起源码" : "展开源码"}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-codepanel",
  props: {
    code: String,
  },
  data() {
    return {
      show: false,
      leftHeight: 0,
      transition: false
    };
  },
  watch: {
    show() {
      this.transition = true;
    },
  },
  mounted() {
    this.leftHeight =
      this.$refs.desc.offsetHeight + this.$refs.style.offsetHeight - 40;
    window.onresize = () => {
      this.leftHeight =
        this.$refs.desc.offsetHeight + this.$refs.style.offsetHeight - 40;
    };
  },
  methods: {},
  computed: {
    height() {
      return (
        (this.show ? this.$refs.origin.$el.offsetHeight : this.leftHeight) +
        "px"
      );
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/codepanel";
</style>