webpackJsonp([6],{"035s":function(t,e){},AXeS:function(t,e){},Hwmd:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("035s"),n=(s.n(a),s("igmb")),r=(s.n(n),s("7+uW")),o=s("mtWM"),i=s.n(o),c=s("TFhR"),d=s("n7YN");new r.default({el:"#app",data:{rootLists:null,rankLists:{hotGoods:null,hotKeywords:null,hotShops:null},subLists:{brandLists:null,categoryLists:null},rootIndex:0},created:function(){this.getRootLists(),this.getSubData("rankData","rankLists"),this.getSubData("sublists","subLists")},methods:{getSubData:function(t,e){var s=this;i.a.get(c.a[t]).then(function(t){s[e]=t.data.data})},getRootLists:function(){var t=this;i.a.get(c.a.rootlists).then(function(e){t.rootLists=e.data.categoryTab})},getSubLists:function(t,e){var s=this;this.rootIndex=t,(t=0)?this.getRootLists():i.a.get(c.a.sublists).then(function(t){return s.subLists=t.data.data})},toSearch:function(t){location.href="search.html?keyword="+t.name+"&cate_id="+t.id}},components:{Footnav:d.a}})},TFhR:function(t,e,s){"use strict";var a={hotlist:"/index/hotlist",carousel:"/index/carousel",rootlists:"/category/rootlists",rankData:"/category/rank",sublists:"/category/sublists",searchLists:"/search/lists",gooddetails:"/goods/details",dealLists:"/goods/deal",cartLists:"/cart/lists",addCart:"/cart/add",cartReduce:"/cart/reduce",changeNum:"/cart/changeNum",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressLists:"/address/lists",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var n in a)a.hasOwnProperty(n)&&(a[n]="https://www.easy-mock.com/mock/5bcd99ebeed633374f5387f6/store"+a[n]);e.a=a},igmb:function(t,e){},n7YN:function(t,e,s){"use strict";var a=[{name:"首页",icon:"icon-home",href:"index.html",id:0},{name:"分类",icon:"icon-category",href:"category.html",id:1},{name:"购物车",icon:"icon-cart",href:"cart.html",id:2},{name:"我",icon:"icon-user",href:"member.html",id:3}],n={data:function(){return{navConfig:a,curIndex:location.search.replace(/^(index=\d)/).substr(-1)||0}}},r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-nav"},[s("ul",t._l(t.navConfig,function(e,a){return s("li",{key:e.id,class:{active:a==t.curIndex}},[s("a",{attrs:{href:e.href.concat("?index=",a)}},[s("i",{class:e.icon}),s("div",[t._v(t._s(e.name))])])])}))])}]};var o=s("VU/8")(n,r,!1,function(t){s("AXeS")},null,null);e.a=o.exports}},["Hwmd"]);
//# sourceMappingURL=category.2a7b0a962140e04ef0d9.js.map