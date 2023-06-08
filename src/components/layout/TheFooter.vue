<template>
  <div class="footer-container">
    <div class="footer-element">Contact</div>
    <div class="footer-element" @click="routeToOfficialSites('blackLibrary')">Black Library</div>
    <div class="footer-element" @click="routeToOfficialSites('wiki')">40k Wiki</div>
    <div class="footer-element" @click="routeToOfficialSites('fandom')">40k Fandom</div>
    <div class="footer-element" @click="routeToOfficialSites('community')">40K Community</div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods: {
    routeToOfficialSites(site){
      console.log(site)
      // window.location.href = 'https://www.warhammer-community.com/'
      // window.location.href = 'https://www.blacklibrary.com/'
    }
  }
}
</script>

<style>

</style>