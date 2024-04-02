//web routes
import { createRouter, createWebHistory } from "vue-router";
//importo le pagine che mi servono
import HomePage from "../components/pages/HomePage.vue";
import ContactUsPage from "../components/pages/ContactUsPage.vue";
//definisco le rotte

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/contact-us', component: ContactUsPage},
    ]
});

//lo esporto
export {router}