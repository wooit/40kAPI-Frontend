<template>
  <div class="grid-champions">
    <book-card v-for="book in allBooks" :key="book.id" :dataBook="book"></book-card>
  </div>

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
      dataBook: null
    }
  },
  methods: {
    async initComponentData(){
      //dispatch actions for fetching books
      await this.$store.dispatch('getAllBooks');
        this.formatData(this.$store.getters.getterListAllBooks)
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