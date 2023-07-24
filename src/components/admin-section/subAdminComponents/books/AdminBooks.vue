<template>
  <div style="margin-bottom: 200px">
    <div style="display: flex; justify-content: flex-end">
      <v-btn  outlined variant="tonal" color="success" @click="openCreateForm(mode)">POST a new book</v-btn>
    </div>
    <v-table theme="light">
      <thead>
      <tr>
        <th class="text-left">ID</th>
        <th class="text-left">Title</th>
        <th class="text-left">Author</th>
        <th class="text-left">Summary</th>
        <th class="text-left">Serie</th>
        <th class="text-left">Period</th>
        <th class="text-left">Img</th>
        <th class="text-left">Delete</th>
        <th class="text-left">Update</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in listBooks" :key="item">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.author }}</td>
        <td v-if="item.summary"> Summary Edited</td>
        <td v-else> No Summary</td>
        <td>{{ item.serie }}</td>
        <td>{{ item.period }}</td>
        <td>
          <img style="max-height: 80px; max-width: 80px" :src="item.img_url" :alt="item.title">
        </td>
        <td>
          <button @click="deleteBook(item.id)">
            <v-icon icon="mdi:mdi-delete"></v-icon>
          </button>
        </td>
        <td>
          <button @click="openUpdateForm(item.id)">
            <v-icon icon="mdi:mdi-update"></v-icon>
          </button>
        </td>
      </tr>
      </tbody>
    </v-table>
    <!-- Delete Poppin   -->
    <v-dialog v-model="poppinDeleteIsActive" width="auto">
      <v-card>
        <v-card-text>Are you sure to Delete this book permanently?</v-card-text>
        <v-card-actions>
          <v-btn color="primary"  @click="confirmationDeleteBook(idBookToDelete)">Yes</v-btn>
          <v-btn color="primary"  @click="poppinDeleteIsActive = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Create/update Poppin   -->
    <v-dialog v-model="poppinCreateUpdateIsActive" width="33%">
      <v-card>
        <!-- Book Form -->
        <create-update :mode="mode" :bookToUpdate="bookToUpdate" @formData="createUpdateBook"></create-update>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import CreateUpdate from "@/forms/book/CreateUpdate";
export default {
  components: {CreateUpdate},
  data () {
    return {
      allBooks: null,
      poppinDeleteIsActive: false,
      confirmDelete: false,
      idBookToDelete: null,
      mode: null,
      poppinCreateUpdateIsActive: false,
      formData: null,
      bookToUpdate: null,
    }
  },
  methods: {
    //deleteMethods
    deleteBook(id){
      this.poppinDeleteIsActive = true
      this.idBookToDelete = id
    },
    confirmationDeleteBook(){
      this.poppinDeleteIsActive = false
      axios.delete('http://localhost:5000/book/id/'+this.idBookToDelete)
          .then( response => {
            console.log(response);
            this.$store.dispatch('refreshBooksInStore');
          })
          .catch(function (error) {
            console.log(error);
          })
    },
    //open forms create or update
    openCreateForm(){
      this.mode = 'create';
      this.bookToUpdate = null;
      this.poppinCreateUpdateIsActive = true
    },
    openUpdateForm(id){
      this.mode = 'update'

      // cant use a find method yet since i dont fetch the full book entity
      // MAYBE I NEED TO USE STORE DATA
      // console.log(this.listBooks.find(el => el.id === id))
      axios.get('http://localhost:5000/book/id/'+id)
          .then(res =>{
            console.log(res)
            this.bookToUpdate = res.data
            this.poppinCreateUpdateIsActive = true
          }).catch(err => {
        console.log(err)
      })
    },
    // create/update method
    // WARNING data expected by Post and Patch route are not the same on the backend
    // NEED TO SOLVE THAT
    createUpdateBook(paramsBody){
      console.log(paramsBody)
      if(this.mode === 'create'){
        axios.post('http://localhost:5000/book', {
          title: paramsBody.title,
          author: paramsBody.author,
          summary: paramsBody.summary,
          releaseDate: paramsBody.releaseDate,
          releaseOrder: parseInt(paramsBody.releaseOrder),
          imgUrl: paramsBody.imgUrl,
          readingOrder: parseInt(paramsBody.readingOrder),
          period: paramsBody.period,
          multipleStories: parseInt(paramsBody.multipleStories),
          serieId: parseInt(paramsBody.serieId)
        })
            .then(res => {
              console.log(res)
              this.poppinCreateUpdateIsActive = false
              this.$store.dispatch('refreshBooksInStore');
            })
            .catch(err => {
              console.log(err)
            })
      } else{
        console.log('HERE')
        console.log(paramsBody.imgUrl)
        axios.patch('http://localhost:5000/book/id/'+this.bookToUpdate.id, {
          title: paramsBody.title,
          author: paramsBody.author,
          summary: paramsBody.summary,
          release_date: paramsBody.releaseDate,
          release_order: parseInt(paramsBody.releaseOrder),
          img_url: paramsBody.imgUrl,
          reading_order: parseInt(paramsBody.readingOrder),
          period: paramsBody.period,
          multiple_stories: parseInt(paramsBody.multipleStories),
          serie_id: parseInt(paramsBody.serieId)
        })
            .then(res => {
              console.log(res)
              this.poppinCreateUpdateIsActive = false
              this.$store.dispatch('refreshBooksInStore');
            })
            .catch(err => {
              console.log(err)
            })
      }
    },
  },
  computed: {
    userName(){
      return this.$store.getters.userName;
    },
    listBooks(){
      console.log(this.$store.getters.getterListAllBooks)
      return this.$store.getters.getterListAllBooks;
    }
  },
}
</script>

<style scoped>

</style>