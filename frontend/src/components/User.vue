<template>
    <div class="media">
        <div class="media-center">
            <img v-bind:src="fetchUserData.avatar" class="author-image" v-bind:alt="fetchUserData.name">
        </div>
        <div class="media-content has-text-centered">
            <p class="title article-title">Hi {{fetchUserData.name}} 👋</p>
            <p class="subtitle is-6 article-subtitle">
                <!-- <span>@{{fetchUserData.screen_name}}</span> | <span>{{fetchUserData.desc}}</span> -->
                Congratulations, if you see this I know that you already start your #100DaysOfCode Journey, keep it up and remember to always happy and never give up during your learning process, it's tough sometime but it's worth it, by the way here is your ( hopefully :D) monthly journey for #100DaysOfcode
            </p>
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
</style>


