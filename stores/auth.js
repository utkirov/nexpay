import {useCookie} from "nuxt/app";

export const useUserAuth = defineStore("user", {
    state: () => ({

        responce: {
            code: '', message: ''
        }

    }), actions: {

        async logIn(phone, password) {

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/auth/login?phone=${phone}&password=${password}`, {
                    method: "POST", headers: {
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();
                if (responseData.code === 200) {
                    this.saveToken(responseData.data.token)
                }
                this.responce.code = responseData.code
                this.responce.message = responseData.message


            } catch (err) {
                console.error(err);
            }
        },

        async signUp(name, phone, password, secret_key, referrer) {

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
                this.responce.code = responseData.code
                this.responce.message = responseData.message


            } catch (err) {
                console.error(err);
            }
        },
        saveToken(token) {
            console.log(token)
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