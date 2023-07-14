import {createStore} from "vuex";
import authModule from "@/store/modules/auth";

const store = createStore({
    modules: {
        auth: authModule,
    },
    state(){
        return {

        }
    },
    getters: {

    }
})

export default store;