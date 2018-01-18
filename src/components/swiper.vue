<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swp-page swiper-slide" v-for="item in lists">
              <a class="js-no-follow" :href="item.url">
                <img class="goods-main-photo fadeIn" :src="item.img">
              </a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "swiper",
  props: {
    lists: {
      type: Array,
      required: true
    },
    name: {}
  },

  created() {
    console.log("created:", document.querySelectorAll(".swiper-slide"));
  },

  mounted() {
    console.log("mounted: ", document.querySelectorAll(".swiper-slide"));
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });
  }
};
</script>


<style>
.swiper-slide img{
  width: 100%;
  height: 100%;
}
</style>
