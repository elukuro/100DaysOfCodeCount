<template>
    <div class="content article-body side">
        <div v-if="getTweet.text">
            <p>{{getTweet.text}}</p>
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
</style>


