<template>
    <div class="account-wrapper">
        <div class="title">会员注册</div>
        <div class="form-list">
            <cell title="手机号码">
                <input type="text" class="inp" placeholder="发生的">
            </cell>
            <cell title="会员姓名">
                <input type="text" class="inp" placeholder="猪精女孩">
            </cell>
            <popup-picker title="会员性别" popup-title="请选择您的性别" :data="sexList" v-model="sex" placeholder="请选择您的性别"></popup-picker>
            <datetime title="会员生日" v-model="birthday" placeholder="请选择您的生日"></datetime>
            <popup-picker title="婚姻状态" popup-title="请选择您的婚姻状态" :data="marriaList" v-model="marria" placeholder="请选择您的婚姻状态"></popup-picker>
            <popup-picker title="登记店面" popup-title="请选择您的登记店面" :data="storeList" v-model="store" placeholder="请选择您的登记店面"></popup-picker>
            <cell title="推荐卡号">
                <input type="text" class="inp" placeholder="推荐人手机号">
            </cell>
            <cell title="会员权益" is-link value="会员"></cell>

            <cell title="会员权益" is-link :arrow-direction="isShow ? 'up' : 'down'" @click.native="isShow = !isShow"></cell>
            <div class="membership" :class="isShow?'act':''">
                <div class="sub-title">一、积分：</div>
                    1、消费即享积分，1000元积100分。<br/>
                    2、会员推荐制，推荐人可以得到被推荐人积分的10%。<br/>
                    3、会员等级制，注册即享金卡，积满6000积分升级为白金卡、积满12000积分升级为钻石卡。白金卡1.2倍积分、钻石卡1.5倍积分。<br/>
                    4、会员日，会员可享受会员日当日双倍积分，专享会员活动。<br/>
                <div class="sub-title">二、礼品：</div>
                    1、会员生日当天可到店里领取生日礼品一份：<br/>
                    ①金卡会员（2000积分以下）生日当天可到店领取精美陶瓷水杯一个，<br/>
                    ②金卡会员（2000积分以上）生日当天可到店免费领取价值68元蛋糕券一张，<br/>
                    ③铂金会员生日当天可到店免费领取价值88元蛋糕券一张，<br/>
                    ④钻石会员生日当天可到店免费领取价值118元蛋糕券一张。<br/>
                <div class="sub-title">三、积分换购：</div>
                    1、积分可兑换各种精美礼品，各种优惠券。<br/>
                    2、可享受积分加现金换购活动。<br/>
                <div class="sub-title">四、优惠券：</div>
                    1、会员生日当天可领取专属优惠券，金卡会员限购黄金10克，每克可优惠4元；限购铂金10克，每克可优惠10元。会员生日当天铂金卡限购黄金10克，每克可优惠6元；限购铂金10克，每克可优惠15元。<br>
                    2、2000积分可以兑换100元优惠券，购买钻石，K金、翡翠满1000元立减100元；购买3D手串指定珠串立减100元。(优惠券无法与店内活动同时使用)<br/>
                <div class="sub-title">五、积分攻略：</div>
                    1、推荐亲友注册会员，亲友消费时产生的消费积分，按10%的比例作为奖励积分发放推荐人！<br/>
                    2、每日签到亦可享受积分，第一次签到20积分，每日签到5积分，连续7天签到之后每天10积分，连续30天签到之后每天15积分。<br/>
                    3、会员积分仅限本人使用，不得转借他人使用。<br/>
                    4、会员积分、优惠券不可与活动期间政策同时使用。<br/>
                    5、活动期间折扣和特价产品不享受积分。<br/>
            </div>
        </div>
        <button class="submit-btn">立即注册</button>
        <div class="tar tools-bar"><router-link class="mc" to="/login">我已有会员卡，去登录 ></router-link></div>
        <!-- 底部技术支持 -->
        <footer-support></footer-support>
    </div>
</template>

<script>
import { Group, Cell, PopupPicker, Datetime } from 'vux'
export default{
    name:'register',
    data(){
        return{
            sex:['男'],
            marria:['未婚'],
            store:['聚焦科技1'],
            birthday: '2015-11-12',
            sexList:[['男','女']],
            marriaList:[['未婚','已婚']],
            storeList:[['聚焦科技1','聚焦科技2','聚焦科技3','聚焦科技4','聚焦科技5','聚焦科技6','聚焦科技7','聚焦科技8']],
            isShow:false // 是否显示会员权益的更多内容
        }
    },
    methods:{
        onChange:function(value){
            console.log(value)
        }
    },
    components:{
        Group,
        Cell,
        PopupPicker,
        Datetime
    }
}
</script>