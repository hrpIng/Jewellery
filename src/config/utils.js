// 通用工具类
import Vue from 'vue';
import { getUserInfo } from '@/service/getData';

/**
 * 返回按钮统一处理
 * isHistory: 是否回退历史
 * backUrl: 返回的连接
 */
export const goBack = (isHistory, backUrl) => {
    isHistory = isHistory || false;
    backUrl = backUrl || '/';

    // 判断是否需要历史连接 && 是否有历史连接
    if (isHistory && history.length > 1 && document.referrer != "") {
        // // 判断是否登录回调。如果是则直接倒退两个页面
        // if (document.referrer.indexOf('/login.html') >= 0) {
        //     if (history.length > 2) {
        //         history.go(-2);
        //     } else {
        //         window.location = '/';
        //     }
        // }
        history.go(-1);
    } else {
        Vue.$router.push(backUrl);
    }
}

/**
 * 获取用户信息
 */
export const getStoreUserInfo = (cbFun) => {
    var _type = Vue.msmStore.get('M_MSM_USER_INFO');

    if (_type) {
        cbFun && cbFun(_type);
    } else {
        getUserInfo().then(data => {
            _type = data.results;
            // 判断是否登录
            if (data.code === 401) {
                _type = 401;
            }

            // 保存用户信息并返回
            Vue.msmStore.set('M_MSM_USER_INFO', _type, 7200);
            cbFun && cbFun(_type);
        });
    }
}

/**
 * debounce方法
 */
export const debounce = (fn, delta) => {
    var timeoutID = null;

    return function() {
        clearTimeout(timeoutID);

        var args = arguments;
        timeoutID = setTimeout(function() {
            fn.apply(null, args);
        }, delta);
    };
}

/**
* 倒计时
*/
export const 