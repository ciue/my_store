import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = [{
    path: '/',
    components: require('./components/member.vue')

}]
// route 实例
let router = new Router({
    routes
})

// 找到挂载点、根组件的注入
new Vue({
  el: '#app',
  router
})
