<template>
  <div id="app">
      <ol>
          <li v-for="(item,key) in getFetch.user" v-bind:key="key">{{item.avatar}}</li>
      </ol>
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
