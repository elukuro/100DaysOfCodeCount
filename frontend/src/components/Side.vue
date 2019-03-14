<template>
    <div class="content article-body side">
        <div v-if="getTweet.text">
            <!-- <div class="card">
                <div class="card-content">
                    <div class="content">
                        <p class="subtitle">{{getTweetData.text}}</p>
                </div>
                </div>
                <footer class="card-footer">
                    <span href="#" class="card-footer-item"><span class="rotate_90">🔃</span>: {{getTweetData.retweet}}</span>
                    <span href="#" class="card-footer-item">❤: {{getTweetData.favorite}}</span>
                </footer>
            </div> -->
            <div class="modal" v-bind:class="(getFlag==true) ? 'is-active' : ''">
                <div class="modal-background" v-on:click="closeModal"></div>
                <div class="modal-content">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <p class="subtitle">{{getTweetData.text}}</p>
                        </div>
                        </div>
                        <footer class="card-footer">
                            <span href="#" class="card-footer-item"><span class="rotate_90">🔃</span>: {{getTweetData.retweet}}</span>
                            <span href="#" class="card-footer-item">❤: {{getTweetData.favorite}}</span>
                        </footer>
                    </div>
                </div>
                <button class="modal-close is-large" aria-label="close" v-on:click="closeModal"></button>
            </div>
        </div>
        <div class="card">
            <div class="card-content">
                <div class="content">
                    <p class="subtitle">Your tweet will apear, just click the 👍 date</p>
                </div>
            </div>
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
        getTweetData(){
            return this.getTweet
        },
        ...mapGetters({
            getTweet:'action/gettersSelectedTweet',
            getFlag:'action/gettersFlag'
        })
    },
    methods:{
        closeModal(){
            return this.closeModal
        },
        ...mapActions({
            closeModal:'action/closeModal'
        })
    }
}
</script>

<style lang="scss">
    .side{
        text-align:left;
    }

    .side{
        .card-content{
            p{
                font-size:14px;
            }
        }
        .card-footer-item{
            font-size: 12px;
        }
    }
    .side{
        .rotate_90{
            -webkit-transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            transform: rotate(90deg);
        }
        /* Enter and leave animations can use different */
        /* durations and timing functions.              */
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
    }
    
</style>


