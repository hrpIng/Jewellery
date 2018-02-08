<template>
    <div class="list-wrapper">
        <!-- 搜索头部 -->
        <div class="search-wrapper">
            <div class="inp-box act">
                <input type="text" class="inp">
            </div>
            <button class="button">搜索</button>
        </div>
        
        <!-- 排序 -->
        <div class="sort-wrapper">
            <div class="item down">销量</div>
            <div class="item">价格</div>
            <div class="item">上架时间</div>
        </div>

        <!-- 我是傲娇的分割线 -->
        <split></split>

        <!-- 列表的商品 -->
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
            </div>
            <!-- 没有商品-->
            <!-- <div class="no-product">该类别下暂无商品</div> -->
        </div>

        <!-- 底部技术支持 一直都有 -->
        <footer-support></footer-support>


    </div>
</template>

<script>
export default {
    name:'list'
}
</script>