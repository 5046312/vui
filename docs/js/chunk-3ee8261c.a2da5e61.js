(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ee8261c"],{"0fd3":function(t,e,n){"use strict";var o={base:'\n<template>\n    <v-button @click="showToast">弹出一个Toast</v-button>\n</template>\n<script>\n    export default {\n        methods: {\n            showToast() {\n                this.$toast.show("弹出一个Toast");\n            }\n        }\n    }\n<\/script>\n',time:'\n<template>\n    <v-button @click="showTime">5s后自动关闭</v-button>\n</template>\n<script>\n    export default {\n        methods: {\n            showTime() {\n                this.$toast.show("5s后自动关闭", 5000);\n            }\n        }\n    }\n<\/script>\n'};e["a"]=o},"171e":function(t,e,n){"use strict";var o=n("5009"),a=n.n(o);a.a},4061:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-demo",[n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("Tip 提示 共12种place情况")]),t._v(" "),n("div",[n("div",{staticClass:"top"},[n("v-tip",{attrs:{content:"top left place",place:"top left"}},[n("v-button",[t._v("上左")])],1),t._v(" "),n("v-tip",{attrs:{content:"top place",place:"top"}},[n("v-button",[t._v("  上  ")])],1),t._v(" "),n("v-tip",{attrs:{content:"top right place",place:"top right"}},[n("v-button",[t._v("上右")])],1)],1),t._v(" "),n("div",{staticClass:"center"},[n("div",{staticClass:"left"},[n("v-tip",{attrs:{content:"left top place<br>new line",place:"left top"}},[n("v-button",[t._v("左上")])],1),t._v(" "),n("v-tip",{attrs:{content:"left place<br>new line",place:"left"}},[n("v-button",[t._v("  左  ")])],1),t._v(" "),n("v-tip",{attrs:{content:"left bottom place<br>new line",place:"left bottom"}},[n("v-button",[t._v("左下")])],1)],1),t._v(" "),n("div",{staticClass:"right"},[n("v-tip",{attrs:{content:"right top place<br>new line<br>new line",place:"right top"}},[n("v-button",[t._v("右上")])],1),t._v(" "),n("v-tip",{attrs:{content:"right place<br>new line<br>new line",place:"right"}},[n("v-button",[t._v("  右  ")])],1),t._v(" "),n("v-tip",{attrs:{content:"right bottom place<br>new line<br>new line",place:"right bottom"}},[n("v-button",[t._v("右下")])],1)],1)]),t._v(" "),n("div",{staticClass:"bottom"},[n("v-tip",{attrs:{content:"bottom left place",place:"bottom left"}},[n("v-button",[t._v("下左")])],1),t._v(" "),n("v-tip",{attrs:{content:"bottom place",place:"bottom"}},[n("v-button",[t._v("  下  ")])],1),t._v(" "),n("v-tip",{attrs:{content:"bottom right place",place:"bottom right"}},[n("v-button",[t._v("下右")])],1)],1)])])],1)},a=[],s=n("0fd3"),i={components:{},data:function(){return{code:s["a"],msg:"这是一个普通的tip提示"}},methods:{showToast:function(){this.$toast.show("弹出一个Toast")},showTime:function(){this.$toast.show("弹出一个Toast",5e3)}}},c=i,l=(n("171e"),n("2877")),p=Object(l["a"])(c,o,a,!1,null,"0a9b3496",null);p.options.__file="tip.vue";e["default"]=p.exports},5009:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3ee8261c.a2da5e61.js.map