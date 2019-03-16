<template>
     <div class="data-list">
       
        <h2 class="month_name">Your #100DaysOfcode in {{fetchCurrentMonth.monthName}}</h2>
        <div v-for="(day,key) in fetchCurrentMonth.monthLength" v-bind:key="key">
             <div class="box box-item is-dark">
                <div v-for="(item,key) in fetchTweetData" v-bind:key="key" class="active_date" v-on:click="detailData(item)">
                    <span class="active_emoji" v-if="getOnlyDate(item.created_at) == day">👍</span>
                    <span class="tag is-success" v-if="getOnlyDate(item.created_at) == day">{{day}}</span>
                </div>
                <span class="tag is-warning">{{day}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
export default {
    name:'Data',
    props:['fetchTweetData','fetchCurrentMonth'],
    data(){
        return{

        }
    },
    computed:{

    },
    methods:{
        getOnlyDate(date){
            let day=new Date(date)
            if(day.getMonth()== this.fetchCurrentMonth.monthCount){
                return day.getDate();
            }  
        },
        detailData(item){
            return this.detailData(item)
        },
        ...mapActions({
            detailData:'action/detailData',
        })
        
    }
}
</script>


<style lang="scss">
.media-center {
    display: block;
    margin-bottom: 1rem;
    }
    .media-content {
    margin-top: 3rem;
    }
    .box-item{
        width:10px !important;
        height:10px !important;
        display:block;
        margin:6px !important;
        float:left;
    }
    .data-list{
        clear:both;
        overflow:hidden;
        .month_name{
            font-size:20px;
            font-weight: 500;
            text-align: left;
            margin-bottom:10px;
        }
        .tag{
            position: relative;
            top:-1px;
            left:0px;
        }
        .active_date{
            position:absolute;
            z-index:1;
            cursor:pointer;
        }
        .active_emoji{
            position:absolute;
            top:-10px;
            left:-9px;
        }
    }
</style>
