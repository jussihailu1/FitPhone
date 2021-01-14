<template>
  <div class="info">
    <div>
      <h1 class="time" @click="showTimePicker = true">{{ time }}</h1>
      <h1 class="date">{{ date }}</h1>
      <h1 class="location">{{ this.location }}</h1>
    </div>
    <v-time-picker
      v-if="showTimePicker"
      v-model="time"
      :color="day ? 'bg-gold' : 'bg-blue'"
      format="24hr"
      class="time-picker"
      event-color="bg-gold"
      :dark="true"
    >
      <Button
        buttonText="Save"
        :class="day ? 'bg-gold p-12 btn-save' : 'bg-blue p-12 btn-save'"
        @click.native="saveTime()"
        ></Button>
    </v-time-picker>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  data() {
    return {
      time: new Date().toLocaleTimeString().slice(0,5),
      date: this.getDate(),
      location: "Eindhoven",
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
      this.showTimePicker = false;
      console.log(this.time);
      if (this.timeName == "Bed time") {
        this.$store.state.clock.setBedTime(this.time);
      } else {
        this.$store.state.clock.setWakeUpTime(this.time);
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
    }
  },
  props: {
    timeName: String,
    day: Boolean
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
.time-picker {
  margin-top: -50vh;
  border: none !important;
}
.btn-save {
  margin: 0 auto 0 auto;
}
</style>