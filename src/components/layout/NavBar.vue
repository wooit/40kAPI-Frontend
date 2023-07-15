<template>
    <nav>
      <div class="nav-items">
<!--        <router-link class="nav-item" to="/" >-->
<!--          <img class="logo" src="/assets/geoLogo.png" alt="logo">-->
<!--        </router-link>-->
        <router-link class="nav-item" to="/home" >Home</router-link>
        <router-link class="nav-item" to="/books" >Books</router-link>
        <router-link class="nav-item" to="/" >item2</router-link>
        <router-link class="nav-item" to="/" >item3</router-link>
      </div>
      <div v-if="!isLoggedIn" class="auth-items">
        <router-link class="nav-item" to="/login">Login</router-link>
        <router-link class="nav-item" to="/signup">Signup</router-link>
      </div>
      <div v-else-if="isAdmin && isLoggedIn">
        <router-link class="nav-item" to="/admin-section">Admin</router-link>
        <router-link class="nav-item" to="/user-section">{{ userName }}</router-link>
        <router-link class="nav-item" @click="logout" to="/logout">Logout</router-link>
      </div>
      <div v-else>
        <router-link class="nav-item" to="/user-section">{{ userName }}</router-link>
        <router-link class="nav-item" @click="logout" to="/logout">Logout</router-link>
      </div>
    </nav>
</template>


<script>
export default {
  methods: {
    logout(){
      this.$store.dispatch('logout');
    }
  },
  computed: {
    isLoggedIn(){
      return this.$store.getters.isAuthenticated;
    },
    isAdmin(){
      if(this.$store.getters.isAdmin === true){
        return  this.$store.getters.isAdmin
      }
      return 0
      // return this.$store.getters.isAdmin;
    },
    userName(){
      return this.$store.getters.userName;
    }
  }
}
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  background-color: orange;
}

.nav-item {
  margin: 0 1rem;
  /*color: white;*/
  list-style: none;
  align-items: center;
  font-size: 1.5rem;
}

</style>