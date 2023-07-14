<template>
  <h1>TEST</h1>
  <div class="grid-champions">
  <book-card v-for="book in allBooks" :key="book.id" :dataBook="book"></book-card>
  </div>

</template>

<script>
import axios from "axios";
import BookCard from "@/components/books/BookCard";

export default {
  components: {BookCard},
  data(){
    return {
      allBooks: [],
      dataBook: null
    }
  },
  methods: {
    initComponentData(){
      axios.get('http://localhost:5000/books').then(response => {
            console.log(response.data);
            this.formatData(response.data)
          })
          .catch(error =>{
            console.log(error);
          })
    },
    formatData(jsonContent){
      this.allBooks = jsonContent
    }
  },
  beforeMount() {
    this.initComponentData()
  }

}
</script>

<style>
.grid-champions {
  display: flex;
  flex-wrap: wrap;
}
</style>