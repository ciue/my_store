webpackJsonp([3],{"/cb1":function(t,e){},"035s":function(t,e){},"0mhr":function(t,e){},"97Sy":function(t,e){},TFhR:function(t,e,s){"use strict";var o={hotlist:"/index/hotlist",carousel:"/index/carousel",rootlists:"/category/rootlists",rankData:"/category/rank",sublists:"/category/sublists",searchLists:"/search/lists",gooddetails:"goods/details",dealLists:"/goods/deal",cartLists:"/cart/lists",addCart:"/cart/add",cartReduce:"/cart/reduce",changeNum:"/cart/changeNum",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressLists:"/address/lists",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var n in o)o.hasOwnProperty(n)&&(o[n]="http://rap2api.taobao.org/app/mock/3756/GET/"+o[n]);e.a=o},"U/rD":function(t,e,s){"use strict";e.a={filters:{currency:function(t){var e=""+t;if(e.indexOf(".")>1){var s=e.split(".");return s[0]+"."+(s[1]+"0").substr(0,2)}return e+".00"}}}},n7YN:function(t,e,s){"use strict";var o=[{name:"首页",icon:"icon-home",href:"index.html",id:0},{name:"分类",icon:"icon-category",href:"category.html",id:1},{name:"购物车",icon:"icon-cart",href:"cart.html",id:2},{name:"我",icon:"icon-user",href:"member.html",id:3}],n={data:function(){return{navConfig:o,curIndex:location.search.replace(/^(index=\d)/).substr(-1)||0}}},a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-nav"},[s("ul",t._l(t.navConfig,function(e,o){return s("li",{key:e.id,class:{active:o==t.curIndex}},[s("a",{attrs:{href:e.href.concat("?index=",o)}},[s("i",{class:e.icon}),s("div",[t._v(t._s(e.name))])])])}))])}]},r=s("VU/8")(n,a,!1,function(t){s("/cb1")},null,null);e.a=r.exports},sSMw:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("BO1k"),n=s.n(o),a=(s("97Sy"),s("bCKv")),r=s.n(a),i=(s("035s"),s("0mhr"),s("7+uW")),c=s("mtWM"),d=s.n(c),l=s("n7YN"),u={name:"toTop",data:function(){return{isShow:!1}},mounted:function(){window.addEventListener("scroll",this.scrolling)},methods:{touchmove:function(){window.pageYOffset||document.documentElement.scrollTop>50?this.isShow=!0:this.isShow=!1},goTop:function(){var t=setInterval(function(){var e=window.pageYOffset||document.documentElement.scrollTop,s=Math.ceil(e/5);window.pageYOffset=document.documentElement.scrollTop=e-s,0===e&&clearInterval(t)},20)},scrolling:function(){var t=this;this.scrollFlag||(this.scrollFlag=!0,setTimeout(function(){t.touchmove(),t.scrollFlag=!1},300))}}},h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"isShow"}],staticClass:"go-to-top",on:{click:this.goTop}})},staticRenderFns:[]},f=s("VU/8")(u,h,!1,null,null,null).exports,m=s("TFhR"),v=s("U/rD");i.default.use(r.a);var g=function(t){var e={},s=t.substr(1).split("&"),o=!0,a=!1,r=void 0;try{for(var i,c=n()(s);!(o=(i=c.next()).done);o=!0){var d=i.value,l=d.split("=")[0],u=d.split("=")[1];e[l]=u}}catch(t){a=!0,r=t}finally{try{!o&&c.return&&c.return()}finally{if(a)throw r}}return e}(location.search),p=g.keyword,w=g.cate_id;new i.default({el:"#app",data:{goodsLists:null,loading:!1,allLoaded:!1,pageSize:5,count:0},created:function(){this.getGoodsLists()},methods:{getGoodsLists:function(){var t=this;this.allLoaded||3===this.count||(this.loading=!0,d.a.get(m.a.searchLists+"?keyword="+p+"&id="+w).then(function(e){var s=e.data.lists;s.length<t.pageSize&&(t.allLoaded=!0),t.goodsLists?t.goodsLists=t.goodsLists.concat(s):t.goodsLists=s,t.loading=!1}))}},components:{Footnav:l.a,totop:f},mixins:[v.a]})}},["sSMw"]);
//# sourceMappingURL=search.43e9175a3729e24647bb.js.map