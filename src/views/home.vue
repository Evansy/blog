<template>
    <section class="views-home">
        <!-- 首屏背景 BEIGN -->
        <firstPage></firstPage>
        <!-- 首屏背景 END -->
        
        <!-- 内容区域 BEGIN -->
        <div class="views-home-content container">
            <article-item v-for="(item, index) in articleDatas" :article-info="item" :key="index"></article-item>
        </div>
        <!-- 内容区域 END -->
    </section>
</template>

<script>
import { articleItem } from 'components';
import firstPage from './first-page';

import { articleList } from 'apis';

export default {
    name: 'views-home',
    data(){
        return {
            articleDatas: []
        }
    },
    components: {
        articleItem,
        firstPage
    },
    created(){
        this.getArticleList();
    },
    methods: {
        // 获取文章列表
        getArticleList(){
            articleList({
                params: {
                    payload: {
                        page: 1,
                        value: '全部',
                        limit: 10
                    }
                }
            }).then(res => {
                this.articleDatas = res;
            })
        }
    }
};
</script>

<style lang="scss">
    @import '~scss/views/home';
</style>
