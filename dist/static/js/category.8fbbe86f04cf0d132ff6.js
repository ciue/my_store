webpackJsonp([6],{"/cb1":function(t,s){},"035s":function(t,s){},Hwmd:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("035s"),n=(e.n(a),e("igmb")),r=(e.n(n),e("7+uW")),o=e("mtWM"),i=e.n(o),c=e("TFhR"),d=e("n7YN");new r.default({el:"#app",data:{rootLists:null,rankLists:{hotGoods:null,hotKeywords:null,hotShops:null},subLists:{brandLists:null,categoryLists:null},rootIndex:0},created:function(){this.getRootLists(),this.getSubData("rankData","rankLists"),this.getSubData("sublists","subLists")},methods:{getSubData:function(t,s){var e=this;i.a.get(c.a[t]).then(function(t){e[s]=t.data.data})},getRootLists:function(){var t=this;i.a.get(c.a.rootlists).then(function(s){t.rootLists=s.data.categoryTab})},getSubLists:function(t,s){var e=this;this.rootIndex=t,(t=0)?this.getRootLists():i.a.get(c.a.sublists).then(function(t){return e.subLists=t.data.data})},toSearch:function(t){location.href="search.html?keyword="+t.name+"&cate_id="+t.id}},components:{Footnav:d.a}})},TFhR:function(t,s,e){"use strict";var a={hotlist:"/index/hotlist",carousel:"/index/carousel",rootlists:"/category/rootlists",rankData:"/category/rank",sublists:"/category/sublists",searchLists:"/search/lists",gooddetails:"goods/details",dealLists:"/goods/deal",cartLists:"/cart/lists",addCart:"/cart/add",cartReduce:"/cart/reduce",changeNum:"/cart/changeNum",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressLists:"/address/lists",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var n in a)a.hasOwnProperty(n)&&(a[n]="http://rap2api.taobao.org/app/mock/3756/GET/"+a[n]);s.a=a},igmb:function(t,s){},n7YN:function(t,s,e){"use strict";var a=[{name:"首页",icon:"icon-home",href:"index.html",id:0},{name:"分类",icon:"icon-category",href:"category.html",id:1},{name:"购物车",icon:"icon-cart",href:"cart.html",id:2},{name:"我",icon:"icon-user",href:"member.html",id:3}],n={data:function(){return{navConfig:a,curIndex:location.search.replace(/^(index=\d)/).substr(-1)||0}}},r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bottom-nav"},[e("ul",t._l(t.navConfig,function(s,a){return e("li",{key:s.id,class:{active:a==t.curIndex}},[e("a",{attrs:{href:s.href.concat("?index=",a)}},[e("i",{class:s.icon}),e("div",[t._v(t._s(s.name))])])])}))])}]},o=e("VU/8")(n,r,!1,function(t){e("/cb1")},null,null);s.a=o.exports}},["Hwmd"]);
//# sourceMappingURL=category.8fbbe86f04cf0d132ff6.js.map