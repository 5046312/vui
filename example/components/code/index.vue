<template>
    <div class="vui-code">
        <div class="tip">
            <div class="copy" @click="copy">复制代码</div>
        </div>
        <pre v-highlight>
            <code v-text="code.replace('\n', '')" :class="lang" class="code">
            </code>
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
            default: "xml"
        },
        code: {
            default: ""
        }
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
                this.$toast("已复制代码");
            });
        }
    },
    computed: {}
};
</script>
<style lang="scss">
@import "@/style/base.scss";
.vui-code {
    padding: 0;
    margin: 0;
    display: flex;
    position: relative;
    .tip {
        position: absolute;
        top: 10px;
        right: 20px;
        // 复制按钮
        .copy {
            border: 1px solid $primary;
            background: #fff;
            font-size: 12px;
            line-height: 20px;
            border-radius: 5px;
            padding: 0 8px;
            cursor: pointer;
            user-select: none;
        }
    }
    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-section,
    .hljs-title,
    .hljs-name,
    .hljs-tag {
        color: $primary;
    }

    .hljs {
        display: block;
        overflow-x: auto;
        color: $font;
        -webkit-text-size-adjust: none;
        padding: 20px;
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
        margin: 0;
        height: 100%;
        display: flex;
        width: 100%;
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