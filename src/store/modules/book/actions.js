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
    }
}