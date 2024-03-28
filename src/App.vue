<script>
  import AppHeader from './components/AppHeader.vue';
  import ProjectCard from './components/projects/ProjectCard.vue';
  import axios from 'axios';
const baseEndpoint = 'http://localhost:8000/api/projects/'
  export default {
    name: 'Boolfolio',
    data() {
      return {
        projects: []
      }
    },
  components: { AppHeader, ProjectCard },
    methods: {
      fetchProjects() {
        axios.get(baseEndpoint).then((res) => {
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
  <AppHeader />
  <!-- header -->

  <div class="container my-5 ">
      <ProjectCard v-for="project in projects" :project="project" />
  </div>

</template>

<style lang='scss' scoped>
  /* style here */
</style>./components/projects/ProjectCard.vue