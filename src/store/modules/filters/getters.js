export default {
    getterListAllAuthors(state){
        return state.listAuthorsInStore
    },
    getterListAllSeries(state){
        return state.listSeriesInStore
    },
    getterListAllCharacters(state){
        return state.listCharactersInStore
    },
    getterListAllFactions(state){
        return state.listFactionsInStore
    }
}
