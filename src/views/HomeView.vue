<template>
  <div class="container">
    <img src="/assets/aquila.jpg" alt="aquila">
    <h1 class="text-overlay">In the grim darkness of the far future there is only war</h1>
    <!-- Delete later what's below   -->
    <button @click="testAdmin">TEST</button>
    <h1>{{ role }}</h1>
  </div>

</template>

<script>
export default {
  data(){
    return {
      role: this.$store.getters.isAdmin
    }
  },
  methods: {
    testAdmin(){
      console.log(this.$store.getters.isAdmin)
    }
  },
  computed: {

  }
}

</script>

<style>
.container {
  position: relative;
  text-align: center;
  color: white;
}
img{
  height: 100%;
  width: 100%;
}

.text-overlay {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(199,123,26);
  font:  2em "Fira Sans", sans-serif;
  font-family: fantasy;
}
</style>