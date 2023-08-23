import axios from "axios";
import store from "@/store";

export default {
    async getAllAuthors(context){
        if(store.state.filters.listAuthorsInStore.length === 0){
            await axios.get('http://localhost:5000/name-authors').then(response => {
                const responseData = response.data

                context.commit('listAuthors', {
                    listAuthorsInStore: responseData
                })
            }).catch(error =>{
                console.log(error);
            })
        }
    },
    async getAllSeries(context){
        if(store.state.filters.listSeriesInStore.length === 0){
            await axios.get('http://localhost:5000/name-series').then(response => {
                const responseData = response.data

                context.commit('listSeries', {
                    listSeriesInStore: responseData
                })
            }).catch(error =>{
                console.log(error);
            })
        }
    },
    async getAllCharacters(context){
        if(store.state.filters.listCharactersInStore.length === 0){
            await axios.get('http://localhost:5000/name-main-characters').then(response => {
                const responseData = response.data

                context.commit('listCharacters', {
                    listCharactersInStore: responseData
                })
            }).catch(error =>{
                console.log(error);
            })
        }
    },
    async getAllFactions(context){
        if(store.state.filters.listFactionsInStore.length === 0){
            await axios.get('http://localhost:5000/name-factions').then(response => {
                const responseData = response.data

                context.commit('listFactions', {
                    listFactionsInStore: responseData
                })
            }).catch(error =>{
                console.log(error);
            })
        }
    },
}