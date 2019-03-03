<template>
     <div class="data-list">
        <div v-for="(item,key) in fetchTweetData" v-bind:key="key" class="box box-item is-primary">
            
        </div>
    </div>
</template>

<script>
export default {
    name:'data',
    props:['fetchTweetData']
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
        padding:12px;
        display:block;
        margin:3px !important;
        float:left;
    }
</style>
