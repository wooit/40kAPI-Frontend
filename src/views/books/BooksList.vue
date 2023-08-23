<template>
  <div>
    <img src="/assets/aquila.jpg" alt="aquila">
      <div class="view-container">
          <screen-filters v-if="isLoggedIn"></screen-filters>
        </div>
        <display-books :key="keyForReRenderingAfterUsingFilters"></display-books>
      </div>
</template>

<script>
import DisplayBooks from "@/components/books/DisplayBooks";
import ScreenFilters from "@/components/layout/ScreenFilters";
export default {
  emits: ['reRender'],
  components: {
    DisplayBooks,
    ScreenFilters
  },
  data(){
    return{
    }
  },
  methods: {
  },
  computed: {
    isLoggedIn(){
      return this.$store.getters.isAuthenticated;
    },
    keyForReRenderingAfterUsingFilters(){
      return this.$store.getters.getterComponentKey;
    },

  },
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