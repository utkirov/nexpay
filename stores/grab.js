import {useCookie} from "nuxt/app";

export const useGrabbing = defineStore("grab", {

    state: () => ({
        balance: '',
        videoSrc: '',
        videoId: ''
    }),
    actions: {


        async getVideos() {

            const token = useCookie('token')

            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/earnings/videos`, {
                    method: "GET", headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });

                const responseData = await response.json();


                const randomValue = Math.floor(Math.random() * responseData.data[0].length)

                this.videoId = responseData.data[0][randomValue]


            } catch (err) {
                console.error(err);
            }

        },
        async getMainVideo() {
            const token = useCookie('token')
            try {
                const response = await fetch(`https://api.nexpay.top/api/v1/main`, {
                    method: "GET", headers: {
                        Authorization: `Bearer ${token.value}`,
                        "Content-Type": "application/json",
                    },
                });
                const responseData = await response.json();
                this.videoSrc = responseData.data.video

            } catch (err) {
                console.error(err);
            }

        }
    }

})