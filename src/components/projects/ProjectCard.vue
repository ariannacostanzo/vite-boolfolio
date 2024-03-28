<script>
export default {
    name: 'ProjectCards',
    props: { project: Object },
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
                <img @if="project.image" :src="project.image" class="img-fluid rounded-start" :alt="project.title">
            </div>
            <div class="col-md-8 ">
                <div class="card-body h-100 d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ abstract }}</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <p class="card-text"><small class="text-body-secondary"> Creato: {{ creationDate }}</small></p>
                        <span class="badge text-black" :style="{ backgroundColor: project.type.color }">{{
                            project.type.label }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.card {
    height: 200px;
    .img-container {
        height: 199px;
        img {
            height: 100%;
        }
    }
}
</style>