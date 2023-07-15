<template>
  <body>
  <nav-bar></nav-bar>
  <main>
    <router-view></router-view>
<!--    <router-view v-slot="slotProps">-->
<!--      <transition name="route" mode="out-in">-->
<!--        <component :is="slotProps.Component"></component>-->
<!--      </transition>-->
<!--    </router-view>-->
  </main>
  <the-footer></the-footer>
  </body>
</template>

<script>
import NavBar from '@/components/layout/NavBar';
import TheFooter from '@/components/layout/TheFooter';
export default {
  components: {
    NavBar,
    TheFooter
  },
}

</script>

<style>

</style>