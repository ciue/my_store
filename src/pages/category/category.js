import 'css/common.css';
import './category.css';

import Vue from 'vue';
import axios from 'axios';
import url from 'js/api.js';

import Footnav from 'components/FootNav.vue';


new Vue({
    el: '#app',
    data: {
        rootLists: null,
        rankLists: {
            hotGoods: null,
            hotKeywords: null,
            hotShops: null,
        },
        subLists: {
            brandLists: null,
            categoryLists: null,
        },
        rootIndex: 0
    },

    created() {
        this.getRootLists();
        this.getSubData("rankData", "rankLists");
        this.getSubData("sublists", "subLists");

    },

    methods: {
        getSubData(urlname, dataname) {
            axios.get(url[urlname]).then(res => {
                this[dataname] = res.data.data
            })
        },

        getRootLists() {
            axios.get(url.rootlists).then(res => {
                this.rootLists = res.data.categoryTab
            })
        },

        getSubLists(index, id) {
            this.rootIndex = index;
            if (index = 0) {
                this.getRootLists()
            } else {
                axios.get(url.sublists).then(res => this.subLists = res.data.data)
            }
        }
    },
    components: {
        Footnav,
    }
})