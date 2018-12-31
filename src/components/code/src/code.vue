<template>
  <div class="vui-code">
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
import Clipboard from "Clipboard";
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
@import "../../../styles/common/var";
.vui-code {
  padding: 0;
  margin: 0;
  display: flex;
  position: relative;

  .tip{
      position: absolute;
      top: 0;
      right: 0;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-section,
  .hljs-title,
  .hljs-name,
  .hljs-tag {
    color: #4dabf7;
  }

  .hljs {
    display: block;
    overflow-x: auto;
    color: $font;
    -webkit-text-size-adjust: none;
  }
  .hljs-doctype {
    color: #999;
  }
  .hljs-attribute {
    color: #e96900;
  }
  .hljs-value {
    color: #42b983;
  }
  .hljs-keyword {
    color: #e96900;
  }
  .hljs-string {
    color: #42b983;
  }
  .hljs-comment {
    color: #b3b3b3;
  }
  .hljs-operator .hljs-comment {
    color: #525252;
  }
  .hljs-regexp {
    color: #af7dff;
  }
  .hljs-built_in {
    color: #2db7f5;
  }
  .css .hljs-class {
    color: #e96900;
  }
  .css .hljs-number,
  .javascript .hljs-number {
    color: #fc1e70;
  }
  .css .hljs-attribute {
    color: #af7dff;
  }
  .css .hljs-important {
    color: red;
  }
  .actionscript .hljs-literal,
  .javascript .hljs-literal {
    color: #fc1e70;
  }
  pre {
    padding: 20px;
    margin: 0;
    display: flex;
  }
  code {
    display: inline-block;
    font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
    margin: 0 3px;
    padding: 1px 5px;
    border-radius: 3px;
    color: $font;
    background: none;
    margin: 0;
    padding: 0;
  }
}
</style>