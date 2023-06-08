import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView';
import LoginView from "@/views/auth/LoginView";
import SignupView from "@/views/auth/SignupView";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: 'home'
        },
        {
            path: '/home', component: HomeView, name: 'home',
        },
        {
            path: '/login', component: LoginView, name: 'login'
        },
        {
            path: '/signup', component: SignupView, name: 'signup'
        }
    ],
    linkActiveClass: 'active',
});

export default router;