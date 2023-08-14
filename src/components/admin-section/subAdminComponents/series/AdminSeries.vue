<template>
  <div class="center-screen">
    <h3>Admin Operation on series</h3>
    <div>
      <v-btn outlined variant="tonal" color="success" style="margin-right: 0.5rem">
        POST a new serie
      </v-btn>
      <v-btn outlined variant="tonal" color="error" style="margin-right: 0.5rem">
        DELETE a serie
      </v-btn>
      <v-btn outlined variant="tonal" color="warning" style="margin-right: 0.5rem">
        PATCH a serie
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}

</script>

<style scoped>
.center-screen {
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>