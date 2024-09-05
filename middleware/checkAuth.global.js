import {useCookie} from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('token')
    if (!token.value) {
        if (to.path === '/download') {

        } else if (to.path !== '/login' && to.path !== '/signup') {
            return navigateTo('/login')
        }


    } else {
        if (to.path === '/login' || to.path === '/signup') {
            return navigateTo('/')
        }
    }

})