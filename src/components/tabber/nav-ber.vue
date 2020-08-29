<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
    />
  </div>
</template>

<script>
import { NavBar,} from "vant";
export default {
  components:{
      'van-nav-bar':NavBar,
  }
};
</script>

<style lang="scss" scoped>
</style>