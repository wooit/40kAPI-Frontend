import mutations from "@/store/modules/book/mutations";
import actions from "@/store/modules/book/actions";
import getters from "@/store/modules/book/getters";

export default {
    namespaced: false,
    state(){
        return {
            booksInStore: [],
        }
    },
    mutations: mutations,
    getters: getters,
    actions: actions
}