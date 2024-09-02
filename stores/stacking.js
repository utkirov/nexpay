import {useCookie} from "nuxt/app";

export const useStacking = defineStore("stacking", {

    state: () => ({
        levels: '',
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

                    this.levels = responseData.data

                }

            } catch (err) {
                console.error(err);
            }
        }
    }

})