<template>
    <!-- 页面有底部的框架 -->
    <div class="layout-page">
        <transition :name="transitionName">
            <keep-alive :exclude="$route.meta.keepAlive">
                <router-view></router-view>
            </keep-alive>
        </transition>
        <nav class="footer-wrapper">
            <div class="footer-fixed">
                <router-link to="/index" active-class="sel">首页</router-link>
                <router-link to="/category" active-class="sel">分类</router-link>
                <router-link to="/cart" active-class="sel">购物车</router-link>
                <router-link to="/register" active-class="sel">我的</router-link>
            </div>
        </nav>
    </div>
</template>
<script>
export default{
    name:'meau'
}
</script>