<template>
  <div id="app" class="poppins font-extrathin">
    <router-view></router-view>
    <!-- <div class="p-16">
      <Button buttonText="Set Alarm" />
    </div> -->
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import Button from "./components/Button.vue";
export default {
  components: {
    "nav-bar": NavBar,
    // Button,
  },
};
</script>
