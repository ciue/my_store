import './member.css'

import Vue from 'vue'
import router from './router/index.js'
import store from './vuex/index.js'

// 找到挂载点、根组件的注入
new Vue({
    el: '#app',
    router,
    store
})
