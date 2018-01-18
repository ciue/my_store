import 'css/common.css';
import './index.css';

import Vue from 'vue';
import axios from 'axios';
import url from 'js/api.js';

import { InfiniteScroll } from 'mint-ui';

import Footnav from 'components/FootNav.vue';
import Swiper from 'components/swiper.vue';

Vue.use(InfiniteScroll);

const app = new Vue({
  el: '#app',
  data: {
    hotLists: null, // 为何不给空数组
    carouselLists: null,
    pageNum: 1,
    pageSize: 4,
    allLoaded: false,
    loading: false,
  },

  created() {
    this.getHotLists();
    this.getCarousel()
  },

  methods: {
    getHotLists() {
      if (this.allLoaded) return;
      this.loading = true;
      axios.post(url.hotlist, {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      }).then((r) => {
        const newLists = r.data.lists;
        if (newLists.length < this.pageSize) this.allLoaded = true;
        if (this.hotLists) {
          this.hotLists = this.hotLists.concat(newLists);
        } else {
          this.hotLists = newLists;
        }
        this.pageNum += 1;
        this.loading = false;
      });
    },
    getCarousel() {
      axios.get(url.carousel).then(res => {
        this.carouselLists = res.data.lists
      })
    }
  },

  components: {
    Footnav,
    Swiper,
  },
});
