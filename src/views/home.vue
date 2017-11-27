<template>
    <section class="views-home">
        <!-- 首屏背景 BEIGN -->
        <firstPage></firstPage>
        <!-- 首屏背景 END -->
        
        <!-- 内容区域 BEGIN -->
        <div class="views-home-content container">
            <article-item v-for="(item,index) in 4" :key="index"></article-item>
        </div>
        <!-- 内容区域 END -->
    </section>
</template>

<script>
import { articleItem } from 'components';
import firstPage from './first-page';

export default {
    name: 'views-home',
    components: {
        articleItem,
        firstPage
    }
};
</script>

<style lang="scss">
    @import '~scss/views/home';
</style>
