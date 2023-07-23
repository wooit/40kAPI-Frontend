<template>
  <div>
    <v-container>
      <h1 v-if="mode === 'create'">Create a new Book</h1>
      <h1 v-else>Update new Book</h1>
      <v-text-field
          v-model="title"
          label="Title Book"
          required
          placeholder="string"
      ></v-text-field>
      <v-text-field
          v-model="author"
          label="Title Book"
          required
          placeholder="string"
      ></v-text-field>
      <v-textarea
          v-model="summary"
          label="Summary Book"
          required
          placeholder="string"
      ></v-textarea>
      <v-text-field
          v-model="releaseDate"
          label="Year of release"
          required
          placeholder="string"
      ></v-text-field>
      <v-text-field
          v-model="releaseOrder"
          label="Order num of release"
          required
          placeholder="integer"
      ></v-text-field>
      <v-text-field
          v-model="imgUrl"
          label="Img Book"
          required
          placeholder="string"
      ></v-text-field>
      <v-text-field
          v-model="readingOrder"
          label="Reading order"
          required
          placeholder="integer"
      ></v-text-field>
      <v-text-field
          v-model="period"
          label="30k or 40k"
          required
          placeholder="string"
      ></v-text-field>
      <v-text-field
          v-model="multipleStories"
          label="1 or 2"
          required
          placeholder="integer"
      ></v-text-field>
      <v-text-field
          v-model="serieId"
          label="Id of the serie"
          required
          placeholder="integer"
      ></v-text-field>
      <v-btn  v-if="mode === 'create'" type="submit" class="mt-2" @click="sendBody">Create</v-btn>
      <v-btn v-else type="submit" class="mt-2" @click="sendBody">Update</v-btn>
    </v-container>
  </div>
</template>

<script>
//todo later, check data type before validating form
export default {
  props: ['mode', 'bookToUpdate'],
  data(){
    return {
      title: '',
      author: '',
      summary: '',
      releaseDate: '',
      releaseOrder: null,
      imgUrl: '',
      readingOrder: null,
      period: '',
      multipleStories: null,
      serieId: null,
    }
  },
  methods: {
    sendBody(){
      let paramsBody = {
        title: this.title,
        author: this.author,
        summary: this.summary,
        releaseDate: this.releaseDate,
        releaseOrder: this.releaseOrder,
        imgUrl: this.imgUrl,
        readingOrder: this.readingOrder,
        period: this.period,
        multipleStories: this.multipleStories,
        serieId: this.serieId
      }
      this.$emit('formData', paramsBody)
    }
  },
  mounted() {
    if(this.bookToUpdate){
      this.title = this.bookToUpdate.title
      this.author = this.bookToUpdate.author
      this.summary = this.bookToUpdate.summary
      this.releaseDate = this.bookToUpdate.release_date
      this.releaseOrder = this.bookToUpdate.release_order
      this.imgUrl = this.bookToUpdate.img_url
      this.readingOrder = this.bookToUpdate.reading_order
      this.period = this.bookToUpdate.period
      this.multipleStories = this.bookToUpdate.multiple_stories
      this.serieId = this.bookToUpdate.serie_id
    }
  }
}

</script>