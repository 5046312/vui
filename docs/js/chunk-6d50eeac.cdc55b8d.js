(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d50eeac"],{"0271":function(t,e,n){},"88a2":function(t,e,n){"use strict";var c=n("0271"),o=n.n(c);o.a},"93f4":function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-demo",{attrs:{code:t.code.base}},[n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("标签")]),t._v(" "),n("div",[n("v-bread",{attrs:{list:t.list},on:{click:t.clickBread}})],1)])],1)},o=[],i={base:"\n<template>\n    <v-bread :list=\"list\" @click=\"clickBread\"/>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            list: [\n                { icon: 'ios-home', text: '首页', active: true},\n                { icon: '', text: '文章', active: false},\n                { text: '新增'},\n            ]\n        }\n    },\n    methods: {\n        // 点击面包屑\n        clickBread(res) {\n            console.log(res)\n        }\n    }\n};\n<\/script>\n"},s=i,a={components:{},data:function(){return{code:s,list:[{icon:"ios-home",text:"首页",active:!0},{icon:"",text:"文章",active:!1},{text:"新增"}]}},methods:{clickBread:function(t){console.log(t)}}},l=a,r=(n("88a2"),n("2877")),d=Object(r["a"])(l,c,o,!1,null,"3d690b14",null);d.options.__file="bread.vue";e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-6d50eeac.cdc55b8d.js.map