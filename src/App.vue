<template>
  <v-app dark id="app" class="poppins font-extrathin">
    <router-view></router-view>
    <nav-bar></nav-bar>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    "nav-bar": NavBar
  },
};
</script>

<style>
#app {
  background-color:  #343434;
}
* {
  margin: 0;
  padding: 0;
}
</style>
