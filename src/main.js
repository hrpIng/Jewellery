// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Page from './page';
import router from './router';
import FastClick from 'fastclick';

// 引入公共组件
import Split from './components/split';
import FooterSupport from './components/footer-support';
Vue.component(Split.name, Split);
Vue.component(FooterSupport.name, FooterSupport);
// 公共脚本
import './config/rem.js';

Vue.config.productionTip = false;
FastClick.attach(document.body);

// 全局变量
Vue.prototype.transitionName = 'mode-fade';


/* eslint-disable no-new */
Vue.prototype.$root = new Vue({
    el: '#page',
    watch: {
        '$route': function(to, from) {
            var toDepth = to.meta.level;
            var fromDepth = from.meta.level;

            if(toDepth < fromDepth){
                Vue.prototype.transitionName = 'mode-slide-left';
            }else if(toDepth > fromDepth){
                Vue.prototype.transitionName = 'mode-slide-right';
            }else{
                Vue.prototype.transitionName = 'mode-fade';
            }
        }
    },
    router,
    components: { Page },
    template: '<Page/>'
})