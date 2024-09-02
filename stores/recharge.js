import {useCookie} from "nuxt/app";

export const useRecharge = defineStore("recharge", {

    state: () => ({
        address: '',
    }),
    actions: {

        async getRecharge() {
            const token = useCookie('token')

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/profile/wallet/recharge/address`, {
                    method: "GET", headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                if (responseData.code === 200) {

                    this.address = responseData.data.address

                }

            } catch (err) {
                console.error(err);
            }
        }
    }

})