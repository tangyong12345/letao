<template>
  <div class="app">

    <!-- 中间部分 -->
    <router-view></router-view>

    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/mycar" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的乐淘</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Search, Tabbar, TabbarItem } from "vant";
import navBer from "@/components/tabber/nav-ber.vue";
export default {
  name: "App",
  data() {
    return {
      active: 0,
    };
  },
  components: {
    "nav-ber": navBer,
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem,
  },
};
</script>

<style lang="scss" scoped>
.app {
  min-width: 320px;
  max-width: 750px;
  margin: auto;
  background-color: rgb(238, 238, 238);
  height: 100%;
  padding-bottom: 50px;
}
</style>
