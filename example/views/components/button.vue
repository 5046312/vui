<template>
  <v-layout>
    <div style="padding: 50px 100px;">
      <v-codepanel :code="code">
        <div slot="desc">
          基础说明部分
        </div>
        <div class='buttonWrap'>
            <v-button>Default</v-button>
            <v-button type="primary">Primary</v-button>
            <v-button type="danger">Danger</v-button>
            <v-button type="warning">Warning</v-button>
            <v-button type="success">Success</v-button>
            <v-button type="error">Error</v-button>
            <v-button type="disable">Disable</v-button>
        </div>
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
  }
};
</script>
<style lang="scss" scoped>
.buttonWrap{
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: -10px;
    button{
      margin-bottom: 10px;
    }
}
</style>
