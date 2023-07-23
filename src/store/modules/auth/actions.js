import axios from "axios";

export default {
    async login(context, payload){
        await axios.post('http://localhost:5000/auth/login', {
            email: payload.email,
            password: payload.password
        })
            .then(response => {
                console.log(response)
                const responseData =  response.data

                // prendre en compte pb expiration token dans le futur car il n'expire jamais pour le moment

                localStorage.setItem('token',response.data.token)
                localStorage.setItem('userId',response.data.userId)
                localStorage.setItem('userName',response.data.userName)

                if(!response.data.isAdmin){
                    context.commit('setUser', {
                        token: responseData.token,
                        userName: responseData.userName,
                        userId: responseData.userId,
                        isAdmin: false
                    })
                } else {
                    context.commit('setUser', {
                        token: responseData.token,
                        userName: responseData.userName,
                        userId: responseData.userId,
                        isAdmin: true
                    })
                }

            })
    },
    logout(context){
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        localStorage.removeItem('userId');
        // need to do api call to remove cookie httpOnly

        context.commit('setUser', {
            token: null,
            userId: null,
            userName: null,
            isAdmin: null,
        })
    },
}