<template>
    <div class="content article-body side">
        <div v-if="getTweet.text">
            <p>{{getTweet.text}}</p>
            <span> retweet:{{getTweet.retweet}}</span> 
            <span> favorite:{{getTweet.favorite}}</span>
        </div>
        <div v-else>
            <p>Your tweet will apear here when you press the green button</p>
        </div>

    </div>
</template>

<script>

import {mapGetters, mapActions, mapMutations} from 'vuex';
export default {
    name:'Side',
    data(){
        return{

        }
    },
    computed:{
        getTweet(){
            return this.getTweet()
        },
        ...mapGetters({
            getTweet:'action/gettersSelectedTweet'
        })
    }
}
</script>

<style lang="scss">
    .side{
        text-align:left;
    }
    .slide-fade-enter-active {
    transition: all .3s ease;
    }
    .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }
</style>


