// 1.页面滚动到一定程度时出现回到顶部
// 2.滚动的速度

<template>
<div class="go-to-top" v-show="isShow" @click='goTop'>
</div>
</template>

<script>
export default {
  name: "toTop",
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrolling);
  },
  methods: {
    touchmove() {
      if (window.pageYOffset || document.documentElement.scrollTop > 50) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    goTop() {
      let timer = setInterval(() => {
        let top = window.pageYOffset || document.documentElement.scrollTop
        let speed = Math.ceil(top / 5)
        window.pageYOffset = document.documentElement.scrollTop = top - speed
        if (top === 0) {
          clearInterval(timer)
        }
      }, 20)
    },
    scrolling() {
      if (this.scrollFlag) {
        return;
      }
      this.scrollFlag = true;
      setTimeout(() => {
        this.touchmove();
        this.scrollFlag = false;
      }, 300);
    },
  }
};
</script>
