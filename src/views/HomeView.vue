<template>
  <h1>Home</h1>
  <button @click="testAdmin">TEST</button>
  <h1>{{ role }}</h1>
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

</style>