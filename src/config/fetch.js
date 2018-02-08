import Vue from 'vue';
import Axios from 'axios';
import store from '../store';

var qs = require('qs');

export default async({ type = 'GET', url = '', data = {}, cache = null, loginVerify = true, isLoading = true }) => {
    type = type.toUpperCase();
    url = '/api/' + url;


    // 初始化Axios。避免拦截到多次请求的bug
    const axios = Axios.create();

    // // 添加请求拦截器
    // Axios.interceptors.request.use(function(config) {
    //     console.log(config,'????');
    //     // 在发送请求之前做些什么
    //     return config;
    // }, function(error) {
    //     // 对请求错误做些什么
    //     return Promise.reject(error);
    // });

    // 添加响应拦截器
    axios.interceptors.response.use(function(response) {
        Vue.$vux.loading.hide();
        try {
            let _data = response.data;
            if (_data.code === 401 && loginVerify) {
                Vue.msmStore.remove('M_MSM_USER_INFO');
                return new Promise(() => {});
            }

            // 过滤其他错误并提示
            if (_data.code !== 200 && _data.code !== 401) {
                // 提示错误
                Vue.$vux.toast.show({
                    type: 'warn',
                    text: _data.msg
                })
                return Promise.reject(_data);
            }

            // 判断是否需要缓存数据
            if (cache && !store.getters.inspectId(cache)) {
                // 把请求到的数据放进vuex中
                cache.data = _data;
                store.dispatch('addConsultId', cache);
            }

            return _data;
        } catch (error) {
            return response;
        }
    }, function(error) {
        Vue.$vux.loading.hide();
        // 提示错误
        Vue.$vux.toast.show({
            type: 'warn',
            text: '服务器请求错误。请联系客服处理'
        })
        // 返回出错信息
        return Promise.reject({
            code: error.response.status,
            msg: error.response.statusText,
            results: {},
        });
    });

    // 判断是否获取缓存且数据是否存在
    if (cache && store.getters.inspectId(cache)) {
        // 不用再次请求数据，直接返回缓存数据
        return store.dispatch('getCacheData', cache);
    }

    // 提交前准备
    Vue.$vux.toast.hide();
    // 判断是否静默加载
    if (isLoading) {
        Vue.$vux.loading.show();
    }

    // 开始ajax操作
    var _json = {
        method: type,
        url: url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }
    if (type === "GET") {
        _json.params = data;
    } else if (type === "POST") {
        _json.data = qs.stringify(data);
    }
    return await axios(_json);
}
