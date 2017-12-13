import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from 'views/home'
import Detail from 'views/detail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Detail/:aid',
            name: 'Detail',
            component: Detail
        },
    ]
});
