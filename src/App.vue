<template>
    <div id="app">
        <navbar @click.native="toggleSlider"></navbar>
        <slide-menu :class="{show: showSlider}"></slide-menu>
        <router-view/>
        <footbar></footbar>
    </div>
</template>

<script>
import navbar from './views/header';
import footbar from './views/footer';

import { slideMenu } from 'components';

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
        footbar
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
</style>
