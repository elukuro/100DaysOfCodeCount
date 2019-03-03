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
    getData(){
      return this.getData()
    },
    getCurrentMonth(){
      return this.getCurrentMonth()
    },
    ...mapGetters({
      getData:'fetch/getData',
      getCurrentMonth:'fetch/getCurrentMonth'
    })
  },
  mounted(){
    this.fetchApi(this.$route.params.id)
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
