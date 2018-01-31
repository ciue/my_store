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
      good.checked = !good.checked;
      shop.checked = shop.goodList.every(good => good.checked)
    },
    selectShop(shop) {
      shop.goodList.forEach(good => good.checked = !shop.checked)
      shop.checked = !shop.checked;
    },
    edit(shop, index) {
      shop.editable = !shop.editable;
      shop.editMsg = shop.editable ? '完成' : '编辑';
      this.isEditing = shop.editable;
      this.cartLists.forEach( (item, i) =>{
        if(i === index) return;
        item.editable = false;
        item.editMsg = shop.editable ? ' ' : '完成'
      })
    }
  },
  computed: {
    allSelected: {
      get() {
        if (this.cartLists && this.cartLists.length) {
          return this.cartLists.every(shop => shop.checked)
        }
        return false;
      },
      set(newVal) {
        this.cartLists.forEach(shop => {
          shop.checked = newVal;
          shop.goodList.forEach(good => good.checked = newVal)
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
    removeLists() {}
  },
  mixins: [mixin]
})