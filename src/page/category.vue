<template>
    <div class="category-wrapper">
        <!-- 左边 -->
        <scroller lock-x class="cate-left">
            <div>
                <div class="txt">全部类别</div>
                <div class="txt act">外来换款</div>
                <div class="txt">素金类</div>
                <div class="txt">砖石类</div>
                <div class="txt">铂金类</div>
                <div class="txt">18K类</div>
                <div class="txt">简单版</div>
                <div class="txt">珠宝</div>
                <div class="txt">微商城</div>
            </div>
        </scroller>
        <!-- 右边 -->
        <scroller lock-x class="cate-right">
            <!-- 商品列表 -->
            <div class="product-list">
                <div class="list three clearfix">
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
                
                <!-- 没有商品-->
                <div class="no-product">该类别下暂无商品</div>

                <!-- 底部技术支持 一直都有 -->
                <footer-support></footer-support>
            </div>
        </scroller>
    </div>
</template>
<script>
import { Scroller } from 'vux';
export default{
    name:'category',
    components:{
        Scroller
    }
}
</script>