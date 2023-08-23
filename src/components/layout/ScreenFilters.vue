<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
            color="error"
            dark
            v-bind="props"
        >
          Filter your search
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
            dark
            color="warning"
        >
          <v-btn
              icon
              dark
              @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Filters</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <div v-if="currentUrl === 'books'">
          <filters-books @closeFilterPoppin="closePoppin"></filters-books>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import filtersBooks from "@/components/filters/filtersBooks";
export default {
  emits: ['closeFilterPoppin'],
  components: {
    filtersBooks
  },
  data () {
    return {
      dialog: false,
      currentUrl: null,
    }
  },
  methods: {
    checkCurrentUrlForSelectingTheRightFilters(){
      if(window.location.href.includes('books')){
        this.currentUrl = 'books'
      }
    },
    closePoppin(){
      this.dialog = false
    },
  },
  beforeMount() {
    this.checkCurrentUrlForSelectingTheRightFilters()
  }
}
</script>

<style scoped>

</style>