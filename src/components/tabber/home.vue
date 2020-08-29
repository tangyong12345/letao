<template>
  <div class="home">
     <div class="header">
      <img src="@/assets/images/logo.png" alt />
      <van-search placeholder="请输入搜索关键词" />
    </div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in lunboData" :key="item.img">
        <img :src="item.img" />
      </van-swipe-item>
    </van-swipe>

    <!-- 8宫格 -->
    <van-grid :column-num="4" :border="false">
      <van-grid-item to="/degitList" icon="photo-o" text="文字">
        <img src="../../assets/images/menu10.png" alt />
        <div>数码电器</div>
      </van-grid-item>
      <van-grid-item to="/newsList" icon="photo-o" text="文字">
        <img src="../../assets/images/menu19.png" alt />
        <div>乐淘头条</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../../assets/images/menu18.png" alt />
        <div>美图欣赏</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../../assets/images/menu15.png" alt />
        <div>乐淘服饰</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../../assets/images/menu12.png" alt />
        <div>9.9元拼单</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../../assets/images/menu15.png" alt />
        <div>话费充值</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../../assets/images/menu16.png" alt />
        <div>物流查询</div>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <img src="../../assets/images/menu17.png" alt />
        <div class="text">全部</div>
      </van-grid-item>
    </van-grid>

    <!-- 推荐商品 -->
    <div class="body">
      <van-divider
        :style="{ color: '#333333', borderColor: '#333333', padding: '0 16px',fontSize:'16px' }"
      >为您推荐</van-divider>

      <div class="goodslist">
        <div class="item" v-for="item in recommenData" :key="item.id">
          <img v-lazy="item.img_url" alt />
          <div class="text">
            <div class="title">{{ item.title }}</div>
            <div class="footer">
              <span class="price">&yen;&nbsp;{{ item.sell_price }}</span>
              <span class="buy">{{ item.buy }}购买</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Grid, GridItem, Divider ,Search} from "vant";
import { getLunBoData, getRecommendData } from "@/api/index.js";
export default {
  data() {
    return {
      lunboData: [],
      recommenData: [],
    };
  },
  components: {
    "van-search": Search,
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    "van-grid": Grid,
    "van-grid-item": GridItem,
    "van-divider": Divider,
  },
  
  methods: {
    async getlunbo() {
      var res = await getLunBoData();
      this.lunboData = res.message;
    },

    async getRecommend() {
      var { message } = await getRecommendData();
      this.recommenData = message;
    },
  },

  created() {
    this.getlunbo();
    this.getRecommend();
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top:54px;
  //轮播图
  .my-swipe {
    background-color: #fff;
    .van-swipe-item {
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  //8宫格
  .van-grid {
    background-color: #fff;
    .van-grid-item {
      padding: 8px 2px;

      img {
        width: 50%;
      }

      .text {
        color: #524949;
      }
    }
  }
  .body {
    padding: 0 8px;
    .goodslist {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 48%;
        margin: 4px 0;
        border-radius: 5%;
        overflow: hidden;
        background-color: #fff;
        img {
          width: 100%;
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
          }

          .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 4px;

            .price {
              font-size: 14px;
              color: #f50;
              padding: 10px 0;
            }

            .buy {
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
    }
  }

   .header {
    position: fixed;
    z-index: 5;
    display: flex;
    top: 0px;
    justify-content: space-between;
    align-items: center;
    padding: 0 4px;
    background-color: #fff;
    width: 100%;
    img {
      height: 44px;
    }
    .van-search {
      flex: 1;
    }
  }
}
</style>