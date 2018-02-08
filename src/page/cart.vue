<template>
    <div class="cart-wrapper">
        <!-- 没有商品-->
        <div class="no-product">您的购物车是空的哦！~</div>

        <!-- 购物车列表 -->
        <div class="cart-list">
            <div class="cart-box">
                <div class="cart-goods">
                    <span class="radio-box"></span>
                    <router-link class="img" to="/pro-detail"><img src="/static/images/index/p1.jpg"></router-link>
                    <router-link to="/pro-detail" class="txt">
                        <div class="txt-title">18K金玫瑰金11067#8紫罗兰镶砖平安扣</div>
                        <div class="package">套餐类型：默认，默认</div>
                        <div>单价 <span class="mc">￥2800.00</span><span class="fr">x1</span></div>
                    </router-link>
                </div>
                <div class="other-tools">
                    <div class="del-icon"></div>
                    <div class="num-box tar"><span class="text">数量</span><span class="operate add">+</span><input type="text" class="inp" value="1"><span class="operate rec">-</span></div>
                </div>
            </div>
        </div>
        <!-- 我是傲娇的分割线 -->
        <split></split>

        <!-- 底部技术支持 一直都有 -->
        <footer-support></footer-support>

        <!-- 底部结算 -->
        <div class="footer-settlement">
            <div class="settlement">
                <div class="txt" @click="!checkoutAll"><span class="radio-box" :class="{act:checkoutAll}"></span>全选</div>
                <div class="other">
                    <div>合计：<span class="mc">￥0.00</span></div>
                    <div class="freight">不含运费</div>
                </div>
                <router-link to="/index" class="settlement-btn">结算</router-link>
            </div>
        </div>
        

    </div>
</template>
<script>
export default{
    name:'cart',
    data(){
        return{
            checkoutAll:false
        }
    }
}
</script>