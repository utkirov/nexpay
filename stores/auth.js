import {useCookie} from "nuxt/app";

export const useUserAuth = defineStore("user", {
    state: () => ({

        code: '',
        message: ''

    }), actions: {

        async logIn(phone, password) {

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/auth/login?phone=${phone}&password=${password}`, {
                    method: "POST", headers: {
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                this.code = responseData.code
                this.message = responseData.message
                if (responseData.code === 200) {
                    this.saveToken(responseData.data.token)
                }



            } catch (err) {
                console.error(err);
            }
        },

        async signUp(name, phone, password, referrer, secret_key) {

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/auth/register?phone=${phone}&name=${name}&password=${password}&secret_key=${secret_key}&referrer=${referrer}`, {
                    method: "POST", headers: {
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                if (responseData.code === 200) {
                    this.saveToken(responseData.data.token)
                }
                this.code = responseData.code
                this.message = responseData.message


            } catch (err) {
                console.error(err);
            }
        },
        saveToken(token) {
            const tokens = useCookie('token');
            tokens.value = token
            this.navigate()
        },
        navigate() {
            navigateTo('/')
        },
        logOut() {
            const token = useCookie('token')
            token.value = null
            navigateTo('/')
        }
    },
})