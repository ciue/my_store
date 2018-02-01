import './cart_base.css';
import './cart_trade.css';
import './cart.css';

import Vue from 'vue';
import axios from 'axios';
import mixin from 'js/mixin.js';
import url from 'js/api.js';

new Vue({
  el: '#app',
  data: {
    cartLists: null,
    total: 0,
    isEditing: false,
    editingShop: null,
    removePopup: false,
    toRemove: null,
  },
  created() {
    this.getCartLists()
  },
  methods: {
    getCartLists() {
      axios.post(url.cartLists).then(res => {
        let lists = res.data.cartLists;
        lists.forEach(shop => {
          shop.checked = false;
          shop.editable = false;
          shop.editMsg = '编辑';
          shop.removeChecked = false;
          shop.goodList.forEach(good => {
            good.checked = false;
            good.removeChecked = false;
          })
        });
        this.cartLists = lists;
      })
    },
    selectGood(shop, good) {
      good[this.arr] = !good[this.arr];
      shop[this.arr] = shop.goodList.every(good => good[this.arr])
    },
    selectShop(shop) {
      shop.goodList.forEach(good => good[this.arr] = !shop[this.arr])
      shop[this.arr] = !shop[this.arr];
    },
    edit(shop, index) {
      shop.editable = !shop.editable;
      shop.editMsg = shop.editable ? '完成' : '编辑';
      this.isEditing = shop.editable;
      this.cartLists.forEach((item, i) => {
        if (i === index) return;
        item.editable = false;
        item.editMsg = shop.editable ? ' ' : '完成'
      })
      this.editingShop = shop.editable ? shop : null
    },
    reduce(good) {
      if (good.number === 1) return;
      axios.post(url.cartReduce, {
        id: good,
        number: 1
      }).then(res => good.number -= 1)
    },
    add(good) {
      axios.post(url.addCart, {
        id: good,
        number: 1
      }).then(res => good.number += 1)
    },
    remove(shop, shopIndex, good, goodIndex) {
      // 删除单个
      this.removePopup = true
      this.toRemove = { shop, shopIndex, good, goodIndex }
    },
    removeConfirm() {
      let { shop, shopIndex, good, goodIndex } = this.toRemove
      axios.post(url.cartRemove, {
        id: good.id
      }).then(res => {
        console.log(res);
        shop.goodList.splice(goodIndex, 1);
        if(!shop.goodList.length) {
          this.cartLists.splice(shopIndex,1);
          this.removeShop()
        }
        this.removePopup = false;
      })
    },
    removeShop() {
      this.cartLists.forEach(shop => {
        shop.editable = false;
        shop.editMsg = '编辑';
      })
      this.isEditing = false;
      this.editingShop = null;
    }
  },
  computed: {
    allSelected: {
      get() {
        if (this.cartLists && this.cartLists.length) {
          return this.cartLists.every(shop => shop[this.arr])
        }
        return false;
      },
      set(newVal) {
        this.cartLists.forEach(shop => {
          shop[this.arr] = newVal;
          shop.goodList.forEach(good => good[this.arr] = newVal)
        })
      },
    },
    selectedLists() {
      if (this.cartLists && this.cartLists.length) {
        let arr = []
        let total = 0
        this.cartLists.forEach(shop => {
          shop.goodList.forEach(good => {
            if (good.checked) {
              arr.push(good)
              total += good.price * good.number
              console.log(total);
            }
          })
        })
        this.total = total;
        return arr
      }
      return []
    },
    arr() {
      return this.isEditing ? 'removeChecked' : 'checked';
    },
    removeLists() {
      //要删除的列表
      let arr = []
      if (this.isEditing) {
        this.editingShop.goodList.forEach(good => {
          if (good.removeChecked) arr.push(good);
        })
        return arr
      }
      return []
    }
  },
  mixins: [mixin]
})