import {useCookie} from "nuxt/app";

export const useTeam = defineStore("team", {

    state: () => ({
        balance: '',
        referrals: ''
    }),
    actions: {

        async getBalance() {
            const token = useCookie('token')

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/profile/team`, {
                    method: "GET", headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                this.balance = responseData.data


            } catch (err) {
                console.error(err);
            }
        },
        async getReferrals() {
            const token = useCookie('token')

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/profile/team/referrals`, {
                    method: "GET", headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                this.referrals = responseData.data


            } catch (err) {
                console.error(err);
            }
        }
    }

})