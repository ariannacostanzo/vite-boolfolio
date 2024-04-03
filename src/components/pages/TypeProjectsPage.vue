<script>
import axios from 'axios';
import ProjectCard from '../projects/ProjectCard.vue';
const baseUrl = 'http://localhost:8000/api/types/'
export default {
    name: 'TypeProjectsPage',
    components: {ProjectCard},
    data() {
        return {
            label: '',
            projects: []
        }
    },
    methods: {
        getProjects() {
            axios.get(baseUrl + this.$route.params.slug + '/projects')
                .then((res) => {
                    this.projects = res.data.projects;
                    console.log(this.projects)
                    this.label = res.data.label
                })
                .catch(err => {
                    console.log(err)
                })
                .then()
        }
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>
    <h2>Progetti per {{ label }}</h2>
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" :isDetail="false" />
</template>

<style lang='scss' scoped>
/* style here */
</style>