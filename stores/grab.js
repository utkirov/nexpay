import {useCookie} from "nuxt/app";

export const useMainPage = defineStore("main", {

    state: () => ({
        balance: '',
        videoSrc: ''
    }),
    actions: {

        async getMainPage() {
            const token = useCookie('token')

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/main`, {
                    method: "GET", headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                if (responseData.code === 200) {

                    console.log(responseData.data.balance)

                    this.balance = responseData.data.balance
                    this.videoSrc = responseData.data.video
                    console.log(this.balance.value)
                }

            } catch (err) {
                console.error(err);
            }
        }
    }

})