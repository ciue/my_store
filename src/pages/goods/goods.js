import './goods_common.css';
import './goods_custom.css';
import './goods.css';
import './goods_theme.css';
import './goods_mars.css';
import './goods_sku.css';
import './goods_transtion.css';

import Vue from 'vue';
import axios from 'axios';
import url from 'js/api.js';
import mixin from 'js/mixin.js';

import Swiper from 'components/swiper.vue';

let id = location


let tab = ['商品详情', '本店成交']
new Vue({
  el: '#app',
  data: {
    details: null,
    dealLists: null,
    tab,
    tabIndex: null,
    goodsImgs: [],
    skuType: null,
    showSku: false,
    skuNum: 1,
    isadd: false,
  },

  created() {
    this.getData()
  },

  methods: {
    getData() {
      console.log(url.gooddetails);
      axios.get(url.gooddetails).then(res => {
        this.details = res.data
        this.details.imgs.forEach(element => {
          this.goodsImgs.push({
            img: element.img
          })
        });
      })
    },
    tabChange(index) {
      this.tabIndex = index
      if (index === 1) {
        this.getDeal()
      }
    },
    getDeal() {
      axios.get(url.dealLists).then(res => {
        this.dealLists = res.data.lists
      })
    },
    chooseSku(type) {
      this.skuType = type
      this.showSku = true
    },
    changeSkuNum(i) {
      if (i === 0 & this.skuNum === 1) return;
      i ? this.skuNum += 1 : this.skuNum -= 1;
    },
    addCart() {
      axios.post(url.addCart, {
        id,
        number: this.skuNum
      }).then(res => {
        if (res.data.status === 200) {
          //成功加入购物车
          this.showSku = false
        }
      })
    }
  },
  watch: {
    showSku(val, oldVal) {
      document.body.style.overflow = val ? 'hidden' : 'auto';
      document.querySelector('html').style.overflow = val ? 'hidden' : 'auto';
    }
  },
  components: {
    Swiper,
  },
  mixins: [mixin]
})