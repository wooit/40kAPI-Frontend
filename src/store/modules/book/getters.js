export default {
    getterListAllBooks(state){
        return state.booksInStore
    },
    getterComponentKey(state){
        return state.componentKey
    },
    getterBookFiltered(state){
        return state.bookFiltered
    }
}