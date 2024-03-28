<script>
  import AppHeader from './components/AppHeader.vue';
  import axios from 'axios';
const baseEndpoint = 'http://localhost:8000/api/projects/'
  export default {
    name: 'Boolfolio',
    data() {
      return {
        projects: []
      }
    },
    components: {AppHeader},
    methods: {
      fetchProjects() {
        axios.get(baseEndpoint).then((res) => {
          console.log(res.data)
          this.projects = res.data
        })
      }
    },
    created(){
      this.fetchProjects();
    }
  }
</script>

<template>
  <!-- header -->
  <AppHeader/>
  <!-- header -->

  <div class="container my-4">
    <p v-for="project in projects">
      {{ project.title }}
    </p>
  </div>

</template>

<style lang='scss' scoped>
  /* style here */
</style>