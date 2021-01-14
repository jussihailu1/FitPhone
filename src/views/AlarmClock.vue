<template>
  <div class="content" :class="$store.state.day ? 'day' : 'night'">
    <a class="sun" @click="setDay()"><img src="../assets/sun.svg"></a>
    <a class="moon" @click="setNight()"><img src="../assets/moon.svg"></a>
    <set-time v-show="!$store.state.day" timeName="Bed time"></set-time>
    <set-time v-show="$store.state.day" timeName="Wake up time"></set-time>
  </div>
</template>

<script>
import SetTime from "../components/SetTime";

export default {
  data() {
    return {
      day: true,
      background: "../assets/daybackground.svg"
    }
  },
  components: {
    "set-time": SetTime
  },
  methods: {
    setDay() {
      this.$store.state.day = true;
    },
    setNight() {
      this.$store.state.day = false;
    }
  },
};
</script>

<style scoped>
  .day {
      background-image: url("../assets/daybackground.svg");
      transition: 3s;
      opacity: 100;
      -webkit-transition: background-image 0.2s ease-in-out;
      transition: background-image 0.2s ease-in-out;
  }
  .night {
      background-image: url("../assets/nightbackground.svg");
      transition: width 3s;
      -webkit-transition: background-image 0.2s ease-in-out;
      transition: background-image 0.2s ease-in-out;
  }
  .content {
      background-repeat: no-repeat;
      background-size: 100vw;
      height: 100vh;
      width: 100vw;
  }
  .sun {
    position: absolute;
    left: 5vw;
    margin-top: 6vh;
  }
  .moon {
    position: absolute;
    right: 5vw;
    margin-top: 6vh;
  }
</style>