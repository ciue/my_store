const url = {
  hotlist: '/index/hotlist',
  carousel:'/index/carousel',
  rootlists:'/category/rootlists',
  rankData:'/category/rank',
  sublists:'/category/sublists',
  searchLists: '/search/lists',
  gooddetails: 'goods/details',
  dealLists:'/goods/deal',
  addCart: '/cart/add'
};
const host = 'http://rap2api.taobao.org/app/mock/3756/GET/';

for (const key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key];
  }
}

export default url;
