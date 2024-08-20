// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        layoutTransition: {name: 'layout', mode: 'out-in'}
    },

    css: ['~/assets/scss/main.scss'],
    modules: ['@primevue/nuxt-module', "@nuxtjs/tailwindcss", "nuxt-phosphor-icons", "v-wave/nuxt"],
    primevue: {
        options: {
            theme: {
                preset: Aura
            }
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/scss/mixins.scss" as *;'
                }
            }
        }
    }

})