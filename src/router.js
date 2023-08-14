import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView';
import LoginView from "@/views/auth/LoginView";
import SignupView from "@/views/auth/SignupView";
import BooksList from "@/views/books/BooksList";
import store from "@/store/index";
import UserSection from "@/components/user-section/UserSection";
import AdminSection from "@/components/admin-section/AdminSection";

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
            path: '/books', component: BooksList, name: 'books', // meta: { requiresAuth: true }
        },
        {
            path: '/login', component: LoginView, name: 'login', meta: { requiredNotBeingAuth: true }
        },
        {
            path: '/logout', name: 'logout', meta: { requiresAuth: true, redirectHome: true }
        },
        {
            path: '/signup', component: SignupView, name: 'signup', meta: { requiredNotBeingAuth: true }
        },
        {
            path: '/user-section', component: UserSection, name: 'userSection', meta: { requiresAuth: true }
        },
        {
            path: '/admin-section', component: AdminSection, name: 'adminSection', meta: { requiresAuth: true, adminRole:true }
        }
    ],
    linkActiveClass: 'active',
});

router.beforeEach(function (to, _, next){
    //redirect to home if user is logging out
    if(to.meta.redirectHome){ // check redirect property route
        next('/home');
    } else if(to.meta.adminRole && store.getters.isAdmin === false){
        console.log(store.getters.isAdmin)
        next('/home');
        //reditrct login if user want access url that needs authentification and is not yet authenticated
    } else if(to.meta.requiresAuth && !store.getters.isAuthenticated){
        next('/login');
        //redirect to home if user already loggedIn
    } else if(to.meta.requiredNotBeingAuth && store.getters.isAuthenticated){
        next('/home')
    } else {
        next()
    }
})

export default router;