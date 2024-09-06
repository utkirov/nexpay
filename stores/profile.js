import {useCookie} from "nuxt/app";

export const useProfile = defineStore("profile", {

    state: () => ({
        profile: '',
        faq: ''
    }),
    actions: {

        async getProfileInfo() {
            const token = useCookie('token')

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/profile/info`, {
                    method: "GET", headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                this.profile = responseData.data

            } catch (err) {
                console.error(err);
            }
        },
        async getFAQ() {
            const token = useCookie('token')
            const lang = useCookie('lang')

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/faq?lang=${lang.value}`, {
                    method: "GET", headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                this.faq = responseData.data

            } catch (err) {
                console.error(err);
            }
        },

    }

})