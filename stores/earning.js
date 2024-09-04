import {useCookie} from "nuxt/app";

export const useEarning = defineStore("earning", {

    state: () => ({
        code: '',
        plans: '',
        currentPlan: ''
    }),
    actions: {

        async getCurrentPlan() {
            const token = useCookie('token')

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/earnings/current-plan`, {
                    method: "GET", headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                this.currentPlan = responseData.data

            } catch (err) {
                console.error(err);
            }
        },

        async getPlans() {
            const token = useCookie('token')

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/earnings/upgrade-plan`, {
                    method: "GET", headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                this.plans = responseData.data

            } catch (err) {
                console.error(err);
            }
        },


        async earn() {
            const token = useCookie('token')
            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/earnings/earn`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                console.log('asdasdasd')
                this.code = responseData.code

            } catch (err) {
                console.error(err);
            }

        },
    }

})