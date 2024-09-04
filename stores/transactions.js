import {useCookie} from "nuxt/app";

export const useTransaction = defineStore("transactions", {

    state: () => ({
        currentPage: '',
        lastPage: '',
        list: '',
        code: '',
        message: '',
        amountCalc: '',
    }),
    actions: {

        async getTransactions() {
            const token = useCookie('token')

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/profile/transactions`, {
                    method: "GET", headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                this.currentPage = responseData.data.currentPage
                this.lastPage = responseData.data.lastPage
                this.list = responseData.data.list

            } catch (err) {
                console.error(err);
            }
        },

        async withdraw(amount, address) {
            const token = useCookie('token')

            const stringAmount = amount.toLowerCase().split(" ").join("")


            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/profile/wallet/withdraw?amount=${stringAmount}&wallet=${address}`, {
                    method: "POST", headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                this.code = responseData.code
                this.message = responseData.message

            } catch (err) {
                console.error(err);
            }
        },

        async getCalc() {
            const token = useCookie('token')

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/profile/wallet/withdraw-calc`, {
                    method: "GET", headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                this.amountCalc = responseData.data.amount

            } catch (err) {
                console.error(err);
            }
        },

    }

})