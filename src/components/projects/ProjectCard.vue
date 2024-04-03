<script>
export default {
    name: 'ProjectCards',
    props: { project: Object, isDetail: Boolean },
    computed: {
        abstract() {
            if (this.project.description.length < 100) {
                return this.project.description
            }
            const abstract = this.project.description.slice(0, 100);
            return abstract + '...';
        },
        creationDate() {
            const date = new Date(this.project.created_at);

            let day = date.getDate();
            let month = date.getMonth();
            const year = date.getFullYear();
            let hours = date.getHours();
            let minutes = date.getMinutes();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;
            if (hours < 10) hours = '0' + hours;
            if (minutes < 10) minutes = '0' + minutes;


            return `${day}/${month}/${year} alle ${hours}:${minutes}`
        }
    }
}
</script>

<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4 img-container">
                <img v-if="project.image" :src="project.image" class="img-fluid rounded-start" :alt="project.title">
                <img v-else src="https://i1.wp.com/potafiori.com/wp-content/uploads/2020/04/placeholder.png?ssl=1"
                    class="img-fluid rounded-start placeholder" alt="placeholder">
            </div>
            <div class="col-md-8 ">
                <div class="card-body h-100 d-flex flex-column justify-content-between">
                    <div>
                        <div class="d-flex align-items-center justify-content-between">

                            <h5 class="card-title">{{ project.title }}</h5>
                            <routerLink v-if="project.type" :to="`types/${project.type.slug}/projects`">
                                <span class="badge text-black rounded-pill"
                                    :style="{ backgroundColor: project.type?.color }">{{
                                    project.type.label }}</span>
                            </routerLink>

                        </div>
                        <p class="card-text">{{ isDetail ? project.description : abstract }}</p>

                        <div v-if="project.technologies?.length">

                            <span v-for="tech in project.technologies" :key="tech.id" class="badge me-2"
                                :style="{ backgroundColor: tech.color }">{{
                                tech.label }}</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <p class="card-text"><small class="text-body-secondary"> Creato: {{ creationDate }}</small></p>

                        <RouterLink v-if="!isDetail" class="btn btn-primary" :to="`/projects/${project.slug}`">Guarda
                            dettagli</RouterLink>
                        <button v-else class="btn btn-primary" @click="$router.back()">Torna indietro</button>

                        <!-- oppure  -->
                        <!-- <RouterLink class="btn btn-primary" :to="{name: 'project-detail', params: {id: post.id}}">Guarda dettagli</RouterLink> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.card-text {
    margin: 0;
}

.placeholder {
    height: 200px;
    width: 400px;
    cursor: auto;
}
</style>