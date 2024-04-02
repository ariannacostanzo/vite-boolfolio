<script>
import ProjectCard from '../projects/ProjectCard.vue';
import axios from 'axios';
const baseEndpoint = 'http://localhost:8000/api/projects/'
export default {
    name: 'HomePage',
    data() {
        return {
            projects: []
        }
    },
    components: { ProjectCard },
    methods: {
        fetchProjects() {
            axios.get(baseEndpoint).then((res) => {
                this.projects = res.data
            })
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>

<template>

<ProjectCard v-for="project in projects" :project="project" />

</template>

<style lang='scss' scoped>
/* style here */
</style>