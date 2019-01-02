<template>
  <div id="vui-code">
    <div class="tip">
      <div class="copy" @click="copy">复制代码</div>
    </div>
    <pre v-highlight>
        <code v-text="code.replace('\n', '')" :class="lang" class="code"></code>
    </pre>
  </div>
</template>
<script>
import hljs from "highlight.js";
import Clipboard from "clipboard";
import "highlight.js/styles/googlecode.css";
export default {
  name: "v-code",
  props: {
    lang: {
      default: "auto"
    },
    code: String
  },
  data() {
    return {};
  },
  directives: {
    highlight: {
      inserted: function(el) {
        Array.prototype.forEach.call(
          el.querySelectorAll("code"),
          hljs.highlightBlock
        );
      }
    }
  },
  methods: {
    copy() {
      const clipboard = new Clipboard(".copy", { text: () => this.code });
      clipboard.on("success", e => {
        e.clearSelection();
        clipboard.destroy();
        console.log("代码已复制到剪贴板");
      });
    }
  },
  computed: {}
};
</script>
<style lang="scss">
@import "../../../styles/components/code";
</style>