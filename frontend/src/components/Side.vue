<template>
    <div class="content article-body side">
        <div v-if="getTweet.text">
            <transition name="slide-fade">
                <template>
                <div class="card">
                    <div class="card-content">
                        <div class="content">
                            <p class="subtitle">{{getTweet.text}}</p>
                    </div>
                    </div>
                    <footer class="card-footer">
                        <span href="#" class="card-footer-item"><span class="rotate_90">🔃</span>: {{getTweet.retweet}}</span>
                        <span href="#" class="card-footer-item">❤: {{getTweet.favorite}}</span>
                    </footer>
                </div>
                </template>
             </transition>
        </div>
        <div v-else>
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        <p class="subtitle">Your tweet will apear here, just click the "green date" 👍</p>
                   </div>
                </div>
            </div>
        </div>
         <button @click="show = !show">
    Toggle render
  </button>
  <transition name="slide-fade">
    <p v-if="show">hello</p>
  </transition>

    </div>
</template>

<script>

import {mapGetters, mapActions, mapMutations} from 'vuex';
export default {
    name:'Side',
    data(){
        return{
            show:true
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


