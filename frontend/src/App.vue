<template>
  <div id="app">
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
    getFetch(){
      return this.getFetch()
    },
    ...mapGetters({
      getFetch:'fetch/getData'
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
