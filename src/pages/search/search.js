import 'css/common.css';
import './search.css';

import Vue from 'vue';
import axios from 'axios';
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);


import Footnav from 'components/FootNav.vue';
import totop from 'components/gototop.vue';

import url from 'js/api.js';
import mixin from 'js/mixin.js';

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
const { keyword, cate_id } = getQueryStr(location.search);


new Vue({
  el: '#app',
  data: {
    goodsLists: null,
    loading: false,
    allLoaded: false,
    pageSize: 5,
    count:0,
  },
  created() {
    this.getGoodsLists();
  },
  methods: {
    getGoodsLists() {
      if(this.allLoaded || this.count === 3) return;
      this.loading = true;
      axios.get(`${url.searchLists}?keyword=${keyword}&id=${cate_id}`).then((res) => {
          const newLists = res.data.lists;
          if(newLists.length < this.pageSize) this.allLoaded = true;
          
          if(this.goodsLists) {
            this.goodsLists = this.goodsLists.concat(newLists);
          }else{
            this.goodsLists = newLists;
          }
          this.loading = false;
        });
    },

  },
  components: {
    Footnav,
    totop,
  },
  mixins: [mixin],

});
