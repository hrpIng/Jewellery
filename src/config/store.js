import VueLocalStorage from 'vue-localstorage';

export default {
    install(Vue) {
        // 引入插件
        Vue.use(VueLocalStorage);

        // 开始扩展
        const name = 'jewelleryStore';
        const store = {
            // 设置变量, 带有效期, 单位秒
            set: function(key, val, exp) {
                var expMs = 0;
                if (exp && !isNaN(exp) && parseInt(exp) >= 0) {
                    expMs = parseInt(exp) * 1000; // 转成毫秒
                }
                Vue.localStorage.set(key, JSON.stringify({ val: val, exp: expMs, time: new Date().getTime() }));
            },
            get: function(key) {
                var info = JSON.parse(Vue.localStorage.get(key));
                if (!info) { return null; }
                if (new Date().getTime() - info.time > info.exp) { return null; }
                return info.val;
            },
            remove: function(key) {
                Vue.localStorage.remove(key);
            }
        }

        Vue[name] = store;
        Vue.prototype[`$${name}`] = store;
    }
}
