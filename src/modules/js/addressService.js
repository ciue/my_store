import fetch from 'js/fetch.js';
import url from 'js/api.js';

class Address {
    static lists() {
        return fetch(url.addressLists)
    }
    static add(inst) {
        return fetch(url.addressAdd, inst)
    }
    static remove(id) {
        return fetch(url.addressRemove, id)
    }
    static update(inst) {
        return fetch(url.addressUpdate, inst)
    }
    static setDefault(id) {
        return fetch(url.addressSetDefault, )
    }
}

export default Address
