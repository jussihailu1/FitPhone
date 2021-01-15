<template>
  <v-app dark id="app" class="poppins font-extrathin">
    <landing v-if="$store.state.landing"></landing>
    <transition name="fade" mode="out-in">
      <router-view v-if="!$store.state.landing" />
    </transition>
    <nav-bar v-if="!$store.state.landing"></nav-bar>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Landingpage from "./views/Landingpage";
export default {
  components: {
    "nav-bar": NavBar,
    landing: Landingpage,
  },
  methods: {},
  mounted() {
    this.$router.push('/');
  },
};
</script>
