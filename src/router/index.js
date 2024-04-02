//web routes
import { createRouter, createWebHistory } from "vue-router";
//importo le pagine che mi servono
import HomePage from "../components/pages/HomePage.vue";
import ContactUsPage from "../components/pages/ContactUsPage.vue";
import NotFoundPage from "../components/pages/NotFoundPage.vue";
import ProjectDetailPage from "../components/pages/ProjectDetailPage.vue";
//definisco le rotte

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes: [
        {path: '/', component: HomePage, name: 'home'},
        {path: '/projects/:id', component: ProjectDetailPage, name: 'project-detail'},
        {path: '/contact-us', component: ContactUsPage, name: 'contact-us'},
        {path: '/not-found', component: NotFoundPage, name: 'not-found'},
        {path: '/:pathMatch(.*)*', redirect: 'not-found'},
    ]
});

//lo esporto
export {router}