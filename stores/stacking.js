import {useCookie} from "nuxt/app";

export const useStacking = defineStore("stacking", {

    state: () => ({
        code: '',
        plans: '',
    }),
    actions: {

        async getStacking() {
            const token = useCookie('token')

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/staking/plans`, {
                    method: "GET", headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                if (responseData.code === 200) {

                    this.plans = responseData.data

                }

            } catch (err) {
                console.error(err);
            }
        },

        async buyPlan(plad_id) {
            const token = useCookie('token')

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/staking/buy?staking_id=${plad_id}`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();

                this.code = responseData.code
                if (this.code === 200) {
                    this.code = responseData.code
                    await this.getStacking()

                }

            } catch (err) {
                console.error(err);
            }

        },
        async claim(plad_id) {
            const token = useCookie('token')

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/staking/claim?staking_id=${plad_id}`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();

                this.code = responseData.code
                if (this.code === 200) {
                    this.code = responseData.code
                    await this.getStacking()

                }

            } catch (err) {
                console.error(err);
            }

        }
    }

})