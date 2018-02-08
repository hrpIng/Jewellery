import Vue from 'vue';
import Router from 'vue-router';

// 公共模板
import Menu from '@/page/common/menu';

// 页面加载
const Index = () => import ('@/page/index');
const Category = () => import ('@/page/category');
const Cart = () => import ('@/page/cart');
const ProDetail = () => import ('@/page/pro-detail');
const List = () => import ('@/page/list');

const Register = () => import ('@/page/account/register');
const Login = () => import ('@/page/account/login');
const Forget = () => import ('@/page/account/forget');

// 使用路由
Vue.use(Router);

const router = new Router({
  routes: [
        {
            path:'*',
            redirect:'/index'
        },
        {
            path:'/',
            redirect:'/index',
            component: Index
        },
        
        {
            path:'/',
            component: Menu,
            children:[
                {
                    path:'/index',
                    component:Index,
                    meta: {
                        level: 1,
                        title: '商城首页'
                    }
                },
                {
                    path:'/category',
                    component:Category,
                    meta: {
                        level: 1,
                        title: '商城分类'
                    }
                },
                {
                    path:'/cart',
                    component:Cart,
                    meta: {
                        level: 1,
                        title: '购物车'
                    }
                },
                {
                    path:'/list',
                    component:List,
                    meta: {
                        level: 2,
                        title: '微商城'
                    }
                },
                {
                    path:'/register',
                    component:Register,
                    meta: {
                        level: 1,
                        title: '会员注册'
                    }
                },
                {
                    path:'/login',
                    component:Login,
                    meta: {
                        level: 1,
                        title: '会员登录'
                    }
                },
                {
                    path:'/forget',
                    component:Forget,
                    meta: {
                        level: 1,
                        title: '找回密码'
                    }
                }
            ]   
        },
        {
            path:'/pro-detail',
            component:ProDetail,
            meta: {
                level: 2,
                title: '商品详情'
            }
        },
        
    ]
});

// router.beforeEach((to, from, next) => {});
// router.afterEach((to, from) => {});

export default router;
