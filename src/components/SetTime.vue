<template>
  <div class="info">
    <div>
      <h1 class="time" @click="showTimePicker = true">{{ time }}</h1>
      <h1 class="date">{{ getDate() }}</h1>
      <h1 class="location">{{ this.location }}</h1>
    </div>
    <v-time-picker
      v-if="showTimePicker"
      v-model="time"
      color="#000"
      format="24hr"
    >
      <Button
        buttonText="save"
        class="p-12 bg-gold"
        @click.native="showTimePicker = false"
        >save</Button
      >
    </v-time-picker>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  data() {
    return {
      time: "00:00",
      hour: "12:",
      minute: "20",
      date: "",
      location: "Hapert",
      showTimePicker: false,
    };
  },
  methods: {
    formatTimeToHour(time) {
      return time.substring(0, 2);
    },
    formatTimeToMinute(time) {
      return time.substring(3, 5);
    },
    saveTime() {
      let time = this.hour + ":" + this.minute;
      console.log(time);
      if (this.timeName == "Bed time") {
        this.$store.state.clock.setBedTime(time);
      } else {
        this.$store.state.clock.setWakeUpTime(time);
      }
    },
    formatTime(i) {
      return i.toString().padStart(2, "0");
    },
    getDate() {
      let d = new Date();
      let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
      let mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
      let da = new Intl.DateTimeFormat("en", { weekday: "short" }).format(d);
      return `${da}-${mo}-${ye}`;
    },
  },
  props: {
    timeName: String,
  },
  components: {
    Button: Button,
  },
};
</script>

<style scoped>
.date,
.location,
.time {
  color: #ffffff;
  text-align: center;
}
.info {
  position: absolute;
  top: 58vh;
  left: 50%;
  transform: translateX(-50%);
}
</style>