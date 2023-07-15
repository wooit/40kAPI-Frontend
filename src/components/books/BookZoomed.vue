<template>
  <div style="display: flex">
    <div>
      <img :src="dataBook.img_url" :alt="dataBook.title">
    </div>
    <div>
      <h3> {{ dataBook.title }}</h3>
      <p style="text-align: justify"> {{ dataBook.summary }}</p>
      <hr>
      <p>Author: {{ dataBook.author }}</p>
      <hr>
      <p>Serie: {{ dataBook.serie }}</p>
    </div>

<!--    <p> {{ dataBook.id }}</p>-->
<!--    <p> {{ dataBook.author }}</p>-->
<!--    <p> {{ dataBook.summary }}</p>-->
<!--    <p> {{ dataBook.release_date }}</p>-->
<!--    <p> {{ dataBook.release_order }}</p>-->


<!--    <p> {{ dataBook.period }}</p>-->
<!--    <p> {{ dataBook.serie_id }}</p>-->
  </div>
</template>

<script>
export default {
  props: ['dataBook'],
  data(){
    return {

    }
  },
  beforeMount() {
    console.log(this.dataBook)
  }
}
</script>

<style>

</style>