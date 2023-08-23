import mutations from "@/store/modules/filters/mutations";
import actions from "@/store/modules/filters/actions";
import getters from "@/store/modules/filters/getters";

export default {
    namespaced: false,
    state(){
        return {
            listAuthorsInStore: [],
            listSeriesInStore: [],
            listCharactersInStore: [],
            listFactionsInStore: [],

        }
    },
    mutations: mutations,
    getters: getters,
    actions: actions
}