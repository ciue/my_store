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

function getQueryStr(str) {
  const obj = {};
  const r = str.substr(1).split('&');
  for (const v of r) {
    const key = v.split('=')[0];
    const value = v.split('=')[1];
    obj[key] = value;
  }
  return obj;
}

let {id} = getQueryStr(location.search)

let tab = ['商品详情', '本店成交']
new Vue({
  el: '#app',
  data: {
    details: null,
    dealLists: null,
    tab:tab,
    tabIndex: null,
    goodsImgs: [],
    skuType: null,
    showSku: false,
    skuNum: 1,
    isAdded: false,
    id:id,
  },

  created() {
    this.getData()
  },

  methods: {
    getData() {
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
      this.skuType = type;
      this.showSku = true;
    },
    changeSkuNum(i) {
      if (i === 0 & this.skuNum === 1) return;
      i ? this.skuNum += 1 : this.skuNum -= 1;
    },
    addCart() {
      axios.post(url.addCart, {
        id: id,
        number: this.skuNum
      }).then(res => {
        if (res.data.status === 200) {
          //成功加入购物车
          this.showSku = false
        }
      })
    },
    blur() {
      if(this.skuNum) return;
      if(!this.skuNum) this.skuNum =1;
    }
  },
  watch: {
    showSku(val, oldVal) {
      document.body.style.overflow = val ? 'hidden' : 'auto';
      document.querySelector('html').style.overflow = val ? 'hidden' : 'auto';
    },

  },
  components: {
    Swiper,
  },
  mixins: [mixin]
})
