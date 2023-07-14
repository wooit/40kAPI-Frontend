<template>
  <div>Welcome {{ userName }}</div>
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