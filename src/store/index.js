import {createStore} from "vuex";
import authModule from "@/store/modules/auth";
import VuexPersistence from 'vuex-persist';
import bookModule from "@/store/modules/book";

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    //making store persist only data from auth module
    reducer: (state) => ({ auth: state.auth })

})
const store = createStore({
    modules: {
        auth: authModule,
        book: bookModule,
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