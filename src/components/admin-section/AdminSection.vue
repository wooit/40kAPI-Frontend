<template>
  <div>Welcome in admin section {{ userName }}</div>
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