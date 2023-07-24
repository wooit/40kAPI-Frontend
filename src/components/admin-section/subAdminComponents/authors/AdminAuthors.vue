<template>
  <div style="margin-bottom: 200px">
    <div style="display: flex; justify-content: flex-end">
      <v-btn  outlined variant="tonal" color="success" @click="openCreateForm(mode)">POST a new author</v-btn>
    </div>
    <v-table theme="light">
      <thead>
      <tr>
        <th class="text-left">ID</th>
        <th class="text-left">Name</th>
        <th class="text-left">Country</th>
        <th class="text-left">Biography</th>
        <th class="text-left">Img</th>
        <th class="text-left">List books</th>
        <th class="text-left">Delete</th>
        <th class="text-left">Update</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in allAuthorsData" :key="item">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.country }}</td>
        <td v-if="item.biography"> Biography edited </td>
        <td>
          <img style="max-height: 80px; max-width: 80px" :src="item.img_url" :alt="item.name">
        </td>
        <td>Todo later</td>
        <td>
          <button @click="deleteAuthor(item.id)">
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

    <v-dialog v-model="poppinDeleteIsActive" width="auto">
      <v-card>
        <v-card-text>Are you sure to Delete this book permanently?</v-card-text>
        <v-card-actions>
          <v-btn color="primary"  @click="confirmationDeleteAuthor(idAuthorToDelete)">Yes</v-btn>
          <v-btn color="primary"  @click="poppinDeleteIsActive = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="poppinCreateUpdateIsActive" width="33%">
      <v-card>
        <create-update-author :mode="mode" :authorToUpdate="authorToUpdate" @formData="createUpdateAuthor"></create-update-author>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CreateUpdateAuthor from "@/forms/authors/CreateUpdateAuthor";
import axios from "axios";
export default {
  components: {CreateUpdateAuthor},
  data () {
    return {
      allAuthorsData: null,
      poppinDeleteIsActive: false,
      confirmDelete: false,
      idAuthorToDelete: null,
      mode: null,
      poppinCreateUpdateIsActive: false,
      formData: null,
      authorToUpdate: null,
    }
  },
  methods: {
    initComponentData(){
      axios.get('http://localhost:5000/authors').then(response => {
        console.log(response)
        this.allAuthorsData = response.data
      }).catch(err => {
        console.log(err)
      })
    },
    deleteAuthor(id){
      this.poppinDeleteIsActive = true
      this.idAuthorToDelete = id
    },
    confirmationDeleteAuthor(){
      this.poppinDeleteIsActive = false
      axios.delete('http://localhost:5000/author/id/'+this.idAuthorToDelete).then( response => {
        console.log(response);
        this.initComponentData()
      }).catch(function (error) {
        console.log(error);
      })
    },
    openCreateForm(){
      this.mode = 'create';
      this.authorToUpdate = null;
      this.poppinCreateUpdateIsActive = true
    },
    openUpdateForm(id){
      this.authorToUpdate = this.allAuthorsData.find( el => el.id === id)
      this.mode = 'update'
      this.poppinCreateUpdateIsActive = true
    },
    createUpdateAuthor(paramsBody){
      console.log(paramsBody)
      if(this.mode === 'create'){
        axios.post('http://localhost:5000/author', {
          name: paramsBody.name,
          country: paramsBody.country,
          biography: paramsBody.biography,
          img_url: paramsBody.img_url,
        })
            .then(res => {
              console.log(res)
              this.poppinCreateUpdateIsActive = false
              this.initComponentData()
            })
            .catch(err => {
              console.log(err)
            })
      } else{
        axios.patch('http://localhost:5000/author/id/'+this.authorToUpdate.id, {
          name: paramsBody.name,
          country: paramsBody.country,
          biography: paramsBody.biography,
          img_url: paramsBody.img_url,
        })
            .then(res => {
              console.log(res)
              this.poppinCreateUpdateIsActive = false
              this.initComponentData()
            })
            .catch(err => {
              console.log(err)
            })
      }
    },
  },
  beforeMount() {
    this.initComponentData()
  }
}
</script>

<style scoped>

</style>