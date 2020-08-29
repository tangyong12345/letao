<template>
  <div>
    <van-nav-bar left-text="返回" @click-left="onClickLeft">
      <template #title>商品列表</template>
    </van-nav-bar>
    <div class="goodslist">
      <div class="item" v-for="item in degit" :key="item.id">
        <img v-lazy="item.img_url" alt />
        <div class="text">
          <div class="title">{{ item.title }}</div>
          <div class="info">
            <div class="price">
              <span class="nowPrice">&yen;&nbsp;{{ item.sell_price }}</span>
              <span class="costPrice">&yen;&nbsp;{{ item.market_price }}</span>
            </div>
            <div class="footer">
              <span class="heat">热卖中</span>
              <span class="surplus">剩{{ item.stock_quantity }}件</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDegitList } from "@/api/index.js";
import navBer from "@/components/tabber/nav-ber.vue";
import { NavBar, Toast } from "vant";
export default {
  data() {
    return {
      degit: [],
    };
  },
  components: {
    "van-nav-bar": NavBar,
    Toast,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getDegit() {
      var { message } = await getDegitList();

      this.degit = message;
    },
  },
  created() {
    this.getDegit();
  },
};
</script>

<style lang="scss" scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4px;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 48%;
    border-radius: 4%;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ccc;
    -webkit-box-shadow: 0 0 5px #ccc;
    box-shadow: 0 0 5px #ccc;
    margin-bottom: 5px;
    padding: 2px;
    img {
      height: 160px;
      //width: 100%;
    }

    .text {
      padding: 2px;
      display: flex;
      flex-direction: column;

      .title {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 12px;
        color: #333;
        padding: 2px;
      }
      .info {
        padding: 3px 5px;
        .price {
          .nowPrice {
            color: red;
            font-weight: 700;
          }

          .costPrice {
            text-decoration: line-through;
            margin-left: 8px;
            font-size: 12px;
          }
        }

        .footer {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          font-size: 14px;

          .heat {
            font-size: 14px;
          }

          .surplus {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>