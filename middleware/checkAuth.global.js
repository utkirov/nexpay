import {useCookie} from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('token')
    if (!token.value) {

        if (to.path !== '/login' && to.path !== '/signin') {
            return navigateTo('/login')
        }

    } else {
        if (to.path === '/login' || to.path === '/signin') {
            return navigateTo('/')
        }
    }

})