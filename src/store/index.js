import {createStore} from "vuex";
import authModule from "@/store/modules/auth";
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
const store = createStore({
    modules: {
        auth: authModule,
    },
    state(){
        return {

        }
    },
    getters: {

    },
    plugins: [vuexLocal.plugin]
})




export default store;