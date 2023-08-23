import axios from "axios";
import store from "@/store";

export default {
    async getAllBooks(context){
        //if store data is empty i make api call
        // if not data is already saved and it's fine!!!
        if(store.state.book.booksInStore.length === 0){
            await axios.get('http://localhost:5000/books').then(response => {
                const responseData = response.data

                context.commit('listBooks', {
                    booksInStore: responseData
                })
            }).catch(error =>{
                console.log(error);
            })
        }
    },

     async getAllFilteredBooks(context, filters) {
            let apiUrl = 'http://localhost:5000/books';
            // If filters are provided, add them to the API URL
            if (filters) {
                console.log('inside filters')
                const params = new URLSearchParams(filters);
                apiUrl += '?' + params.toString();
            }
            try {
                const response = await axios.get(apiUrl);
                let responseData = response.data;

                //if research with filters is empty (no result) i assign null so DisplayBooks component can detect this condition
                if(responseData.length === 0){
                    responseData = null
                    context.commit('listBookFiltered', {
                        bookFiltered: responseData,
                    });
                }

                context.commit('listBookFiltered', {
                    bookFiltered: responseData,
                });
            } catch (error) {
                console.log(error);
            }
    },

    resetListOfBooksFiltered({ commit }) {
        commit('resetListBookFiltered');
    },

    //action i need to use once i add/delete/update a book
    async refreshBooksInStore(context){
        await axios.get('http://localhost:5000/books').then(response => {
            const responseData = response.data

            context.commit('listBooks', {
                booksInStore: responseData
            })
        }).catch(error =>{
            console.log(error);
        })
    },

    incrementKeyAndRerenderDisplayBooksComponent({ commit }) {
        commit('incrementComponentKey');
    }
}