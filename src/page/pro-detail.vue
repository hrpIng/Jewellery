<template>
    <div class="pro-detail-wrapper">
        <!-- 产品轮播图 -->
        <swiper auto loop dots-position="center" :aspect-ratio="750/750">
            <swiper-item><img src="/static/images/detail/banner.jpg"></swiper-item>
            <swiper-item><img src="/static/images/detail/banner.jpg"></swiper-item>
            <swiper-item><img src="/static/images/detail/banner.jpg"></swiper-item>
        </swiper>

        <!--  商品详情 -->
        <div class="goods-detail">
            <div class="title">凤求凰钻石吊坠单砖18K金群镶天然钻石项链白金项链女款</div>
            <div class="price-box">价格<span class="mc price">￥799.00</span><span class="thr">￥1699.00</span> <span class="num">x1</span></div>
        </div>

        <!-- 我是傲娇的分割线 -->
        <split></split>

        <!-- 选项 -->
        <cell title="请选择砖石纯净度" is-link @click.native="show=true"></cell>

        <!-- 我是傲娇的分割线 -->
        <split></split>

        <!-- 商品详情 -->
        <div class="detail-wrapper">
            <div class="title">商品详情</div>
            <img src="/static/images/detail/banner.jpg">
        </div>

        <!-- 底部技术支持 -->
        <footer-support></footer-support>
        

        <!-- 底部加入购物立即购买 -->
        <div class="footer-tools">
            <div class="tools">
                <router-link to="/index" class="home-icon">首页</router-link>
                <router-link to="/category" class="category-icon">分类</router-link>
                <router-link to="/cart" class="cart-icon">购物车</router-link>
                <button class="btn">加入购物车</button>
                <button class="btn red">立即购买</button>
            </div>
        </div>

        <!-- 选项弹出框 -->
        <popup v-model="show">
            <div class="select-spec">
                <div class="title">请选择主钻石分数</div>
                <div class="sepc-box">
                    <div class="sub-title">主钻石分数</div>
                    <div>
                        <span class="item">5分</span>
                        <span class="item">10分</span>
                    </div>
                </div>
                <div class="num-box tar">
                    <span class="text">数量</span><span class="operate add">+</span><input type="text" class="inp" value="1"><span class="operate rec">-</span>
                </div>
                <div class="btn" @click="show=false">确定</div>
            </div>
        </popup>
    </div>
</template>

<script>
import { Swiper, SwiperItem, Cell, Popup } from 'vux';
export default{
    name:'pro-detail',
    data(){
        return{
            show:false
        }
    },
    methods:{
        goConsult:function(){
            console.log(0)
        }
    },
    components:{
        Swiper,
        SwiperItem,
        Cell,
        Popup
    }
}
</script>