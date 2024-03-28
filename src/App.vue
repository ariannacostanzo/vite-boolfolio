<script>
  // import something from './components/';
  import axios from 'axios';
const baseEndpoint = 'http://localhost:8000/api/projects/'
  export default {
    name: 'Boolfolio',
    data() {
      return {

      }
    },
    components: {},
    methods: {
      fetchProjects() {
        axios.get(baseEndpoint).then((res) => {
          console.log(res.data)
        })
      }
    },
    created(){
      this.fetchProjects();
    }
  }
</script>

<template>
  <button class="btn btn-primary">Funziona</button>
</template>

<style lang='scss' scoped>
  /* style here */
</style>