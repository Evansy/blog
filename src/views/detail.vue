<template>
    <div class="article-detail">
        <div class="article-detail-header">
            <!-- <div class="article-header-bg"></div> -->
            <div class="article-header-info container">
                <h1 class="article-tile">{{content.title}}</h1>
                <span class="article-publish-time font-grey">{{content.date}}</span>
            </div>
        </div>
        <div class="article-detail-content container" v-html="content.content">
            
        </div>
        <changyan v-if="aid" :sid="aid"></changyan>
    </div>
</template>

<script>
import { changyan } from 'components';
import { articleDetail } from 'apis';
export default {
    name: 'article-detail',
    data() {
        return{
            aid: null,
            content: {}
        }
    },
    created(){
        let params = this.$route.params
        params.aid && (this.aid = params.aid);

        this.getDetail(params.aid);
    },
    components: {
        changyan
    },
    methods: {
        getDetail(aid){
            articleDetail({
                aid: aid
            }).then(res => {
                this.content = res;
            })
        }
    }
};
</script>

<style lang="scss">
    @import '~scss/views/detail';
</style>
