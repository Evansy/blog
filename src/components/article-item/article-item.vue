<template>
    <article class="components-article-item">
        <div class="article-item-banner">
            <h2 class="article-item-title">{{articleInfo.title}}</h2>
        </div>
        <div class="article-item-introduce">
            <p class="article-item-meta">
                <a class="article-item-category font-blue" href="javascript: void(0);">{{articleInfo.tags}}</a> / 
                <span class="article-item-time">{{articleInfo.date}}</span>
            </p>
            <div class="article-item-content">
                <p class="article-item-text">{{articleInfo.content}}</p>
                <router-link :to="{name: 'Detail', params: {id: 10}}" class="unl font-blue article-read-more">阅读全文</router-link>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'article-item',
    props: {
        articleInfo: {
            type: Object
        }
    }
}
</script>


<style lang="scss">
    @import './style';
</style>
