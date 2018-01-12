import 'css/common.css';
import './index.css';

import Vue from 'vue';
import axios from 'axios';
import url from 'js/api.js';

axios.post(url.hostlists, {
  pageNum: 1,
  pageSize: 6,
}).then(r => console.log(r));

const app = new Vue({
  el: '#app',
  data: {
    lists: null, // 为何不给空数组
  },

  created() {
    axios.post(url.hotlist, {
      pageNum: 1,
      pageSize: 6,
    }).then((r) => {
      this.lists = r.data.lists;
    });
  },
});
