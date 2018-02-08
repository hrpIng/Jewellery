<template>
  <div id="page">
    <transition :name="transitionName">
        <keep-alive :exclude="$route.meta.keepAlive">
            <router-view></router-view>
        </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'page'
}
</script>
<!-- vue的默认样式引入 -->
<style lang="less">
    @import '~vux/src/styles/reset';
</style>

<!-- 引入scss主体样式 -->
<style lang="scss">
    @import './style/main.scss';
</style>
