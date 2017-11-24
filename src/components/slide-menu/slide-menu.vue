<template>
    <div class="components-slide-menu">
        <div class="slide-menu-header">
            <div class="menu-header-user">
                <img class="menu-header-image" src="~assets/logo.png" alt="Evan's Avatar">
            </div>
            <button class="menu-header-button">
                &times;
            </button>
            <div class="menu-header-dropdown slide-menu-subitem slider-dropdown font-lightgrey">
                <span>skcy@vip.qq.com</span>
                <i class="iconfont icon-arrow-down"></i>
            </div>
        </div>
        <nav class="slide-menu-list">
            <nav class="slide-menu-sublist">
                <a class="slide-menu-subitem" href="javascript: void(0);">
                    <i class="iconfont slider-menu-icon icon-git"></i>
                    <span>Email Me</span>
                </a>
                <a class="slide-menu-subitem" href="javascript: void(0);">
                    <i class="iconfont slider-menu-icon icon-git"></i>
                    <span>iskcy.com</span>
                </a>
            </nav>
            <a class="slide-menu-item" href="javascript: void(0);">
                <i class="iconfont slider-menu-icon icon-git"></i>
                <span>主页</span>
                <nav class="slide-menu-sublist">
                    <a class="slide-menu-subitem" href="javascript: void(0);">
                        <i class="iconfont icon-git"></i>
                        <span>Email Me</span>
                    </a>
                </nav>
            </a>
            <a href="javascript:void(0);" class="slide-divider"></a>
            <a href="javascript:void(0);" class="slide-menu-item friends-links">友情链接</a>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'slide-menu'
}
</script>


<style lang="scss">
    @import './style';
</style>
