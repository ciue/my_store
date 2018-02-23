import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import member from '../components/member.vue'
import address from '../components/address.vue'
import all from '../components/all.vue'
import form from '../components/form.vue'

let routes = [{
    path: '/',
    component: member
}, {
    path: '/address',
    component: address,
    children: [{
        path: '',
        component: all,
    }, {
        path: 'all',
        name: 'all',
        component: all,
    }, {
        path: 'form',
        name: 'form',
        component: form
    }]
}]

// route 实例
let router = new Router({
    routes,
})

export default router