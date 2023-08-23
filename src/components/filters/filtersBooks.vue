<template>
  <div class="container-selectors">
    <h1>Authors</h1>
    <v-select
        v-model="selectedAuthors"
        :items="listAuthors"
        label="Select authors"
        multiple
        chips
    ></v-select>

    <v-divider></v-divider>
    <h1>Serie</h1>
    <v-select
        v-model="selectedSeries"
        :items="listSeries"
        label="Select series"
        multiple
        chips
    ></v-select>
    <v-divider></v-divider>
    <h1>Characters</h1>
    <v-select
        v-model="selectedCharacters"
        :items="listCharacters"
        label="Select characters"
        multiple
        chips
    ></v-select>
    <v-divider></v-divider>
    <h1>Faction</h1>
    <v-select
        v-model="selectedFactions"
        :items="listFactions"
        label="Select factions"
        multiple
        chips
    ></v-select>
    <v-divider></v-divider>
    <h1>Period</h1>
    <v-select
        v-model="selectedPeriod"
        :items="listPeriods"
        label="Select a period"
        multiple
        chips
    ></v-select>
    <v-btn color="warning" @click="applyFilters">
      Validate
    </v-btn>
  </div>

</template>

<script>
export default {
  data(){
    return {
      selectedAuthors: [],
      listAuthors: [],
      selectedSeries: [],
      listSeries: [],
      selectedCharacters: [],
      listCharacters: [],
      selectedFactions: [],
      listFactions: [],
      selectedPeriod: [],
      listPeriods: ["30k", "40k"]
    }
  },
  methods: {
    initFetchFilters(){
      this.listAuthors = this.$store.getters.getterListAllAuthors
      this.listSeries = this.$store.getters.getterListAllSeries
      this.listCharacters = this.$store.getters.getterListAllCharacters
      this.listFactions = this.$store.getters.getterListAllFactions
    },
    async applyFilters(){
      const filters = {
        authors: this.selectedAuthors,
        series: this.selectedSeries,
        periods: this.selectedPeriod,
        factions: this.selectedFactions,
        mainCharacters: this.selectedCharacters
      }
      await this.$store.dispatch('getAllFilteredBooks', filters);
      this.$emit('closeFilterPoppin')
      // j'increment une valeur key dans le store pour rerender component
      this.$store.dispatch('incrementKeyAndRerenderDisplayBooksComponent');
    }
  },
  beforeMount() {
    this.initFetchFilters()
  }
}
</script>

<style scoped>
.container-selectors{
  background-color: #121112;
  color: white;

}
</style>