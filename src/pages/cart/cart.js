import './cart_base.css';
import './cart_trade.css';
import './cart.css';
import './cart_transtion.css'

import Vue from 'vue';
import axios from 'axios';
import mixin from 'js/mixin.js';
import url from 'js/api.js';
import cartService from 'js/cartService.js'
import vueTouch from 'js/vueTouch.js'


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
                        good.editable = false;
                    })
                });
                this.cartLists = lists;
            })
        },
        selectGood(shop, good) {
            good[this.editStatus] = !good[this.editStatus];
            shop[this.editStatus] = shop.goodList.every(good => good[this.editStatus])
        },
        selectShop(shop) {
            shop.goodList.forEach(good => good[this.editStatus] = !shop[this.editStatus])
            shop[this.editStatus] = !shop[this.editStatus];
        },
        // 编辑整个店铺
        edit(shop, index) {
            this.resetEdit()
            shop.editable = !shop.editable;
            shop.editMsg = shop.editable ? '完成' : '编辑';
            shop.goodList.forEach(good => good.editable = shop.editable)
            this.isEditing = shop.editable;
            this.cartLists.forEach((item, i) => {
                if (i === index) return;
                item.editable = false;
                item.editMsg = shop.editable ? ' ' : '编辑'
            })
            this.editingShop = shop.editable ? shop : null
        },
        add(good) {
            // 点击按钮增加一个商品数量
            cartService.changeNum('changeNum', good, good.number)
                .then(res => good.number++)
        },
        reduce(good) {
            // 点击按钮减少一个商品数量
            // if(good.number ===1 ) return;
            cartService.changeNum('changeNum', good, good.number)
                .then(res => good.number--)
        },
        blur(e, good) {
            // 校验是否为合法值
            console.log(!/^[1-9][0-9]*$/.test(e.target.value));
            if (!/^[1-9][0-9]*$/.test(e.target.value)) {
                good.number = 1;
                return
            }
            // 编辑商品数量
            cartService.changeNum('changeNum', good, good.number)
                .then(res => good.number = +e.target.value)
        },
        remove(shop, shopIndex, good, goodIndex) {
            // 删除单个商品
            this.removePopup = true
            this.toRemove = {
                shop,
                shopIndex,
                good,
                goodIndex
            }
        },
        removeConfirm() {
            // 弹出框确认删除
            let {
                shop,
                shopIndex,
                good,
                goodIndex
            } = this.toRemove
            axios.post(url.cartRemove, {
                id: good.id
            }).then(res => {
                console.log(res);
                shop.goodList.splice(goodIndex, 1);
                if (!shop.goodList.length) {
                    this.cartLists.splice(shopIndex, 1);
                    this.removeShop()
                }
                this.removePopup = false;
            })
        },
        removeShop() {
            // 移除店铺
            this.cartLists.forEach(shop => {
                shop.editable = false;
                shop.editMsg = '编辑';
            })
            this.isEditing = false;
            this.editingShop = null;
        },
        left(...args) {
            let [good, goodIndex, shopIndex] = args
            // 重置页面的编辑状态，页面仅能保持单个待删除商品
            this.resetEdit()
            good.editable = true
            // console.log( this.$refs[`good-${shopIndex}-${goodIndex}`])

        },
        right(...args) {
            let [good, goodIndex, shopIndex] = args
            good.editable = false
        },
        resetEdit() {
            this.cartLists.forEach(shop => {
                shop.goodList.forEach(item => {
                    item.editable = false
                })
            })
        }
    },
    computed: {
        // 判断页面时候处于编辑状态
        editStatus() {
            return this.isEditing ? 'removeChecked' : 'checked';
        },
        // 全选按钮
        allSelected: {
            get() {
                if (this.cartLists && this.cartLists.length) {
                    return this.cartLists.every(shop => shop[this.editStatus])
                }
                return false;
            },
            set(newVal) {
                this.cartLists.forEach(shop => {
                    shop[this.editStatus] = newVal;
                    shop.goodList.forEach(good => good[this.editStatus] = newVal)
                })
            },
        },
        // 选择的商品
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
        // 预计删除的列表
        removeLists() {
            let arr = []
            if (this.isEditing) {
                this.editingShop.goodList.forEach(good => {
                    if (good.removeChecked) arr.push(good);
                })
                return arr
            }
            return []
        },

    },

    mixins: [mixin],
})
