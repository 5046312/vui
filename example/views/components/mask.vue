<template>
  <v-layout>
    <div style="padding: 50px 100px;">
      <v-codepanel :code="code">
        <div slot='desc'>
          基础说明部分
        </div>
        <v-button @click='showMask'>弹出一个Mask遮罩</v-button>
      </v-codepanel>
    </div>
  </v-layout>
</template>
<script>
import code from "@/codes/layout";
export default {
  components: {},
  data() {
    return {
      code: code.layout
    };
  },
  methods: {
    showMask() {
      this.$mask(.5, 999)
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
