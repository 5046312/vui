(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-774447c2"],{"9eb4":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",[a("v-demo",{attrs:{code:e.code.base}},[a("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("开关")]),e._v(" "),a("div",[a("v-switch",{on:{click:function(t){e.value=!e.value}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)]),e._v(" "),a("v-demo",{attrs:{code:e.code.base}},[a("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("开关 颜色")]),e._v(" "),a("div",[a("v-switch",{attrs:{type:"primary"},on:{click:function(t){e.value=!e.value}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),a("v-switch",{attrs:{type:"info"},on:{click:function(t){e.value=!e.value}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),a("v-switch",{attrs:{type:"danger"},on:{click:function(t){e.value=!e.value}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),a("v-switch",{attrs:{type:"success"},on:{click:function(t){e.value=!e.value}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),a("v-switch",{attrs:{type:"error"},on:{click:function(t){e.value=!e.value}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)]),e._v(" "),a("v-demo",{attrs:{code:e.code.base}},[a("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("开关 尺寸")]),e._v(" "),a("div",[a("v-switch",{on:{click:function(t){e.value=!e.value}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),a("v-switch",{attrs:{size:"small"},on:{click:function(t){e.value=!e.value}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)]),e._v(" "),a("v-demo",{attrs:{code:e.code.base}},[a("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("开关 内容")]),e._v(" "),a("div",[a("v-switch",{attrs:{text:"cn"},on:{click:function(t){e.value=!e.value}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),a("v-switch",{attrs:{text:"en"},on:{click:function(t){e.value=!e.value}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),a("v-switch",{attrs:{text:"icon"},on:{click:function(t){e.value=!e.value}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)]),e._v(" "),a("v-demo",{attrs:{code:e.code.base}},[a("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("开关 只读状态")]),e._v(" "),a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("v-switch",{attrs:{readonly:e.readonly},on:{click:function(t){e.value=!e.value}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),a("v-button",{on:{click:function(t){e.readonly=!e.readonly}}},[e._v("切换只读状态")])],1)])],1)},c=[],n=a("e0a3"),v={components:{},data:function(){return{code:n["a"],percent:0,value:!1,readonly:!1}},methods:{}},o=v,u=(a("c470"),a("2877")),s=Object(u["a"])(o,l,c,!1,null,"4b4f0399",null);s.options.__file="switch.vue";t["default"]=s.exports},c470:function(e,t,a){"use strict";var l=a("d317"),c=a.n(l);c.a},d317:function(e,t,a){},e0a3:function(e,t,a){"use strict";var l={base:'\n<template>\n    <div>显示进度</div>\n    <v-progress :percent="percent" :tip="true"/>\n    <div>三种配色</div>\n    <v-progress :percent="percent"/>\n    <v-progress type=\'warning\' :percent="percent"/>\n    <v-progress type=\'error\' :percent="percent"/>\n</template>\n',bar:"\n<template>\n    <v-button @click='$bar.start()'>显示顶部加载条</v-button>\n    <v-button @click='$bar.end()'>进度完成</v-button>\n    <v-button @click='$bar.fail()'>进度失败</v-button>\n</template>\n"};t["a"]=l}}]);
//# sourceMappingURL=chunk-774447c2.50944f8f.js.map