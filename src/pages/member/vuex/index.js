import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

import Address from 'js/addressService.js'

const store = new Vuex.Store({
  state: {
    lists: null    
  },
  mutations: {
    init(state, lists) {
      state.lists = lists
    },
    add(state, inst) {
      // 假装后台传回了 inst
      inst.id = Math.floor(Math.random()*1000000)
      state.lists.push(inst)
    },
    remove(state, id) {
      let index = state.lists.findIndex( item => item.id == id )
      state.lists.splice(index,1)
    },
    update(state, inst) {
      let lists = JSON.parse(JSON.stringify(state.lists))
      let index = lists.findIndex( item => item.id == inst.id)
      lists[index] = inst
      state.lists = lists
    },
    setDefaultAdd(state, id) {
      state.lists.forEach( item => {
        item.isDefault = item.id == id ? true : false
      })
    }
  },
  actions: {
    getLists({commit}) {
      Address.lists().then( res => {
        commit('init', res.data.lists)
      }) 
    },
    addInst({commit}, inst) {
      Address.add(inst).then(res => commit('add', inst))
    },
    removeInst({commit}, id) {
      Address.remove(id).then( res => commit('remove', id))
    },
    updateInst({commit}, inst) {
      Address.update(inst).then( res => commit('update', inst))
    },
    setDefault({commit}, id) {
      Address.setDefault(id).then( res => commit('setDefaultAdd', id))
    }
  }
})

export default store