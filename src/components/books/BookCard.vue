<template>
<!-- 3 options for user => add a favorit book // has already read a book // add to reading list -->
<!-- ADD TO FAVORITE  mdi: heart-outline (empty) // heart (full) -->
<!-- ALREADY READ:  mdi: heart-outline (empty) // heart (full) -->

  <!--  I will need a check is user is logged in -->
  <!--  <div v-if="isLoggedIn"> -->
  <div class="" style="background-color: orange; margin: 20px">

      <div class="img" >
        <button class="button-container" @click="openDetailedPoppin">
          <img :src="newFormatImg" :alt="dataBook.title" style="">
        </button>
      </div>

    <div v-if="isLoggedIn" style="background-color: lightgreen; display: flex; flex-direction: row; justify-content: center">
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

      <div class="title" style="background-color: yellow; display: flex; flex-direction: row; justify-content: center">
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
.button-container {
  background-color: white;
  border-radius: 10px;
  border-color: black;
}

.detailed-book-poppin {
  /*height: 80vh;*/
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