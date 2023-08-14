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
.footer-container {
  position: fixed;
  /*position: absolute;*/
  bottom: 0;
  width: 100%;
  background-color: #121112;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 5rem;
  align-items: center;
}

.footer-element {
  color: white;
  margin: 0.5rem 0;
  cursor: pointer;
  font-size: 1.5rem;
}

.footer-element:hover,
.footer-element:active{
  color: cyan;
  text-decoration: underline;
  text-underline-offset: 8px;
}
</style>