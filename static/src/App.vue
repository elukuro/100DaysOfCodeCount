<template>
  <div id="app">
    <router-view v-bind:fetchDataValue="getData" v-bind:fetchCurrentMonth="getCurrentMonth"></router-view>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
export default {
  name: 'app',
  data(){ 
    return{
      
    }
  },
  components: {
    
  },
  computed:{
    ...mapGetters({
      getData:'fetch/getData',
      getCurrentMonth:'fetch/getCurrentMonth'
    })
  },
  mounted(){
    if(this.$route.params.id!==undefined){
      if(this.$route.params.id ==localStorage.getItem('ACCOUNT')){
        this.fetchApi(this.$route.params.id)
      }else{
        localStorage.setItem('ACCOUNT',this.$route.params.id);
        localStorage.removeItem('data');
        this.fetchApi(this.$route.params.id)
      }
    }
  },
  methods:{
    ...mapActions({
      fetchApi:'fetch/fetchData',
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:20px 10px 0px 10px;
}
</style>
