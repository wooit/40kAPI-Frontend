export default {
    listAuthors(state, payload){
        state.listAuthorsInStore = payload.listAuthorsInStore
    },
    listSeries(state, payload){
        state.listSeriesInStore = payload.listSeriesInStore
    },
    listCharacters(state, payload){
        state.listCharactersInStore = payload.listCharactersInStore
    },
    listFactions(state, payload){
        state.listFactionsInStore = payload.listFactionsInStore
    }
}
