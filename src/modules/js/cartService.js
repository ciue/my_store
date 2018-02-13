import fetch from 'js/fetch.js';
import url from 'js/api.js';

class cart {
    // 修改商品数量
    static changeNum(apiName, good, number) {
        return fetch(url[apiName], {
            id: good,
            number: number,
        })
    }
}

export default cart
