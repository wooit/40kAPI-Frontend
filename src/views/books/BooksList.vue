<template>
  <div>
    <img src="/assets/aquila.jpg" alt="aquila">
      <div class="view-container">
        <h1>List of all the books</h1>
        <display-books></display-books>
      </div>
    </div>
</template>

<script>
import DisplayBooks from "@/components/books/DisplayBooks";
export default {
  components: { DisplayBooks }
}
</script>

<style scoped>
.view-container {
  position: relative;
  z-index: 10;
}
img{
  height: 100%;
  width: 100%;
  z-index: -10;
  position: absolute;
}
</style>