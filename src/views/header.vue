<template>
    <header class="views-navbar" :class="{'trans-bg': transBg}">
        <div class="views-navbar-wrapper" :class="{hide: navbarHide}">
            <!-- logo BEGIN -->
            <a href="#" class="views-navbar-logo"></a>
            <!-- logo END -->

            <!-- 顶部栏 BEGIN -->
            <nav class="container views-navbar-nav">
                <a class="views-navbar-item font-brand" href="#">Evan's Blog</a>
                <a class="views-navbar-item always" href="javascript: void(0);">
                    <i>Always</i>  CREATIVE.
                </a>
                <a class="views-navbar-item" href="javascript: void(0);">
                    <i class="iconfont icon-git"></i>
                </a>
                <a class="views-navbar-item" href="javascript: void(0);">
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
            navbarHide: false,
            transBg: false,
            preScrollTop: 0
        };
    },
    mounted(){
        this.$nextTick(()=>{
            this.clientHeight = document.body.scrollHeight;             // 浏览区域高度
            this.screenHeight = document.body.clientHeight;              // 屏幕高度

            this.listenScroll();
        });
    },
    methods: {
        listenScroll(){
            window.addEventListener("scroll", throttle(this.dealAnimate, 200, 200), false);
        },

        dealAnimate() {
            // 滑动距离
            let scrollTop = document.documentElement.scrollTop;

            console.log(scrollTop, this.clientHeight, this.screenHeight);

            // 向上滑动时显示tabbar, 到底部时也显示
            this.navbarHide = scrollTop > this.preScrollTop && (this.clientHeight > scrollTop + this.screenHeight);

            // 只要tabbar显示了就加背景，除了在顶部的时候
            this.transBg = !this.navbarHide && scrollTop > 0;

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
