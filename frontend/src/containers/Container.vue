<template>
    <div v-cloak>
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
                                       <data-component v-bind:fetchTweetData="fetchDataValue.data" v-bind:fetchCurrentMonth="fetchCurrentMonth"/>
                                    </div>
                                    <side-component/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>  
        <div v-else>
            <div>
            <nprogress-container></nprogress-container>
            <div class="image_loading">
                <img src="./../../public/plant.png" width="40%"/>
                <p>generating...</p>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'buefy/dist/buefy.css'
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import { Snackbar } from 'buefy/dist/components/snackbar'
import UserComponent from '../components/User'
import DataComponent from '../components/Data'
import SideComponent from '../components/Side'


export default {
    name:'Container',
    props:['fetchDataValue','fetchCurrentMonth'],
    data(){
        return{
            
        }
    },
    components:{
        NprogressContainer,
        UserComponent,
        DataComponent,
        SideComponent

    },
    watch:{
        'fetchDataValue'(){
            if(this.fetchDataValue.data){
                    Snackbar.open({
                        type:'is-success',
                        actionText: 'got it',
                        message:'change url with your twitter account to generate your journey',
                        duration: 8000,
                        onAction: () => {
                        }
                    })
            }
        }
    }
}
</script>

<style lang="scss">
    @import "bulma/bulma.sass";
    html,body {
        background:#f2c94c;
        font-size: 14px;
    }
    .main{
        margin-top:60px;
    }
    .image_loading{
        width:30%;
        margin:20% auto;
    }
    
</style>


