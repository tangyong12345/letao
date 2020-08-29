<template>
  <div>
    <van-nav-bar left-text="返回" @click-left="onClickLeft">
      <template #title>个人中心</template>
    </van-nav-bar>
  </div>
</template>

<script>
import navBer from "@/components/tabber/nav-ber.vue";
import { NavBar, Toast } from "vant";
export default {
  components: {
    "van-nav-bar": NavBar,
    Toast,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>