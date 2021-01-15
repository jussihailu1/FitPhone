<template>
  <div>
    <div class="information" v-show="!showTimePicker">
      <h1 class="time" @click="showTimePicker = true">{{ time }}</h1>
      <h1 class="date">{{ date }}</h1>
      <h1 class="location">{{ this.location }}</h1>
    </div>
    <v-time-picker
      v-if="showTimePicker"
      v-model="time"
      :color="$store.state.day ? 'bg-gold' : 'bg-blue'"
      format="24hr"
      class="time-picker"
      :event-color="$store.state.day ? 'bg-gold' : 'bg-blue'"
      :dark="true"
      full-width
    >
      <Button
        buttonText="Save"
        :class="$store.state.day ? 'bg-gold p-12 btn-save' : 'bg-blue p-12 btn-save'"
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
      let nr = new Intl.DateTimeFormat("en", { day: "numeric" }).format(d);
      let mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
      let da = new Intl.DateTimeFormat("en", { weekday: "long" }).format(d);
      return `${da} ${mo} ${nr}`;
    }
  },
  props: {
    timeName: String
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
.time {
  font-size: 3rem;
}
.information {
  position: absolute;
  top: 58vh;
  left: 50%;
  transform: translateX(-50%);
}
.time-picker {
  border: none !important;
  margin-top: 20vh;
}
.btn-save {
  margin: 20px auto 20px auto;
}
/* .v-time-picker-clock__container,
.v-picker__body {
  width: 100vw !important;
} */
</style>