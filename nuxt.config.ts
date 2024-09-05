// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"',
        }
    },
    dev: false,

    css: ['~/assets/scss/main.scss'],
    modules: ['@nuxtjs/i18n', '@vite-pwa/nuxt', '@primevue/nuxt-module', '@vueuse/nuxt', ['@vee-validate/nuxt', {
        autoImports: true,
    }], '@pinia/nuxt', "@nuxtjs/tailwindcss", "nuxt-phosphor-icons", "v-wave/nuxt", '@nuxt/scripts'],
    plugins: ['~/plugins/vueMask.js',],
    pwa: {
        /* PWA options */
    },
    primevue: {
        options: {
            theme: {
                preset: Aura
            }
        }
    },
    pinia: {
        storesDirs: ['./stores/**'],
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
    ,
    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en.js'
            },
            {
                code: 'ru',
                file: 'ru.js'
            },
            {
                code: 'uz',
                file: 'uz.js'
            },
            {
                code: 'tr',
                file: 'tr.js'
            },

        ],
        lazy: true,
        langDir: 'lang',
        defaultLocale: 'en'
    }

})