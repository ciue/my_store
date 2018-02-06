import Vue from 'vue'
import Hammer from 'hammerjs'

Vue.directive('swipeleft', {
    bind: function (el, binding, vnode) {
        vueTouch(el, 'swipeleft', binding, vnode)
    }
})

Vue.directive('swiperight', {
    bind: function (el, binding, vnode) {
        vueTouch(el, 'swiperight', binding, vnode)
    }
})

function vueTouch(el, type, binding, vnode) {
    let fnName = binding.arg
    let args = binding.value
    const callback = vnode.context[fnName]
    const af = new Hammer(el)
    af.on(type,()=>callback(...args))
}
