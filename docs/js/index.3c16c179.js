(function(t){function e(e){for(var a,i,r=e[0],u=e[1],s=e[2],l=0,f=[];l<r.length;l++)i=r[l],o[i]&&f.push(o[i][0]),o[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,i=1;i<n.length;i++){var r=n[i];0!==o[r]&&(a=!1)}a&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},i={index:0},o={index:0},c=[];function r(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-0b848684":"53d17066","chunk-0d362c26":"c3b5ef0c","chunk-0de7a442":"3eef3190","chunk-14b83b37":"4ce2acbb","chunk-16392eee":"4102c430","chunk-20bf4772":"10e4e34d","chunk-211b93e3":"209e9b07","chunk-2d0d32fe":"72c37353","chunk-3ca4a95a":"51cb89a0","chunk-401a2936":"f8e2f456","chunk-4ea41a34":"38787082","chunk-4f4a1ce2":"7a8a4c8f","chunk-56fc0ef2":"934211ff","chunk-5d35c25e":"b53b33df","chunk-8638266a":"0427d0b6","chunk-9b132f20":"67f0a714","chunk-9dbb1ace":"0d4b7fd2","chunk-a31cb99e":"4878406a","chunk-afcfa962":"6d2f4994","chunk-bfa40998":"acb6b984","chunk-d754a256":"690f8e70","chunk-ea3f5182":"580ce1d5"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-0b848684":1,"chunk-0d362c26":1,"chunk-0de7a442":1,"chunk-14b83b37":1,"chunk-16392eee":1,"chunk-20bf4772":1,"chunk-211b93e3":1,"chunk-3ca4a95a":1,"chunk-401a2936":1,"chunk-4ea41a34":1,"chunk-4f4a1ce2":1,"chunk-56fc0ef2":1,"chunk-5d35c25e":1,"chunk-8638266a":1,"chunk-9b132f20":1,"chunk-9dbb1ace":1,"chunk-a31cb99e":1,"chunk-afcfa962":1,"chunk-bfa40998":1,"chunk-d754a256":1,"chunk-ea3f5182":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0b848684":"0e433876","chunk-0d362c26":"0e433876","chunk-0de7a442":"825797f0","chunk-14b83b37":"0e433876","chunk-16392eee":"d95b6663","chunk-20bf4772":"0e433876","chunk-211b93e3":"cd5fff5c","chunk-2d0d32fe":"31d6cfe0","chunk-3ca4a95a":"02815a37","chunk-401a2936":"dcbd7ceb","chunk-4ea41a34":"0e433876","chunk-4f4a1ce2":"0e433876","chunk-56fc0ef2":"0e433876","chunk-5d35c25e":"0e433876","chunk-8638266a":"0e433876","chunk-9b132f20":"0e433876","chunk-9dbb1ace":"0e433876","chunk-a31cb99e":"717b1eb6","chunk-afcfa962":"0e433876","chunk-bfa40998":"0e433876","chunk-d754a256":"0e433876","chunk-ea3f5182":"0e433876"}[t]+".css",o=u.p+a,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var s=c[r],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(r=0;r<f.length;r++){s=f[r],l=s.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.request=a,delete i[t],d.parentNode.removeChild(d),n(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){i[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=r(t),s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");c.type=a,c.request=i,n[1](c)}o[t]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("e35a")},"13f4":function(t,e,n){},"14e7":function(t,e,n){},"196e":function(t,e,n){},"1ab1":function(t,e,n){"use strict";var a=n("4fdc"),i=n.n(a);i.a},"1d3d":function(t,e,n){"use strict";var a=n("423f"),i=n.n(a);i.a},"26ac":function(t,e,n){},2890:function(t,e,n){"use strict";var a=n("5c61"),i=n.n(a);i.a},"372e":function(t,e,n){"use strict";var a=n("dd8a"),i=n.n(a);i.a},"3a32":function(t,e,n){},4001:function(t,e,n){"use strict";var a=n("6b6b"),i=n.n(a);i.a},"423f":function(t,e,n){},4371:function(t,e,n){"use strict";var a=n("13f4"),i=n.n(a);i.a},"467f":function(t,e,n){},"47ab":function(t,e,n){"use strict";var a=n("6f02"),i=n.n(a);i.a},"4fdc":function(t,e,n){},"509b":function(t,e,n){"use strict";var a=n("467f"),i=n.n(a);i.a},5186:function(t,e,n){"use strict";var a=n("cc8f"),i=n.n(a);i.a},"5c61":function(t,e,n){},"5cb6":function(t,e,n){},"603a":function(t,e,n){},"628b":function(t,e,n){"use strict";var a=n("603a"),i=n.n(a);i.a},"68dc":function(t,e,n){"use strict";n.d(e,"b",function(){return c});var a=n("8c4f"),i=n("2b0e"),o=n("fceb");i["a"].use(a["a"]);var c={intro:{title:"欢迎",children:[{meta:{title:"介绍"},path:"introduce",component:function(){return n.e("chunk-20bf4772").then(n.bind(null,"ac1b"))}},{meta:{title:"安装"},path:"install",component:function(){return n.e("chunk-16392eee").then(n.bind(null,"deb1"))}},{meta:{title:"感谢"},path:"grateful",component:function(){return n.e("chunk-afcfa962").then(n.bind(null,"1c39"))}}]},layout:{title:"布局管理",children:[{meta:{title:"布局"},path:"layout",component:function(){return n.e("chunk-0b848684").then(n.bind(null,"6750"))}},{meta:{title:"栅格"},path:"grid",component:function(){return n.e("chunk-401a2936").then(n.bind(null,"83d1"))}},{meta:{title:"段落"},path:"paragraph",component:function(){return n.e("chunk-5d35c25e").then(n.bind(null,"f94a"))}}]},basic:{title:"基础控件",children:[{meta:{title:"图标"},path:"icon",component:function(){return n.e("chunk-a31cb99e").then(n.bind(null,"dc83"))}},{meta:{title:"按钮"},path:"button",component:function(){return n.e("chunk-3ca4a95a").then(n.bind(null,"ff1f"))}},{meta:{title:"进度"},path:"progress",component:function(){return n.e("chunk-ea3f5182").then(n.bind(null,"20ff"))}},{meta:{title:"标签"},path:"tag",component:function(){return n.e("chunk-3ca4a95a").then(n.bind(null,"ff1f"))}},{meta:{title:"多选"},path:"select",component:function(){return n.e("chunk-3ca4a95a").then(n.bind(null,"ff1f"))}},{meta:{title:"单选"},path:"radio",component:function(){return n.e("chunk-3ca4a95a").then(n.bind(null,"ff1f"))}},{meta:{title:"面包屑"},path:"bread",component:function(){return n.e("chunk-3ca4a95a").then(n.bind(null,"ff1f"))}},{meta:{title:"图片"},path:"picture",component:function(){return n.e("chunk-3ca4a95a").then(n.bind(null,"ff1f"))}},{meta:{title:"多级标题"},path:"title",component:function(){return n.e("chunk-3ca4a95a").then(n.bind(null,"ff1f"))}},{meta:{title:"分割线"},path:"hr",component:function(){return n.e("chunk-d754a256").then(n.bind(null,"2a8c"))}}]},form:{title:"表单",children:[{meta:{title:"输入框"},path:"input",component:function(){return n.e("chunk-3ca4a95a").then(n.bind(null,"ff1f"))}}]},common:{title:"常用",children:[{meta:{title:"过渡"},path:"transition",component:function(){return n.e("chunk-9dbb1ace").then(n.bind(null,"b22f"))}},{meta:{title:"遮罩"},path:"mask",component:function(){return n.e("chunk-4f4a1ce2").then(n.bind(null,"7926"))}},{meta:{title:"吐司"},path:"toast",component:function(){return n.e("chunk-4ea41a34").then(n.bind(null,"2a92"))}},{meta:{title:"警告"},path:"alert",component:function(){return n.e("chunk-bfa40998").then(n.bind(null,"11c3"))}},{meta:{title:"加载"},path:"loading",component:function(){return n.e("chunk-0d362c26").then(n.bind(null,"7b8e"))}},{meta:{title:"确认"},path:"confirm",component:function(){return n.e("chunk-56fc0ef2").then(n.bind(null,"9d5b"))}},{meta:{title:"模态框"},path:"modal",component:function(){return n.e("chunk-8638266a").then(n.bind(null,"5d2b"))}},{meta:{title:"滚动监听"},path:"scrollspy",component:function(){return n.e("chunk-14b83b37").then(n.bind(null,"0aec"))}},{meta:{title:"回到顶部"},path:"top",component:function(){return n.e("chunk-211b93e3").then(n.bind(null,"a748"))}}]}},r=new a["a"]({mode:"hash",routes:[{path:"/",component:function(){return n.e("chunk-9b132f20").then(n.bind(null,"55b6"))}},{path:"/intro",component:function(){return n.e("chunk-0de7a442").then(n.bind(null,"c12e"))},redirect:"intro/introduce",children:c.intro.children},{path:"/basic",component:function(){return n.e("chunk-0de7a442").then(n.bind(null,"c12e"))},redirect:"basic/icon",children:c.basic.children},{path:"/layout",component:function(){return n.e("chunk-0de7a442").then(n.bind(null,"c12e"))},redirect:"layout/button",children:c.layout.children},{path:"/common",component:function(){return n.e("chunk-0de7a442").then(n.bind(null,"c12e"))},redirect:"common/mask",children:c.common.children},{path:"*",component:function(){return n.e("chunk-2d0d32fe").then(n.bind(null,"5c60"))}}]});r.beforeEach(function(t,e,n){o["a"].$bar.start(),n()}),r.afterEach(function(){o["a"].$bar.end()}),e["a"]=r},"6b48":function(t,e,n){},"6b6b":function(t,e,n){},"6d3b":function(t,e,n){"use strict";var a=n("6b48"),i=n.n(a);i.a},"6f02":function(t,e,n){},7067:function(t,e,n){"use strict";var a=n("196e"),i=n.n(a);i.a},"714a":function(t,e,n){"use strict";var a=n("efbd"),i=n.n(a);i.a},"91ba":function(t,e,n){"use strict";var a=n("e467"),i=n.n(a);i.a},a59f:function(t,e,n){"use strict";var a=n("c6d1"),i=n.n(a);i.a},adcf:function(t,e,n){},ae00:function(t,e,n){"use strict";var a=n("14e7"),i=n.n(a);i.a},c6d1:function(t,e,n){},c913:function(t,e,n){"use strict";var a=n("3a32"),i=n.n(a);i.a},cc8f:function(t,e,n){},cde5:function(t,e,n){"use strict";var a=n("26ac"),i=n.n(a);i.a},dd8a:function(t,e,n){},e35a:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c={created:function(){}},r=c,u=(n("a59f"),n("2877")),s=Object(u["a"])(r,i,o,!1,null,null,null);s.options.__file="App.vue";var l=s.exports,f=n("fceb"),d=n("68dc"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vui-code"},[n("div",{staticClass:"tip"},[n("div",{staticClass:"copy",on:{click:t.copy}},[t._v("复制代码")])]),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("        "),n("code",{staticClass:"code",class:t.lang,domProps:{textContent:t._s(t.code.replace("\n",""))}},[t._v("\n        ")]),t._v("\n    ")])])},p=[],m=(n("ac6a"),n("1487")),v=n.n(m),b=n("b311"),g=n.n(b),_=(n("eba2"),{name:"v-code",props:{lang:{default:"auto"},code:{default:""}},data:function(){return{}},directives:{highlight:{inserted:function(t){Array.prototype.forEach.call(t.querySelectorAll("code"),v.a.highlightBlock)}}},methods:{copy:function(){var t=this,e=new g.a(".copy",{text:function(){return t.code}});e.on("success",function(n){n.clearSelection(),e.destroy(),t.$toast("已复制代码")})}},computed:{}}),k=_,y=(n("47ab"),Object(u["a"])(k,h,p,!1,null,null,null));y.options.__file="index.vue";var w=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vui-demo"}},[n("div",{staticClass:"panel"},[n("div",{staticClass:"left"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.$slots.desc,expression:"$slots.desc"}],ref:"desc",staticClass:"desc"},[t._t("desc")],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.$slots.default,expression:"$slots.default"}],ref:"style",staticClass:"show-style"},[t._t("default")],2)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.code,expression:"code"}],staticClass:"right",class:{transition:t.transition},style:{height:t.height}},[n("div",{staticClass:"origin-code"},[n("v-code",{ref:"origin",class:{allHeight:t.leftHeighter},attrs:{code:t.code}})],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.code,expression:"code"}],staticClass:"show-control",on:{click:function(e){t.show=!t.show}}},[t._v(t._s(t.show?"Talk is cheap":"Show me the code"))])])])},$=[],C={props:{code:{default:""}},data:function(){return{show:!1,leftHeight:0,leftHeighter:!1,transition:!1}},watch:{show:function(){this.transition=!0}},mounted:function(){this.leftHeight=this.$refs.desc.offsetHeight+this.$refs.style.offsetHeight-40,this.leftHeighter=this.leftHeight>this.$refs.origin.$el.offsetHeight},methods:{},computed:{height:function(){return this.show?this.leftHeighter?this.leftHeight+"px":this.originHeight+"px":this.leftHeight+"px"},originHeight:function(){return this.$refs.origin.$el.offsetHeight}}},T=C,E=(n("6d3b"),Object(u["a"])(T,x,$,!1,null,"60814dbd",null));E.options.__file="index.vue";var j=E.exports;a["a"].use(f["a"]),a["a"].component("v-code",w),a["a"].component("v-demo",j),a["a"].config.productionTip=!1,new a["a"]({router:d["a"],render:function(t){return t(l)}}).$mount("#app")},e365:function(t,e,n){},e467:function(t,e,n){},e712:function(t,e,n){"use strict";var a=n("ee89"),i=n.n(a);i.a},ee89:function(t,e,n){},efbd:function(t,e,n){},f5fc:function(t,e,n){"use strict";var a=n("5cb6"),i=n.n(a);i.a},fceb:function(t,e,n){"use strict";n("7f7f"),n("cadf"),n("551c"),n("097d"),n("adcf");var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"vui-icon",class:t.className})},i=[],o={name:"v-icon",props:{type:String},data:function(){return{}},methods:{},computed:{className:function(){return"vui-"+this.type}}},c=o,r=(n("4371"),n("2877")),u=Object(r["a"])(c,a,i,!1,null,"cf371f0e",null);u.options.__file="icon.vue";var s=u.exports,l=s,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vui-button",class:t.type,on:{click:function(e){t.$emit("click")}}},[t._t("default")],2)},d=[],h={name:"v-button",props:{type:{default:"default"}}},p=h,m=(n("509b"),Object(r["a"])(p,f,d,!1,null,"a3d2ddac",null));m.options.__file="button.vue";var v=m.exports,b=v,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vui-group"},[t._t("default")],2)},_=[],k={name:"v-group",props:{direction:{default:"default"}}},y=k,w=(n("ae00"),Object(r["a"])(y,g,_,!1,null,"69989dfa",null));w.options.__file="group.vue";var x=w.exports,$=x,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vui-layout"},[t._t("header"),n("div",{staticClass:"content"},[t._t("default")],2),t._t("footer")],2)},T=[],E={name:"v-layout",data:function(){return{}},methods:{},computed:{}},j=E,O=(n("2890"),Object(r["a"])(j,C,T,!1,null,"3d370b20",null));O.options.__file="layout.vue";var N=O.exports,H=N,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vui-row",style:{paddingLeft:t._margin,paddingRight:t._margin,justifyContent:t._flex_content,alignItems:t._align_items}},[t._t("default")],2)},P=[],I={name:"v-row",props:{gutter:{default:0},margin:{default:0},justify:{default:"start"},align:{default:"top"}},data:function(){return{}},methods:{},computed:{_margin:function(){return this.margin+"px"},_flex_content:function(){var t;switch(this.justify){case"end":t="flex-end";break;case"center":t="center";break;case"between":t="space-between";break;case"around":t="space-around";break;default:t="flex-start"}return t},_align_items:function(){var t;switch(this.align){case"center":t="center";break;case"bottom":t="flex-end";break;default:t="flex-start"}return t}}},L=I,A=(n("5186"),Object(r["a"])(L,S,P,!1,null,null,null));A.options.__file="row.vue";var M=A.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{width:t._width,paddingLeft:t.padding,paddingRight:t.padding,order:t.order,marginLeft:t._offset},attrs:{id:"vui-col"}},[t._t("default")],2)},q=[],z={name:"v-col",props:{width:{default:12},order:{default:0},offset:{default:0}},data:function(){return{}},methods:{},computed:{_width:function(){return(this.width/12*100).toFixed(20)+"%"},padding:function(){return this.$parent.gutter/2+"px"},_offset:function(){return(this.offset/12*100).toFixed(20)+"%"}}},R=z,F=(n("cde5"),Object(r["a"])(R,B,q,!1,null,null,null));F.options.__file="col.vue";var J=F.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.name,"enter-active-class":t.enterClassName,"leave-active-class":t.leaveClassName}},[t._t("default")],2)},D=[],G={name:"v-transition",props:{name:{default:"fade"},in:{default:null},out:{default:null},duration:{default:"0.1"}},computed:{enterClassName:function(){return"animated ".concat(this.name,"In vui-transition")},leaveClassName:function(){return"animated ".concat(this.name,"Out vui-transition")}}},K=G,Q=(n("7067"),Object(r["a"])(K,Y,D,!1,null,"5af98962",null));Q.options.__file="transition.vue";var U=Q.exports,V=U,W=n("2b0e"),X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"vui-mask",style:{background:t.color,zIndex:t.zindex},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click","")}}})])},Z=[],tt={name:"v-mask",data:function(){return{opacity:"0.6",zindex:1e3,show:!1}},computed:{color:function(){return"rgba(60, 60, 60, ".concat(this.opacity,")")}},methods:{close:function(){this.show=!1}}},et=tt,nt=(n("714a"),Object(r["a"])(et,X,Z,!1,null,"a7f687e8",null));nt.options.__file="mask.vue";var at,it=nt.exports;function ot(){if(!at){var t=W["a"].extend(it);at=new t({el:document.createElement("div")}),document.body.appendChild(at.$el)}return at}W["a"].prototype.$mask={show:function(){return ot().show=!0},close:function(){return ot().show=!1}};var ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"vui-toast",on:{click:function(e){t.show=!1}}},[n("div",{staticClass:"tip"},[t._v(t._s(t.msg))])])])},rt=[],ut={name:"v-toast",data:function(){return{msg:"",show:!1}},methods:{},computed:{},created:function(){},destroyed:function(){}},st=ut,lt=(n("1d3d"),Object(r["a"])(st,ct,rt,!1,null,"630dbd91",null));lt.options.__file="toast.vue";var ft,dt,ht=lt.exports;function pt(t){if(!ft){var e=W["a"].extend(ht);ft=new e({el:document.createElement("div")}),document.body.appendChild(ft.$el)}return ft.msg=t.msg,ft.duration=t.duration,ft}W["a"].prototype.$toast=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"toast",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"2";pt({msg:t,duration:e}).show=!0,clearTimeout(dt),dt=setTimeout(function(){clearTimeout(dt),ft.show=!1},ft.duration+100)};var mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vui-alert"},[n("div",{staticClass:"tip"},[t._v(t._s(t.msg))])])},vt=[],bt={name:"v-alert",data:function(){return{msg:""}},methods:{},computed:{},created:function(){}},gt=bt,_t=(n("c913"),Object(r["a"])(gt,mt,vt,!1,null,"51b69d5d",null));_t.options.__file="alert.vue";var kt=_t.exports,yt=W["a"].extend(kt),wt=new yt({el:document.createElement("div")});yt.prototype.close=function(){var t=wt.$el;t.parentNode&&t.parentNode.removeChild(t)},W["a"].prototype.$alert=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"toast",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"2";wt.msg=t,wt.duration=e,document.body.appendChild(wt.$el);var n=setTimeout(function(){clearTimeout(n),wt.close()},wt.duration+100)};var xt=n("d4ec"),$t=n("bee2"),Ct=n("ade3"),Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vui-loading"},[n("div",{staticClass:"tip"},[t._v(t._s(t.msg))])])},Et=[],jt={name:"v-loading",data:function(){return{msg:""}},methods:{},computed:{},created:function(){}},Ot=jt,Nt=(n("e712"),Object(r["a"])(Ot,Tt,Et,!1,null,"0bb0ed3d",null));Nt.options.__file="loading.vue";Nt.exports;var Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-transition",{attrs:{name:"fade"}},[t.show?n("div",{attrs:{id:"vui-loading-bar"}},[n("div",{staticClass:"bar",class:t.barClass,style:t.barStyle})]):t._e()])},St=[],Pt={name:"v-loading-bar",props:{barHeight:{default:2}},data:function(){return{loadingTimer:null,endTimer:null,failTImer:null,show:!0,status:"loading",percent:0,height:0}},methods:{start:function(){var t=this;this.show=!0,this.status="loading",this.percent=0,this.height=this.barHeight,this.clearTimer(),this.loadingTimer=setInterval(function(){t.percent+=(90-t.percent)/8*Math.random(),t.percent>90&&clearInterval(t.loadingTimer)},500)},end:function(){var t=this;this.height=this.barHeight,this.show=!0,this.status="success",this.percent=100,this.clearTimer(),this.endTimer=setTimeout(function(){t.show=!1},1e3)},fail:function(){var t=this;this.height=this.barHeight,this.show=!0,this.status="fail",this.percent=100,this.clearTimer(),this.failTimer=setTimeout(function(){t.show=!1},1500)},clearTimer:function(){clearInterval(this.loadingTimer),clearInterval(this.endTimer),clearInterval(this.failTimer)}},computed:{barStyle:function(){return{width:this.percent+"%",height:this.height+"px"}},barClass:function(){return{loading:"loading"==this.status,success:"success"==this.status,fail:"fail"==this.status}}},created:function(){}},It=Pt,Lt=(n("372e"),Object(r["a"])(It,Ht,St,!1,null,"a298e834",null));Lt.options.__file="bar.vue";var At=Lt.exports,Mt=function(){function t(){Object(xt["a"])(this,t),Object(Ct["a"])(this,"instance",null)}return Object($t["a"])(t,[{key:"start",value:function(){t.getInstance().start()}},{key:"to",value:function(e){t.getInstance().percent=e}},{key:"end",value:function(){t.getInstance().end()}},{key:"fail",value:function(){t.getInstance().fail()}}],[{key:"getInstance",value:function(){if(!this.instance){var t=W["a"].extend(At);this.instance=new t({el:document.createElement("div")}),document.body.appendChild(this.instance.$el)}return this.instance}}]),t}(),Bt=new Mt;W["a"].prototype.$bar=Bt;var qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vui-confirm"},[n("div",{staticClass:"tip"},[t._v(t._s(t.msg))])])},zt=[],Rt={name:"v-confirm",data:function(){return{msg:""}},methods:{},computed:{},created:function(){}},Ft=Rt,Jt=(n("f5fc"),Object(r["a"])(Ft,qt,zt,!1,null,"0320d939",null));Jt.options.__file="confirm.vue";var Yt=Jt.exports,Dt=W["a"].extend(Yt),Gt=new Dt({el:document.createElement("div")});Dt.prototype.close=function(){var t=Gt.$el;t.parentNode&&t.parentNode.removeChild(t)},W["a"].prototype.$confirm=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"toast",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"2";Gt.msg=t,Gt.duration=e,document.body.appendChild(Gt.$el);var n=setTimeout(function(){clearTimeout(n),Gt.close()},Gt.duration+100)};var Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vui-modal"},[n("div",{staticClass:"tip"},[t._v(t._s(t.msg))])])},Qt=[],Ut={name:"v-modal",data:function(){return{msg:""}},methods:{},computed:{},created:function(){}},Vt=Ut,Wt=(n("91ba"),Object(r["a"])(Vt,Kt,Qt,!1,null,"66baef28",null));Wt.options.__file="modal.vue";var Xt=Wt.exports,Zt=W["a"].extend(Xt),te=new Zt({el:document.createElement("div")});Zt.prototype.close=function(){var t=te.$el;t.parentNode&&t.parentNode.removeChild(t)},W["a"].prototype.$modal=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"modal",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"2";te.msg=t,te.duration=e,document.body.appendChild(te.$el);var n=setTimeout(function(){clearTimeout(n),te.close()},te.duration+100)};var ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vui-top",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.top(e)}}},[t._t("default")],2)},ne=[],ae={name:"v-top",props:{right:{default:"50"},bottom:{default:"50"},top:{default:0}},data:function(){return{show:!1}},mounted:function(){var t=this;if(0==this.top)this.show=!0;else{var e=this.$el.parentNode;this.show=e.scrollTop>this.top,e.addEventListener("scroll",function(){t.show=e.scrollTop>t.top})}},methods:{back:function(){this.$el.parentNode.scrollTo(0,0)}},computed:{style:function(){return{position:"fixed",right:this.right+"px",bottom:this.bottom+"px"}}}},ie=ae,oe=(n("1ab1"),Object(r["a"])(ie,ee,ne,!1,null,"c8abd34a",null));oe.options.__file="top.vue";var ce=oe.exports,re=ce,ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vui-hr",class:t.className},[n("span",{style:t.spanStyle},[t._t("default")],2)])},se=[],le={name:"v-hr",props:{position:{default:"center"},margin:{default:"10"}},computed:{className:function(){return"vui-hr-"+this.position},spanStyle:function(){return{marginLeft:this.margin+"px",marginRight:this.margin+"px"}}}},fe=le,de=(n("fe44"),Object(r["a"])(fe,ue,se,!1,null,"7ec20162",null));de.options.__file="hr.vue";var he=de.exports,pe=he,me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},ve=[],be={name:"v-srollspy"},ge=be,_e=(n("4001"),Object(r["a"])(ge,me,ve,!1,null,"b9d3a2a4",null));_e.options.__file="scrollspy.vue";var ke=_e.exports,ye=ke,we=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vui-pin",style:t.emptyHeight},[n("div",{ref:"pin",style:t.pinStyle},[t._t("default")],2)])},xe=[],$e={name:"v-pin",props:{top:{default:0},bottom:{default:0}},data:function(){return{pin:!1,pinHeight:0,scrollTop:0,topToParent:0}},mounted:function(){var t=this;this.pinHeight=this.$refs.pin.offsetHeight,this.topToParent=this.$el.style.top;var e=this.$el.parentNode;this.pin=e.scrollTop>this.top,e.addEventListener("scroll",function(){console.log(e.scrollTop,t.topToParent),t.scrollTop=e.scrollTop,t.pin=e.scrollTop>t.top+t.topToParent})},methods:{},computed:{pinStyle:function(){var t=this.pin?this.scrollTop-this.top:0;return{transform:"translateY(".concat(t,"px)")}},emptyHeight:function(){return{height:this.pinHeight+"px"}}}},Ce=$e,Te=(n("628b"),Object(r["a"])(Ce,we,xe,!1,null,"5a0b8820",null));Te.options.__file="pin.vue";var Ee=Te.exports,je=Ee,Oe=function(t){t.component(V.name,V),t.component(l.name,l),t.component(b.name,b),t.component($.name,$),t.component(H.name,H),t.component(M.name,M),t.component(J.name,J),t.component(re.name,re),t.component(pe.name,pe),t.component(ye.name,ye),t.component(je.name,je)};e["a"]={install:Oe,$bar:Bt}},fe44:function(t,e,n){"use strict";var a=n("e365"),i=n.n(a);i.a}});
//# sourceMappingURL=index.3c16c179.js.map