<template>
  <div>
    <h1>Welcome {{ userName }}</h1>
    <ul>
      <li>Display Favorites</li>
      <li>Display Book i want to read in future</li>
      <li>Display Book I have already read</li>
      <li>Dark mode feature</li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  computed: {
    userName(){
      return this.$store.getters.userName;
    }
  }
}
</script>