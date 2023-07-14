import axios from "axios";

export default {
    async login(context, payload){
        await axios.post('http://localhost:5000/auth/login', {
            email: payload.email,
            password: payload.password
        })
            .then(response => {
                const responseData =  response.data
                if(response.data.isAdmin === 1){
                    context.commit('setAdmin', {
                        isAdmin: true
                    })
                }

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
        localStorage.removeItem('userId');

        context.commit('setUser', {
            token: null,
            userId: null,
            userName: null,
        })
        context.commit('setAdmin', {
            isAdmin: null,
        })

    },
    tryLogin(context){
        const token = localStorage.getItem('token');
        const userName = localStorage.getItem('userName');
        const userId = localStorage.getItem('userId');

        //check if loggedIn
        if(token && userName){
            context.commit('setUser', {
                token: token,
                userName: userName
            })
        }

        //check if isAdmin
        //api call check if admin
        if(userId){
            axios.post('http://localhost:5000/admin/verify-admin', {id: userId}).then(result => {
                console.log(result)
                context.commit('setAdmin', {
                    isAdmin: true,
                })
            }).catch(err => {
                console.log(err)
                context.commit('setAdmin', {
                    isAdmin: null,
                })
            })
        }
    },
}