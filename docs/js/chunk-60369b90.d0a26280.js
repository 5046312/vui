(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60369b90"],{"05b5":function(t,e,n){},"93f4":function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-demo",{attrs:{code:t.code.base}},[n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("标签")]),n("div",[n("v-bread",{attrs:{list:t.list},on:{click:t.clickBread}})],1)])],1)},r=[],o=n("e0a3"),a={components:{},data:function(){return{code:o["a"],list:[{icon:"ios-home",text:"首页",active:!0},{icon:"",text:"文章",active:!1},{text:"新增"}]}},methods:{clickBread:function(t){console.log(t)}}},i=a,s=(n("bb9b"),n("2877")),b=Object(s["a"])(i,c,r,!1,null,"4882642b",null);b.options.__file="bread.vue";e["default"]=b.exports},bb9b:function(t,e,n){"use strict";var c=n("05b5"),r=n.n(c);r.a},e0a3:function(t,e,n){"use strict";var c={base:'\n<template>\n    <div>显示进度</div>\n    <v-progress :percent="percent" :tip="true"/>\n    <div>三种配色</div>\n    <v-progress :percent="percent"/>\n    <v-progress type=\'warning\' :percent="percent"/>\n    <v-progress type=\'error\' :percent="percent"/>\n</template>\n',bar:"\n<template>\n    <v-button @click='$bar.start()'>显示顶部加载条</v-button>\n    <v-button @click='$bar.end()'>进度完成</v-button>\n    <v-button @click='$bar.fail()'>进度失败</v-button>\n</template>\n"};e["a"]=c}}]);
//# sourceMappingURL=chunk-60369b90.d0a26280.js.map