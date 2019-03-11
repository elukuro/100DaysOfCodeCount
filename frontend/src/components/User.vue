<template>
    <div class="media">
        <div class="media-center">
            <img v-bind:src="fetchUserData.avatar" class="author-image" v-bind:alt="fetchUserData.name">
        </div>
        <div class="media-content has-text-centered">
            <p class="title article-title">Hi {{fetchUserData.name}} 👋</p>
            <transition name="fade" mode="out-in">
                <p class="subtitle is-6 article-subtitle">
                    <!-- <span>@{{fetchUserData.screen_name}}</span> | <span>{{fetchUserData.desc}}</span> -->
                    Congratulations, if you read this I know that you already start your #100DaysOfCode Journey, keep it up and remember to always curious and never give up, I know it's tough sometime but believe me that it's worth it, by the way here is your ( hopefully accurate :D) monthly journey for your #100DaysOfcode, Happy Coding
                </p>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name:'user',
    props:['fetchUserData'],
    data(){
        return{

        }
    }
}
</script>

<style lang="scss">
    .article-title{
    }
    .article-subtitle{
        padding-top:10px;
        margin-bottom:20px;
        line-height: 1.5em !important;
        font-size:16px !important;
    }
    .author-image {
        position: absolute;
        top: -30px;
        left: 50%;
        width: 60px;
        height: 60px;
        margin-left: -30px;
        border: 3px solid #ccc;
        border-radius: 50%;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>


