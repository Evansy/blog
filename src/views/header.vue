<template>
    <header class="views-navbar" :class="{hide: navbarHide}">
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
        <div class="views-navbar-more">
            MORE
        </div>
        <span class="views-navbar-menu">
            <i class="iconfont icon-menu"></i>
        </span>
        <!-- 菜单图标 END -->
    </header>
</template>

<script>
export default {
    name: 'navbar',
    data(){
        return {
            navbarHide: false
        };
    },
    mounted(){
        this.$nextTick(()=>{
            this.listenScroll();
        });
    },
    methods: {
        listenScroll(){
            // let content = document.querySelector('html');
            let clientHeight = document.documentElement.clientHeight;   // 浏览区域高度
            let screenHeight = document.body.clientHeight;              // 屏幕高度

            let preScrollTop = 0;                                       // 上次滑动距离

            window.addEventListener("scroll", e => {
                // 滑动距离
                let scrollTop = document.documentElement.scrollTop;

                // 向下滑动时隐藏tabbar
                this.navbarHide = scrollTop > 0;

                // 向上滑动时显示tabbar
                this.navbarHide = scrollTop > preScrollTop;

                // 保存本次滑动距离
                preScrollTop = scrollTop;
            }, false);
        }
    }
};
</script>

<style lang="scss">
    @import '~scss/views/header';
</style>
