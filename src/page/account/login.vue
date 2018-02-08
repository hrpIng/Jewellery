<template>
    <div class="account-wrapper">
        <div class="title">绑定会员卡</div>
        <div class="inp-wrapper">
            <div class="item"><input type="text" class="inp" placeholder="填写卡号或者手机号"></div>
            <div class="item"><input type="text" class="inp" placeholder="填写会员密码"></div>
        </div>
        <button class="submit-btn">绑定会员卡</button>
        <div class="tools-bar clearfix">
            <router-link class="fl mc" to="/register">注册会员卡 ></router-link>
            <router-link class="fr c3" to="/forget">忘记密码 ></router-link>
        </div>
        <!-- 底部技术支持 -->
        <footer-support></footer-support>
    </div>

</template>
<script>
export default{
    name:'login'
}
</script>