<template>
    <section class="views-home">
        <firstPage></firstPage>
        <div class="views-home-content">
            <article-item v-for="(item,index) in 4" :key="index"></article-item>
        </div>
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
