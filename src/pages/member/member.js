import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import member from './components/member.vue'
import address from './components/address.vue'
import all from './components/all.vue'
import form from './components/form.vue'

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
        component: all,
    }, {
        path: 'form',
        component: require('./components/form').default
    }]
}]
console.log(require('./components/form'));
console.log(form);
// route 实例
let router = new Router({
    routes
})

// 找到挂载点、根组件的注入
new Vue({
    el: '#app',
    router
})
