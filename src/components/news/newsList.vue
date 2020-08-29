<template>
  <div class="newslist">
    <van-nav-bar left-text="返回" @click-left="onClickLeft">
      <template #title>我的购物车</template>
    </van-nav-bar>
    <div class="newsitem" v-for="item in newslist " :key="item.id">
      <div class="img_container">
        <img v-lazy="item.img_url" alt />
      </div>
      <div class="info">
        <h3>{{item.title}}</h3>
        <div class="time_click">
          <span>发布时间:{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
          <span>点击：{{item.click}} 次</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getnewslist } from "@/api/index.js";
import navBer from "@/components/tabber/nav-ber.vue";
import { NavBar, Toast } from "vant";
export default {
  data() {
    return {
      newslist: [],
    };
  },
  methods: {
    async getnewsData() {
      var res = await getnewslist();
      this.newslist = res.message;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  components: {
    "van-nav-bar": NavBar,
    Toast,
  },


  created() {
    this.getnewsData();
  },
};
</script>

<style lang="scss" scoped>
.newslist {
  .newsitem {
    display: flex;
    border-bottom: 1px solid #b9b7b7;

    .img_container {
      img {
        width: 100px;
        height: 100px;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;

      h3 {
        color: #000000;
        font-size: 13px;
        margin-bottom: 14px;
      }
      .time_click {
        display: flex;
        justify-content: space-between;
        span {
          color: #888888;
          font-size: 12px;
        }
      }
    }
  }
}
</style>