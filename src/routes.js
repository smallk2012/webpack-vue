// 引用模板
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
 
export default new Router({
    routes:[
        {
            path:'/',
            component:resolve => require.ensure([], () => resolve(require('./views/home.vue')), 'home')
        },
        {
            path:'/about',
            component:resolve => require.ensure([], () => resolve(require('./views/about.vue')), 'about')
        }
    ]
})
