<template>
  <div>
    <button class="button-container" @click="openDetailedPoppin">
      <img :src="newFormatImg" :alt="dataBook.title">
    </button>

    <v-dialog v-model="poppinIsActive" width="auto">
      <v-card>
        <book-zoomed class="detailed-match-poppin" :dataBook="dataBook"></book-zoomed>
      </v-card>
    </v-dialog>
  </div>
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

.detailed-match-poppin {
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