export default {
    setUser(state, payload){
        state.token = payload.token;
        state.userId = payload.userId;
        state.userName = payload.userName;
    },
    setAdmin(state, payload){
        state.isAdmin = payload.isAdmin;
    }
}