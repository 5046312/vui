<template>
  <v-layout>
    <div style="padding: 50px 100px;">
      <v-codepanel :code="code" desc="基础说明部分">
        <v-button @click='showToast'>弹出一个Toast</v-button>
      </v-codepanel>
    </div>
  </v-layout>
</template>
<script>
import code from "@/codes/toast";
export default {
  components: {},
  data() {
    return {
      code: code.layout
    };
  },
  methods: {
    showToast(){
      this.$toast("toast")
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
