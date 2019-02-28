<template>
  <div id="app">
    {{hello}}
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
export default {
  name: 'app',
  data(){
    return{
      username:"test"
    }
    
  },
  components: {
    
  },
  computed:{
    hello(){
      return this.$store.state.fetch.hello
    },
  },
  mounted(){
    this.fetchApi()
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
