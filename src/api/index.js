//封装一个模块用于各种请求方法

import instance from './config.js';

//获取轮播图
export  async  function getLunBoData(){
    return  await instance.get('/getlunbo');
}

//获取商品信息

export async function getRecommendData(limit =10){
    return await instance.get(`/recommend?limit=${limit}`);
}

//获取新闻信息

export async function getnewslist(){
    return await instance.get('/getnewslist');
}

//获取所有商品
export async function getDegitList(limit = 16){
    return await instance.get(`/getgoods?limit=${limit}`)
}