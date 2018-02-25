import http from 'js/http.js';
import url from 'js/api.js';

class cart {
    // 修改商品数量
    static changeNum(apiName, good, number) {
        return http.get(url[apiName], {
            id: good,
            number: number,
        })
    }
}

export default cart
