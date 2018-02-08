<template>
    <div class="account-wrapper">
        <div class="title">重置密码</div>
        <div class="inp-wrapper">
            <div class="item"><input type="text" class="inp" placeholder="填写卡号或者手机号"></div>
            <div class="item"><input type="text" class="inp" placeholder="填写卡号或者手机号"><span class="yzm">获取验证码</span></div>
            <div class="item"><input type="text" class="inp" placeholder="请输入您的密码"></div>
        </div>
        <button class="submit-btn">重置密码登录</button>
        <div class="tools-bar clearfix">
            <router-link class="fl mc" to="/register">注册会员卡 ></router-link>
            <router-link class="fr c3" to="/login">使用密码登录 ></router-link>
        </div>
        <!-- 底部技术支持 -->
        <footer-support></footer-support>
    </div>
</template>
<script>
export default{
    name:'forget'
}
</script>