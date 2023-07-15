export default {
    userId(state){
        return state.userId
    },
    token(state){
        return state.token
    },
    userName(state){
        return state.userName
    },
    isAuthenticated(state){
        return !!state.token
    },
    isAdmin(state){
        return state.isAdmin
    }
}