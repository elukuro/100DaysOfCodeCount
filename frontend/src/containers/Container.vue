<template>
    <div v-cloak>
        <div v-if="fetchDataValue=='false'">
            <div class="image_loading">
                <h3>Someting wrong!</h3>
            </div>
        </div>
        <div v-if="fetchDataValue.data">
             <div v-if="fetchDataValue.data.length == 0">
                    <p>Sorry but you dont have any campaign #100daysofcode</p>
            </div>
            <div v-else class="container main">
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
            <div v-if="this.params_id!==undefined">
                <nprogress-container></nprogress-container>
                <div  class="image_loading">
                    <img src="./../../public/plant.png" width="40%"/>
                    <p>generating...</p>
                </div>
            </div>
            <div v-else-if="this.params_id==undefined">
                <b-modal :active.sync="isCardModalActive" scroll="keep">
                    <form action="" v-on:submit.prevent="generate">
                        <div class="modal-card" style="width: 50%;margin:0 auto;">
                            <header class="modal-card-head">
                                <p class="modal-card-title">Hi, You Are Awesome 😎</p>
                            </header>
                            <section class="modal-card-body">
                                <b-field>
                                    <b-input
                                        type="text"
                                        v-model="text"
                                        placeholder="Put your twitter account name here"
                                        required>
                                    </b-input>
                                </b-field>
                            </section>
                            <footer class="modal-card-foot">
                                <button class="button is-default is-pulled-right">generate 😏</button>
                            </footer>
                        </div>
                    </form>
                </b-modal>
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
            params_id:this.$route.params.id,
            isCardModalActive: true,
            text:null,
        }
    },
    components:{
        NprogressContainer,
        UserComponent,
        DataComponent,
        SideComponent

    },
    methods:{
        generate(){
            //this.$router.push('/test')
            window.location.href =`http://localhost:8080/${this.text}`
        }
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
        overflow:hidden;
    }
    .main{
        margin-top:60px;
    }
    .article{
        border-radius:10px;
    }
    .image_loading{
        width:30%;
        margin:20% auto;
        display:block;
        h3{
            font-size: 40px;
        }
    }
    .modal-card{
        text-align:left;
    }
    
</style>


