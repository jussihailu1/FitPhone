<template>
  <transition name="fade">
    <div class="content" :class="day == true ? 'day' : 'night'">
      <a class="sun" @click="day = true"><img src="../assets/sun.svg" /></a>
      <a class="moon" @click="day = false"><img src="../assets/moon.svg" /></a>
      <set-time v-show="!day" timeName="Bed time"></set-time>
      <set-time v-show="day" timeName="Wake up time"></set-time>
    </div>
  </transition>
</template>

<script>
import SetTime from "../components/SetTime";

export default {
  data() {
    return {
      day: true,
      background: "../assets/daybackground.svg",
    };
  },
  components: {
    "set-time": SetTime,
  },
  methods: {
    showSetAlarmButton() {
      this.showSetAlarm = true;
    },
    hideSetAlarmButton() {
      this.showSetAlarm = false;
    },
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
  margin-top: 4vh;
}
.moon {
  position: absolute;
  right: 5vw;
  margin-top: 4vh;
}
</style>