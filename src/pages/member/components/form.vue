<template>
<div class="container " style="min-height: 597px;">
  <div class="section section-first">
    <div class="block form js-form">
      <input class="js-id" name="id" type="hidden" value="">
      <div class="block-item" style="border-top:0;">
        <label>收货人</label>
        <input type="text" placeholder="请输入姓名" name="user_name" v-model.trim="name" maxlength="20">
      </div>
      <div class="block-item">
        <label>联系电话</label>
        <input type="tel" placeholder="联系电话" name="tel" v-model="tel" maxlength="11">
      </div>
      <div class="block-item">
        <label>选择地区</label>
        <div class="select-group">
          <select v-model="provinceValue">
            <option :value="-1">{{'选择省份'}}</option>
            <option :value="province.value" v-for="province in addressData.list" :key="province.id">{{province.label}}</option>
            </select>
          <select v-model="cityValue">
            <option :value="-1">{{'选择城市'}}</option>
            <option :value="city.value" v-for="city in cityLists" :key="city.id">{{city.label}}</option>
            </select>
          <select v-model="districtValue">
              <option :value="-1">{{'选择县区'}}</option>
              <option :value="district.value" v-for="district in districtList" :key="district.id">{{district.label}}</option>
            </select>
        </div>
      </div>
      <div class="block-item">
        <label>详细地址</label>
        <input type="text" placeholder="街道门牌信息" name="address_detail" v-model="address" maxlength="100">
      </div>
    </div>
  </div>
  <div class="block section js-save block-control-btn" @click="save">
    <div class="block-item c-blue center">保存地址</div>
  </div>
  <div class="block section js-delete  block-control-btn" @click="remove">
    <div class="block-item c-red center">删除地址</div>
  </div>
  <div class="block stick-bottom-row center js-save-default "  @click="setDefault">
    <button class="btn btn-standard js-save-default-btn">设为默认收货地址</button>
  </div>
</div>
</template>

<script>
import Address from 'js/addressService.js'

export default {
  data() {
    return {
      name: "",
      tel: "",
      provinceValue: -1,
      cityValue: -1,
      districtValue: -1,
      address: "",
      id: "",
      isDefault: false,
      type: this.$route.query.type,
      addressData: require("js/address.json"),
      cityLists: null,
      districtList: null,
      instance: this.$route.query.instance,
      isInitVal: false,
    };
  },

  computed: {
    lists() {
      return this.$store.state.lists
    }
  },

  created() {
    if (this.type === "edit") {
      let ad = this.instance;
      this.provinceValue = parseInt(ad.provinceValue);
      this.isInitVal = true;
      this.name = ad.name;
      this.tel = ad.tel;
      this.address = ad.address;
      this.id = ad.id;
      this.isDefault = ad.isDefault;
    }
  },

  methods: {
    save() {
      // todo: 非空 与 合法校验
      let {name, tel, provinceValue, cityValue, districtValue, address, id} = this
      let inst = {name, tel, provinceValue, cityValue, districtValue, address, id}
      // 新增或编辑地址
      console.log(inst);
      if( this.type === 'add') this.$store.dispatch('addInst',inst)
      if( this.type === 'edit') this.$store.dispatch('updateInst',inst)
    },
    remove() {
      // todo: 定制确认弹框
      if(window.confirm('确认删除')) {
        this.$store.dispatch('removeInst', this.id)
      }
    },
    setDefault() {
      if(window.confirm('设为默认收货地址')) {
        this.$store.dispatch('setDefault', this.id)
      }
    }
  },

  watch: {
    provinceValue(val) {
      if (!val || val == -1) return;
      let list = this.addressData.list;
      let province = list.find(item => item.value == val);
      this.cityLists = province.children;
      this.cityValue = -1;
      this.districtValue = -1;
      
      // 设置默认值
      if(this.type === 'edit' && this.isInitVal) {
        this.cityValue = parseInt(this.instance.cityValue)
        this.districtValue = parseInt(this.instance.districtValue)
        this.isInitVal = false
      }
    },
    cityValue(val) {
      if (val == -1) return;
      let city = this.cityLists.find(item => item.value == val);
      this.districtList = city.children;
    },
    lists:{
      handler: function () {
        this.$router.go(-1)
      },
      deep: true,
    }
  }
};
</script>
