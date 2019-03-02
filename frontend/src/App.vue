<template>
  <div id="app">
      <h1>this is main vue {{$route.params.id}}</h1>
      <router-view v-bind:fetchDataValue="getFetch"></router-view>
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
    hello(){
      return this.$store.state.fetch.hello
    },
    getFetch(){
      return this.getFetch()
    },
    ...mapGetters({
      getFetch:'fetch/getData'
    })
  },
  mounted(){
    this.fetchApi('heru_hartanto')
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
  margin-top: 60px;
}
</style>
