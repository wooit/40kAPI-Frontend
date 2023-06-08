<template>
    <nav>
      <div class="nav-items">
<!--        <router-link class="nav-item" to="/" >-->
<!--          <img class="logo" src="/assets/geoLogo.png" alt="logo">-->
<!--        </router-link>-->
        <router-link class="nav-item" to="/" >item1</router-link>
        <router-link class="nav-item" to="/" >item2</router-link>
        <router-link class="nav-item" to="/" >item3</router-link>
      </div>
      <div class="auth-items">
        <router-link class="nav-item" to="/signup">Signup</router-link>
        <router-link class="nav-item" to="/login">Login</router-link>
      </div>
    </nav>
</template>


<script>
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
}

.nav-item {
  margin: 0 1rem;
  /*color: white;*/
  list-style: none;
  align-items: center;
  font-size: 1.5rem;
}

</style>