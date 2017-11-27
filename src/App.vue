<template>
    <div id="app">
        <!-- 顶部栏 BEGIN -->
        <navbar @on-more-click="toggleSlider"></navbar>
        <!-- 顶部栏 END -->

        <!-- 右侧菜单 BEGIN -->
        <slide-menu v-model="showSlider"></slide-menu>
        <!-- 右侧菜单 END -->

        <div class="page-content">
            <transition name="router-fade" mode="out-in">
                <router-view/>
            </transition>
        </div>

        <!-- 页脚区域 BEIGN -->
        <footbar></footbar>                    
        <!-- 页脚区域 END -->
        <!-- <go-top></go-top> -->
    </div>
</template>

<script>
import navbar from './views/header';
import footbar from './views/footer';

import { slideMenu, goTop } from 'components';

export default {
    name: 'app',
    data(){
        return {
            showSlider: false
        };
    },
    components: {
        navbar,
        slideMenu,
        footbar,
        goTop
    },
    methods: {
        toggleSlider(){
            this.showSlider = !this.showSlider;
        }
    }
};
</script>

<style lang="scss">
    @import '~scss/common';

    .page-content{
        min-height: 100%;
        padding-bottom: 152px;
    }
    .views-footer{
        margin-top: -152px;
    }

    .router-fade-enter-active, .router-fade-leave-active{
        transition: opacity .3s;
    }

    .router-fade-enter, .router-fade-leave-active{
        opacity: 0;
    }
</style>
