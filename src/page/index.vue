<template>
    <div class="index-wrapper">
        <!-- 搜索头部 -->
        <div class="search-wrapper">
            <div class="category-icon"></div>
            <!-- 触发搜索框是添加act -->
            <div class="inp-box" :class="{'act':showInpBox}" @click="showInpBox=true">
                <div class="show-inp">请输入你想要搜索的商品</div>
                <input type="text" class="inp">
            </div>
            <button class="button" @click="searchProduct">搜索</button>
        </div>
        <!-- 轮播图 -->
        <swiper auto loop :aspect-ratio="602/750">
            <swiper-item><img src="/static/images/index/banner.jpg"></swiper-item>
            <swiper-item><img src="/static/images/index/banner1.jpg"></swiper-item>
            <swiper-item><img src="/static/images/index/banner2.jpg"></swiper-item>
        </swiper>
        <!-- 我是傲娇的分割线 -->
        <split></split>
        <!-- 我是会动的广告哦 -->
        <div class="advert-box">
            <span class="advert-text" ref="advert">
                集广告播放，交易支付，会员营销，商品展示，商品推荐，推荐人营销，会员营销，联盟模式，商品线上线下同步和半同步，线上线下互联互通，提升顾客体验
            </span>
        </div>
        <!-- 我是傲娇的分割线 -->
        <split></split>
        <!-- 不规则的商品大类列表 -->
        <div class="irregular-category clearfix">
            <router-link class="cate1" to="/index"><img src="/static/images/index/category1.jpg"></router-link>
            <router-link class="cate2" to="/index"><img src="/static/images/index/category2.jpg"></router-link>
            <router-link class="cate2" to="/index"><img src="/static/images/index/category3.jpg"></router-link>
        </div>
        <!-- 我是傲娇的分割线 -->
        <split></split>
        <!-- 热销的商品 -->
        <div class="product-list">
            <div class="title clearfix">热销商品<router-link class="more" to="/index">更多</router-link></div>
            <div class="list clearfix">
                <router-link to="/pro-detail">
                    <div class="img"><img src="/static/images/index/p1.jpg"></div>
                    <div class="txt">白18k砖石吊坠女单砖4分</div>
                    <div class="price tac">￥699.00</div>
                </router-link>
                <router-link to="/pro-detail">
                    <div class="img"><img src="/static/images/index/p1.jpg"></div>
                    <div class="txt">白18k砖石吊坠女单砖4分</div>
                    <div class="price tac">￥699.00</div>
                </router-link>
                <router-link to="/pro-detail">
                    <div class="img"><img src="/static/images/index/p1.jpg"></div>
                    <div class="txt">白18k砖石吊坠女单砖4分</div>
                    <div class="price tac">￥699.00</div>
                </router-link>
            </div>
        </div>
        <!-- 我是傲娇的分割线 -->
        <split></split>
        <!-- 精品推荐 -->
        <div class="product-list">
            <div class="title clearfix tac">热销商品</div>
            <div class="list two clearfix">
                <router-link to="/pro-detail">
                    <div class="img"><img src="/static/images/index/p1.jpg"></div>
                    <div class="txt">白18k砖石吊坠女单砖4分</div>
                    <div class="price tac">￥699.00</div>
                </router-link>
                <router-link to="/pro-detail">
                    <div class="img"><img src="/static/images/index/p1.jpg"></div>
                    <div class="txt">白18k砖石吊坠女单砖4分</div>
                    <div class="price tac">￥699.00</div>
                </router-link>
                <router-link to="/pro-detail">
                    <div class="img"><img src="/static/images/index/p1.jpg"></div>
                    <div class="txt">白18k砖石吊坠女单砖4分</div>
                    <div class="price tac">￥699.00</div>
                </router-link>
                <router-link to="/pro-detail">
                    <div class="img"><img src="/static/images/index/p1.jpg"></div>
                    <div class="txt">白18k砖石吊坠女单砖4分</div>
                    <div class="price tac">￥699.00</div>
                </router-link>
            </div>
        </div>
        <!-- 广告图 -->
        <div class="ad-banner"><img src="/static/images/index/ad.jpg"></div>
        <!-- 商品 -->
        <div class="product-list">
            <div class="list two clearfix">
                <router-link to="/pro-detail">
                    <div class="img"><img src="/static/images/index/p1.jpg"></div>
                    <div class="txt">白18k砖石吊坠女单砖4分</div>
                    <div class="price tac">￥699.00</div>
                </router-link>
                <router-link to="/pro-detail">
                    <div class="img"><img src="/static/images/index/p1.jpg"></div>
                    <div class="txt">白18k砖石吊坠女单砖4分</div>
                    <div class="price tac">￥699.00</div>
                </router-link>
                <router-link to="/pro-detail">
                    <div class="img"><img src="/static/images/index/p1.jpg"></div>
                    <div class="txt">白18k砖石吊坠女单砖4分</div>
                    <div class="price tac">￥699.00</div>
                </router-link>
                <router-link to="/pro-detail">
                    <div class="img"><img src="/static/images/index/p1.jpg"></div>
                    <div class="txt">白18k砖石吊坠女单砖4分</div>
                    <div class="price tac">￥699.00</div>
                </router-link>  
            </div>
        </div>
        <footer-support></footer-support>
    </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux';
export default{
    name:'index',
    data(){
        return{
            showInpBox:false
        }
    },
    mounted:function(){
        this.autoAdvert();
    },
    methods:{
        // 自动播放的广告
        autoAdvert:function(){
            var _this = this;
            var _speed = 5; // 滚动的速度
            var _width = _this.$refs.advert.offsetWidth; // 滚动内容的宽度
            var _clideW = document.body.clientWidth;    // 屏幕的宽度
            var _w = 0; // 默认运动距离

            // 开始滚动
            setInterval(function(){
                _w = _w +_speed;
                if((_w > _width - _clideW + _speed &&_speed > 0) || (_speed < 0 && _w < 0)){
                    _speed = -_speed;
                }
                _this.$refs.advert.style.transform = 'translateX(-' + _w + 'px)';
                
            },150)
        },
        searchProduct:function(){
            this.$router.replace('/list');
        }
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>