import mutations from "@/store/modules/auth/mutations";
import actions from "@/store/modules/auth/actions";
import getters from "@/store/modules/auth/getters";

export default {
    namespaced: false,
    state(){
        return {
            userId: null,
            token: null,
            userName: null,
            isAdmin: null,
        }
    },
    mutations: mutations,
    getters: getters,
    actions: actions
}