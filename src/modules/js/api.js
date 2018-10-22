const url = {
    hotlist: '/index/hotlist',
    carousel: '/index/carousel',
    rootlists: '/category/rootlists',
    rankData: '/category/rank',
    sublists: '/category/sublists',
    searchLists: '/search/lists',
    gooddetails: '/goods/details',
    dealLists: '/goods/deal',
    cartLists: '/cart/lists',
    addCart: '/cart/add',
    cartReduce: '/cart/reduce',
    changeNum: '/cart/changeNum',
    cartRemove: '/cart/remove',
    cartMremove: '/cart/mremove',
    addressLists: '/address/lists',
    addressAdd: '/address/add',
    addressRemove: '/address/remove',
    addressUpdate: '/address/update',
    addressSetDefault: '/address/setDefault'
};

// const host = 'http://rap2api.taobao.org/app/mock/3756/GET/';
const host = 'https://www.easy-mock.com/mock/5bcd99ebeed633374f5387f6/store';

for (const key in url) {
    if (url.hasOwnProperty(key)) {
        url[key] = host + url[key];
    }
}

export default url;
