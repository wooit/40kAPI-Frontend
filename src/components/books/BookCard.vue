<template>
<!-- 3 options for user => add a favorit book // has already read a book // add to reading list -->
<!-- ADD TO FAVORITE  mdi: heart-outline (empty) // heart (full) -->
<!-- ALREADY READ:  mdi: heart-outline (empty) // heart (full) -->

  <!--  I will need a check is user is logged in -->
  <!--  <div v-if="isLoggedIn"> -->
  <div class="card-container">

      <div class="img-section" >
        <button @click="openDetailedPoppin">
          <img :src="newFormatImg" :alt="dataBook.title" class="img-cover">
        </button>
      </div>

    <div class="icons-section" v-if="isLoggedIn">
      <button>
              <!--  I liked it  -->
        <v-icon icon="mdi:mdi-heart-outline"></v-icon>
        <v-icon icon="mdi:mdi-heart"></v-icon>
      </button>

      <button>
              <!-- Already Read -->
        <v-icon icon="mdi:mdi-star-check"></v-icon>
        <v-icon icon="mdi:mdi-star-minus"></v-icon>
      </button>

      <button>
              <!-- Add to playlist / will read later -->
        <v-icon icon="mdi:mdi-playlist-star"></v-icon>
      </button>
    </div>

      <div class="title-section">
        {{ dataBook.title }}
      </div>
  </div>


    <v-dialog v-model="poppinIsActive" width="auto">
      <v-card>
        <book-zoomed class="detailed-book-poppin" :dataBook="dataBook"></book-zoomed>
      </v-card>
    </v-dialog>

</template>

<script>
import BookZoomed from "@/components/books/BookZoomed";
export default {
  components: {BookZoomed},
  props: ['dataBook'],
  data(){
    return {
      newFormatImg: null,
      poppinIsActive: false,
    }
  },
  methods: {
    formatImg(){
      this.newFormatImg = this.dataBook.img_url.replace('xlarge','standard')
    },
    openDetailedPoppin(){
      this.poppinIsActive = true
    }
  },
  computed: {
    isLoggedIn(){
      return this.$store.getters.isAuthenticated;
    },
  },
  beforeMount() {
    this.formatImg()
  }
}
</script>
<style>
.card-container {
  margin: 1rem;
  background-color: chocolate;
  max-width: 150px;
}
.img-section {
  background-color: #121112;
}
.img-cover {

}
.icons-section {
  display: flex;
  flex-direction: row;
  justify-content: center
}
.title-section{
  display: flex;
  flex-direction: row;
  justify-content: center;
  word-wrap: break-word;
  flex-wrap: wrap;
}


.detailed-book-poppin {
  height: 80vh;
  width: 60vw;
  padding: 2rem;
  background-color: white;
  border: cyan solid;
  /*  remove scrollbar */
  overflow: hidden;
}
</style>

// https://www.blacklibrary.com/Images/Product/DefaultBL/standard/BLPROCESSED-01630181408FR-HH-Vol-08-ebook-Cover-2022.jpg
// https://www.blacklibrary.com/Images/Product/DefaultBL/xlarge/BLPROCESSED-01630181408FR-HH-Vol-08-ebook-Cover-2022.jpg