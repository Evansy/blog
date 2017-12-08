<template>
    <header class="views-navbar" :class="{'trans-bg': transBg, 'font-base': !isHome}">
        <div class="views-navbar-wrapper" :class="{hide: navbarHide}">
            <!-- logo BEGIN -->
            <router-link to="/" class="views-navbar-logo" title="Evan's Blog"></router-link>
            <!-- logo END -->

            <!-- 顶部栏 BEGIN -->
            <nav class="container views-navbar-nav">
                <router-link to="/" class="views-navbar-item font-brand">Evan's Blog</router-link>
                <a class="views-navbar-item always" href="javascript: void(0);">
                    <i>Always</i>  CREATIVE.
                </a>
                <a class="views-navbar-item" href="https://github.com/Evansy" target="_blank" title="github">
                    <i class="iconfont icon-git"></i>
                </a>
                <a class="views-navbar-item" href="https://weibo.com/sk608" target="_blank" title="微博">
                    <i class="iconfont icon-weibo"></i>
                </a>
                <a class="views-navbar-item always" href="javascript: void(0);"><i>Welcome!</i></a>
            </nav>
            <!-- 顶部栏 END -->

            <!-- 菜单图标 BEIGN -->
            <div class="views-navbar-more" @click="onMoreClick">
                MORE
            </div>
        </div>
        <span class="views-navbar-menu" @click="onMoreClick">
            <i class="iconfont icon-menu"></i>
        </span>
        <!-- 菜单图标 END -->
    </header>
</template>

<script>

import { throttle } from 'utils/extends';

export default {
    name: 'navbar',
    data(){
        return {
            navbarHide: false,      // 隐藏顶部栏
            transBg: false,         // 背景变色
            preScrollTop: 0         // 上次滚动的scrolltop值
        };
    },
    computed: {
        // 当前内是否首页
        isHome(){
            return this.$route.name === "Home";
        }
    },
    mounted(){
        this.$nextTick(()=>{
            this.screenHeight = document.body.clientHeight;              // 屏幕高度

            // 开始监听scroll事件
            this.listenScroll();
        });
    },
    methods: {
        listenScroll(){
            window.addEventListener("scroll", throttle(this.dealAnimate, 200, 200), false);
        },

        dealAnimate() {
            // 滑动距离
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

            let clientHeight = document.body.scrollHeight;  // 浏览区域高度 切换路由时会改变

            // console.log(scrollTop, clientHeight, this.screenHeight);

            // 向上滑动时显示tabbar, 到底部时也显示
            this.navbarHide = scrollTop > this.preScrollTop && (clientHeight > scrollTop + this.screenHeight);

            // 只要tabbar显示了就加背景，除了在顶部的时候
            this.transBg = !this.navbarHide && scrollTop > 10;

            // 保存本次滑动距离
            this.preScrollTop = scrollTop;
        },

        // 点击了more按钮
        onMoreClick(){
            this.$emit("on-more-click");
        }
    }
};
</script>

<style lang="scss">
    @import '~scss/views/header';
</style>
