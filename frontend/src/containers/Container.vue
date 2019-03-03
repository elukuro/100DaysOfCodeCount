<template>
    <div>
        <div v-if="fetchDataValue=='false'">
            <h3>Someting wrong!</h3>
        </div>
        <div v-if="fetchDataValue.data">
            <div class="container main">
                <section class="articles">
                    <div class="column is-8 is-offset-2">
                        <div class="card article">
                            <div class="card-content">
                                <user-component v-bind:fetchUserData="fetchDataValue.user[0]"/>
                                <div class="columns">
                                    <div class="column is-three-quarters">
                                       <data-component v-bind:fetchTweetData="fetchDataValue.data"/>
                                    </div>
                                    <div class="column">
                                        <div class="content article-body">
                                            <p>
                                                Hi All, I make a tiny project to preview your progress based on yout tweet that using 100DaysOfcode hashtag, hopefully you will get more clear with what you have done and keep coding.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>  
        <div v-else>
            <nprogress-container></nprogress-container>
        </div>
    </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

import UserComponent from '../components/User'
import DataComponent from '../components/Data'

export default {
    name:'Container',
    props:['fetchDataValue'],
    data(){
        return{
            
        }
    },
    components:{
        NprogressContainer,
        UserComponent,
        DataComponent
    }
}
</script>

<style lang="scss">
    @import "bulma/bulma.sass";
    html,body {
        background: #F0F2F4;
        font-size: 14px;
    }
    .main{
        margin-top:60px;
    }
    
</style>


