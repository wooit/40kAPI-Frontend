<template>
  <div>
    <h3>Admin Operations on users</h3>
    <p>Total Users: {{ totalUsers }}</p>
    <p v-for="user in allUsers" :key="user">
      {{ user }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return {
      allUsers: null,
      totalUsers: null,
    }
  },
  methods: {
    initComponentData(){
      // i need this API call saved in store!!!
      axios.get('http://localhost:5000/admin/users').then(response => {
        this.totalUsers = response.data.length
        this.allUsers = response.data
      }).catch(error =>{
        console.log(error);
      })
    }
  },
  computed: {
    userName(){
      return this.$store.getters.userName;
    },
  },
  beforeMount() {
    this.initComponentData()
  }
}
</script>