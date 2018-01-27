import './goods_common.css';
import './goods_custom.css';
import './goods.css';
import './goods_theme.css';
import './goods_mars.css';
import './goods_sku.css';

import Vue from 'vue';
import axios from 'axios';
import url from 'js/api.js';
import mixin from 'js/mixin.js';

import Swiper from 'components/swiper.vue';


let tab = ['商品详情','本店成交']
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
  },

  created() {
    this.getData()
  },

  methods: {
    getData() {
      console.log(url.gooddetails);
      axios.get(url.gooddetails).then( res => {
        this.details = res.data
        this.details.imgs.forEach(element => {
          this.goodsImgs.push({
            img:element.img})
        });
        
      })
    },
    tabChange(index) {
      this.tabIndex = index
      if(index === 1) {
        this.getDeal()
      }
    },
    getDeal() {
      axios.get(url.dealLists).then( res => {
        this.dealLists = res.data.lists
      })
    },
    chooseSku(type) {
      console.log(type);
      this.skuType = type
      this.showSku = true
    }
  },
  watch: {
    showSku(val,oldVal) {
      document.body.style.overflow = val ? 'hidden' : 'auto';
      document.querySelector('html').style.overflow = val ? 'hidden' : 'auto';

      // document.body.style.height= val ? '100%' : 'auto';
      // document.querySelector('html').style.height = val ? '100%' : 'auto';
    }
  },
  components: {
    Swiper,
  },  
  mixins:[mixin]
})