import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false
// 导入路由对象
import router from "./router/router.js"

import '@/util/filter.js';

// 注册时可以配置额外的选项
import { Lazyload } from "vant";
Vue.use(Lazyload, {
  lazyComponent: true,
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
