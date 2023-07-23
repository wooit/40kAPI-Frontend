<template>
  <div>
    <h1>Welcome to admin section {{ userName }}</h1>

    <section class="section-radio-input">
      <label><input type="radio" v-model="isActiveComponent" value="AdminUsers" />Users Operations</label>
      <label><input type="radio" v-model="isActiveComponent" value="AdminBooks" />Books Operations </label>
      <label><input type="radio" v-model="isActiveComponent" value="AdminSeries"/> Series Operations</label>
      <label><input type="radio" v-model="isActiveComponent" value=""/> Characters Operations</label>
    </section>

    <section class="section-display-chosen-component">
      <keep-alive>
        <transition>
          <component :is="isActiveComponent"></component>
        </transition>
      </keep-alive>
    </section>
  </div>
</template>

<script>
import AdminUsers from "@/components/admin-section/subAdminComponents/users/AdminUsers";
import AdminBooks from "@/components/admin-section/subAdminComponents/books/AdminBooks";
import AdminSeries from "@/components/admin-section/subAdminComponents/series/AdminSeries";

export default {
  components: {
    AdminUsers,
    AdminBooks,
    AdminSeries
  },
  data(){
    return {
      isActiveComponent: null,
    }
  },
  computed: {
    userName(){
      return this.$store.getters.userName;
    },
  },
}
</script>

<style scoped>

.section-radio-input {
  margin: 2rem auto 2rem auto;
  background-color: gray;
  display: flex;
  border-radius: 30px;
  flex-direction: row;
  padding: 1rem;
  width: 100%;
  justify-content: space-between;
}

input[type=radio] {
  border: 0;
  width: 100%;
  height: 2em;
  accent-color: green;
}

.section-display-chosen-component {

}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>