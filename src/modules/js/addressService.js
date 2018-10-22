import http from 'js/http.js';
import url from 'js/api.js';

class Address {
    static lists() {
        return http.get(url.addressLists)
    }
    static add(inst) {
        return http.get(url.addressAdd, inst)
    }
    static remove(id) {
        return http.get(url.addressRemove, id)
    }
    static update(inst) {
        return http.get(url.addressUpdate, inst)
    }
    static setDefault(id) {
        console.log(http.get(url.addressSetDefault ))
        return http.get(url.addressSetDefault)
    }
}

export default Address
