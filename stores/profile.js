import {useCookie} from "nuxt/app";

export const useProfile = defineStore("profile", {

    state: () => ({
        profile: ''
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

    }

})