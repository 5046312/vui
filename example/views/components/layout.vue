<template>
  <v-layout>
    <div style="padding: 50px 100px;">
      <v-codepanel :code="code" desc="基础说明部分">
        <Button>An info prompt</Button>
        <Button type="success">A success prompt</Button>
        <Button type="warning">A warning prompt</Button>
        <Button type="error">An error prompt</Button>
      </v-codepanel>
    </div>
  </v-layout>
</template>
<script>
import code from "@/code/layout";
export default {
  components: {},
  data() {
    return {
      code: code.layout
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
