<template>
  <div class="resetFilters" v-if="filtersAreActive">
    <v-btn @click="resetAllFilters"
           color="error" dark>
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </div>
  <div class="infoSearchParameterMessage">Your research parameters are saved across all the application</div>
  <div class="grid-container">
    <book-card  v-for="book in allBooks" :key="book.id" :dataBook="book"></book-card>
  </div>

  <div v-if="noResultsFound" class="noResultFound">No Result Found! <br> Reset Parameters <v-icon @click="resetAllFilters">mdi-close</v-icon></div>

</template>

<script>
import BookCard from "@/components/books/BookCard";

export default {
  components: {
    BookCard
  },
  data(){
    return {
      allBooks: [],
      dataBook: null,
      noResultsFound: false,
      filtersAreActive: false
    }
  },
  methods: {
    async fetchFullListOfBooks(){
      await this.$store.dispatch('getAllBooks');
      this.formatData(this.$store.getters.getterListAllBooks)
    },
    async fetchListOfFilteredBooks(){
      this.filtersAreActive = true
      this.formatData(this.$store.getters.getterBookFiltered)
      if(this.$store.getters.getterBookFiltered.length === 0){
        this.noResultsFound = true
      }

    },
    formatData(jsonContent){
        this.allBooks = jsonContent
    },
    resetAllFilters(){
      this.fetchFullListOfBooks()
      this.filtersAreActive = false
      this.noResultsFound = false
      this.$store.dispatch('resetListOfBooksFiltered');
      console.log(this.$store.getters.getterBookFiltered)
    }
  },
  beforeMount(){
    //if research with filters === null, i show no result and show button delete filters
    if(this.$store.getters.getterBookFiltered === null){
      this.filtersAreActive = true
      this.noResultsFound = true
      //if list filters and list book in store === 0 , it's the first time user i reaching this page, i need to fetch all books
    } else if(this.$store.getters.getterListAllBooks.length === 0 && this.$store.getters.getterBookFiltered.length === 0){
      this.fetchFullListOfBooks();
      //if list filters and list books !== 0, it means filters exist and i need to fetch the book list with filters
    } else if(this.$store.getters.getterBookFiltered.length !== 0 && this.$store.getters.getterListAllBooks.length !== 0) {
      this.fetchListOfFilteredBooks();
    }
  },
}
</script>

<style>
.resetFilters {
  position: absolute;
  right: 0;
}
.infoSearchParameterMessage{
  color: white;
  text-align: center;
  margin-top: 1rem;
}
.noResultFound {
  color: white;
  text-align: center;
  background-color: chocolate;
  margin-top: 3rem;
  margin-right: auto;
  margin-left: auto;
  border: 1rem solid chocolate;
  width: 25%;
}
.grid-container {
  display: flex;
  flex-wrap: wrap;
}
</style>