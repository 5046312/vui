<template>
  <div class="vui-code-panel">
    <div class="panel">
      <div class="left" ref="left">
        <div class="desc" v-text="desc" v-if="desc"/>
        <div class="show-style">
          <slot></slot>
        </div>
      </div>
      <div class="right">
        <div :style="{height: height}" class="origin-code">
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
    desc: String
  },
  data() {
    return {
      show: false,
      leftHeight: 0
    };
  },
  watch: {},
  mounted() {
    this.leftHeight = this.$refs.left.offsetHeight - 40;
  },
  methods: {},
  computed: {
    height() {
      return (
        (this.show ? this.$refs.origin.$el.offsetHeight : this.leftHeight) + "px"
      );
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/codepanel";
</style>