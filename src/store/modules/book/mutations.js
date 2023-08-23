export default {
    listBooks(state, payload){
        state.booksInStore = payload.booksInStore
    },
    incrementComponentKey(state) {
        state.componentKey++;
    },
    listBookFiltered(state, payload){
        state.bookFiltered = payload.bookFiltered
    },
    resetListBookFiltered(state){
        state.bookFiltered = []
    }
}