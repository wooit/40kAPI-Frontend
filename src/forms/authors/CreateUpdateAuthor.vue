<template>
  <div>
    <v-container>
      <h1 v-if="mode === 'create'">Create a new Author</h1>
      <h1 v-else>Update new Author</h1>
      <v-text-field
          v-model="name"
          label="Name author"
          required
          placeholder="string"
      ></v-text-field>
      <v-text-field
          v-model="country"
          label="country author"
          required
          placeholder="string"
      ></v-text-field>
      <v-textarea
          v-model="biography"
          label="Bio author"
          required
          placeholder="string"
      ></v-textarea>
      <v-text-field
          v-model="img_url"
          label="Img author"
          required
          placeholder="string"
      ></v-text-field>
      <v-btn  v-if="mode === 'create'" type="submit" class="mt-2" @click="sendBody">Create</v-btn>
      <v-btn v-else type="submit" class="mt-2" @click="sendBody">Update</v-btn>
    </v-container>
  </div>
</template>

<script>
//todo later, check data type before validating form
export default {
  props: ['mode', 'authorToUpdate'],
  data(){
    return {
      name: '',
      country: '',
      biography: '',
      img_url: '',
    }
  },
  methods: {
    sendBody(){
      let paramsBody = {
        name: this.name,
        country: this.country,
        biography: this.biography,
        img_url: this.img_url,
      }
      this.$emit('formData', paramsBody)
    }
  },
  mounted() {
    if(this.authorToUpdate){
      this.name = this.authorToUpdate.name
      this.country = this.authorToUpdate.country
      this.biography = this.authorToUpdate.biography
      this.img_url = this.authorToUpdate.img_url
    }
  }
}

</script>