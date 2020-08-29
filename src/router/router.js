import Vue from "vue"

import VueRouter from "vue-router"

Vue.use(VueRouter);

import user from '@/components/tabber/user.vue';
import mycar from '@/components/tabber/mycar.vue';
import home from '@/components/tabber/home.vue';
import newsList from '@/components/news/newsList.vue';
import degitList from '@/components/degit/degitList.vue';

let router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/user',component:user},
        {path:'/mycar',component:mycar},
        {path:'/home',component:home},
        {path:'/newsList',component:newsList},
        {path:'/degitList',component:degitList},
    ]
})

export default router;