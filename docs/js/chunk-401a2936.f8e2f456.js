(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-401a2936"],{"0fd3":function(t,s,i){"use strict";var a={base:'\n<template>\n    <v-button @click="showToast">弹出一个Toast</v-button>\n</template>\n<script>\n    export default {\n        methods: {\n            showToast() {\n                this.$toast("弹出一个Toast");\n            }\n        }\n    }\n<\/script>\n'};s["a"]=a},"83d1":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-layout",[i("div",{staticClass:"main-contain"},[i("v-demo",{attrs:{code:t.base}},[i("div",{attrs:{slot:"desc"},slot:"desc"},[i("div",[t._v("水平比例栅格，采用和Bootstrap一致的设定，最多12列，由width属性百分比来进行宽度设置，根据父容器宽度子容器进行适应")]),i("div",[t._v("\n                    栅格包括 父组件\n                    "),i("span",{staticStyle:{color:"blue"}},[t._v("<v-row>")]),t._v(" 列\n                    和 子组件\n                    "),i("span",{staticStyle:{color:"blue"}},[t._v("<v-col>")]),t._v(" 行\n                    组成\n                ")])]),i("div",[i("v-row",{staticClass:"block-bg",attrs:{width:"12"}},[i("v-col",{attrs:{width:"6"}},[i("div",{staticClass:"block blue"},[t._v("width = 6")])]),i("v-col",{attrs:{width:"6"}},[i("div",{staticClass:"block red"},[t._v("width = 6")])])],1)],1)]),i("v-demo",{attrs:{code:t.base}},[i("div",{attrs:{slot:"desc"},slot:"desc"},[i("div",[t._v("v-row组件支持间隔gutter设置，为相邻两v-col组件的px间距")])]),i("div",[i("v-row",{staticClass:"block-bg",attrs:{gutter:"20"}},[i("v-col",{attrs:{width:"4"}},[i("div",{staticClass:"block blue"},[t._v("width = 4")])]),i("v-col",{attrs:{width:"4"}},[i("div",{staticClass:"block blue"},[t._v("width = 4")])]),i("v-col",{attrs:{width:"4"}},[i("div",{staticClass:"block blue"},[t._v("width = 4")])])],1)],1)]),i("v-demo",{attrs:{code:t.base}},[i("div",{attrs:{slot:"desc"},slot:"desc"},[i("div",[t._v("v-row组件支持外边距margin设置，为v-row组件设置px外边距")])]),i("v-row",{staticClass:"block-bg",attrs:{margin:"20"}},[i("v-col",{attrs:{width:"6"}},[i("div",{staticClass:"block blue"},[t._v("width = 6")])]),i("v-col",{attrs:{width:"6"}},[i("div",{staticClass:"block red"},[t._v("width = 6")])])],1)],1),i("v-demo",{attrs:{code:t.base}},[i("div",{attrs:{slot:"desc"},slot:"desc"},[i("div",[t._v("v-row组件支持不同的v-col水平方向对其方式 justify")])]),i("v-row",{staticClass:"block-bg",attrs:{justify:"start"}},[i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block blue"},[t._v("width = 3")])]),i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block red"},[t._v("width = 3")])]),i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block blue"},[t._v("width = 3")])])],1),i("div",{staticStyle:{height:"20px"}}),i("v-row",{staticClass:"block-bg",attrs:{justify:"end"}},[i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block blue"},[t._v("width = 3")])]),i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block red"},[t._v("width = 3")])]),i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block blue"},[t._v("width = 3")])])],1),i("div",{staticStyle:{height:"20px"}}),i("v-row",{staticClass:"block-bg",attrs:{justify:"between"}},[i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block blue"},[t._v("width = 3")])]),i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block red"},[t._v("width = 3")])]),i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block blue"},[t._v("width = 3")])])],1),i("div",{staticStyle:{height:"20px"}}),i("v-row",{staticClass:"block-bg",attrs:{justify:"around"}},[i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block blue"},[t._v("width = 3")])]),i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block red"},[t._v("width = 3")])]),i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block blue"},[t._v("width = 3")])])],1)],1),i("v-demo",{attrs:{code:t.base}},[i("div",{attrs:{slot:"desc"},slot:"desc"},[i("div",[t._v("v-row组件支持不同的v-col垂直方向对其方式 align")])]),i("v-row",{staticClass:"block-bg",attrs:{align:"top"}},[i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block blue",staticStyle:{height:"100px"}},[t._v("width = 3")])]),i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block red",staticStyle:{height:"40px"}},[t._v("width = 3")])]),i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block blue",staticStyle:{height:"70px"}},[t._v("width = 3")])])],1),i("div",{staticStyle:{height:"20px"}}),i("v-row",{staticClass:"block-bg",attrs:{align:"center"}},[i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block blue",staticStyle:{height:"100px"}},[t._v("width = 3")])]),i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block red",staticStyle:{height:"40px"}},[t._v("width = 3")])]),i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block blue",staticStyle:{height:"70px"}},[t._v("width = 3")])])],1),i("div",{staticStyle:{height:"20px"}}),i("v-row",{staticClass:"block-bg",attrs:{align:"bottom"}},[i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block blue",staticStyle:{height:"100px"}},[t._v("width = 3")])]),i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block red",staticStyle:{height:"40px"}},[t._v("width = 3")])]),i("v-col",{attrs:{width:"3"}},[i("div",{staticClass:"block blue",staticStyle:{height:"70px"}},[t._v("width = 3")])])],1),i("div",{staticStyle:{height:"20px"}})],1),i("v-demo",{attrs:{code:t.base}},[i("div",{attrs:{slot:"desc"},slot:"desc"},[i("div",[t._v("v-col组件支持排序。order小的排在前")])]),i("v-row",{staticClass:"block-bg"},[i("v-col",{attrs:{width:"3",order:"4"}},[i("div",{staticClass:"block blue"},[t._v("0,order 4")])]),i("v-col",{attrs:{width:"3",order:"3"}},[i("div",{staticClass:"block red"},[t._v("1,order 3")])]),i("v-col",{attrs:{width:"3",order:"2"}},[i("div",{staticClass:"block blue"},[t._v("2,order 2")])]),i("v-col",{attrs:{width:"3",order:"1"}},[i("div",{staticClass:"block red"},[t._v("3,order 1")])])],1)],1),i("v-demo",{attrs:{code:t.base}},[i("div",{attrs:{slot:"desc"},slot:"desc"},[i("div",[t._v("v-col组件支持相对左侧偏移量，offset值仍为所占份数")])]),i("v-row",{staticClass:"block-bg"},[i("v-col",{attrs:{width:"4",offset:"1"}},[i("div",{staticClass:"block blue"},[t._v("width=4 offet=1")])]),i("v-col",{attrs:{width:"3",offset:"1"}},[i("div",{staticClass:"block red"},[t._v("width=3 offet=1")])])],1),i("div",{staticStyle:{height:"20px"}}),i("v-row",{staticClass:"block-bg"},[i("v-col",{attrs:{width:"4",offset:"6"}},[i("div",{staticClass:"block blue"},[t._v("width=4 offet=6")])])],1),i("div",{staticStyle:{height:"20px"}}),i("v-row",{staticClass:"block-bg"},[i("v-col",{attrs:{width:"4",offset:"8"}},[i("div",{staticClass:"block blue"},[t._v("width=4 offet=8")])])],1)],1)],1)])},l=[],c=i("0fd3"),o={components:{},data:function(){return{base:c["a"].base}},methods:{showToast:function(){this.$toast("弹出一个Toast")}}},d=o,v=(i("d6e3"),i("2877")),e=Object(v["a"])(d,a,l,!1,null,"3113d48d",null);e.options.__file="grid.vue";s["default"]=e.exports},d6e3:function(t,s,i){"use strict";var a=i("faf7"),l=i.n(a);l.a},faf7:function(t,s,i){}}]);
//# sourceMappingURL=chunk-401a2936.f8e2f456.js.map