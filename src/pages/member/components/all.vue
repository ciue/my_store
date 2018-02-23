<template>
<div class="container " style="min-height: 597px;">
  <div class="block-list address-list section section-first js-no-webview-block" v-for="(item,index) in lists" :key="index" >
    <a class="block-item js-address-item address-item" :class="{'address-item-default':item.isDefault}">
      <div class="address-title">{{item.name}} {{item.tel}} </div>
      <p>{{item.provinceName}}{{item.cityName}}{{item.districtName}}{{item.address}} </p>
      <a class="address-edit" @click="toEdit(item)">修改</a>
    </a>
  </div>
  <div class="block stick-bottom-row center">
    <router-link class="btn btn-blue js-no-webview-block js-add-address-btn" :to="{name:'form', query:{type:'add'} }">
      新增地址
    </router-link>
  </div>
</div>
</template>

<script>

export default {
  computed: {
    lists() {
      return this.$store.state.lists
    }
  },
  created() {
    if(this.lists) return;
    this.$store.dispatch('getLists')
  },
  methods: {
    toEdit(item) {
      // this.$router.push({path: "/address/form"});
      this.$router.push({
        name: "form",
        query: {
          type: "edit",
          instance: item
        }
      });
    }
  }
};
</script>


<style>
.address-edit {
  position: absolute;
  font-size: 12px;
  padding-left: 25px;
  color: #999;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 20px;
  background: url(https://b.yzcdn.cn/v2/image/pf/icon/m.png) no-repeat 5px 4px;
  background-size: 14px;
}
</style>
