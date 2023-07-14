import axios from "axios";

export default {
    async login(context, payload){
        await axios.post('http://localhost:5000/auth/login', {
            email: payload.email,
            password: payload.password
        })
            .then(response => {
                const responseData =  response.data
                console.log(response.data.token)

                // prendre en compte pb expiration token dans le futur car il n'expire jamais pour le moment

                localStorage.setItem('token',response.data.token)
                localStorage.setItem('userId',response.data.userId)
                localStorage.setItem('userName',response.data.userName)

                context.commit('setUser', {
                    token: responseData.token,
                    userName: responseData.userName,
                    userId: responseData.userId
                })
            })
    },
    logout(context){
        localStorage.removeItem('token');
        localStorage.removeItem('userName');

        context.commit('setUser', {
            token: null,
            userId: null,
            userName: null,
        })

    },
    tryLogin(context){
        const token = localStorage.getItem('token');
        const userName = localStorage.getItem('userName');

        if(token && userName){
            context.commit('setUser', {
                token: token,
                userName: userName
            })
        }
    }

}