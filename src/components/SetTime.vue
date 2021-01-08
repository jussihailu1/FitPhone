<template>
  <div id="bedTime">
    <label>Hour</label>
    <select v-model="hour" style="width: 100px">
      <option value="00">00</option>
      <option v-for="i in 23" :key="i" :value="formatTime(i)" :selected="hour == i">
        {{ formatTime(i) }}
      </option>
    </select>

    <label>Minute</label>
    <select v-model="minute" style="width: 100px">
      <option value="00">00</option>
      <option v-for="i in 59" :key="i" :value="formatTime(i)" :selected="minute == i">
        {{ formatTime(i) }}
      </option>
    </select>

    <button @click="saveTime">Save {{ timeName }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hour:
        this.timeName == "Bed time"
          ? this.formatTimeToHour(this.$store.state.clock.bedTime)
          : this.formatTimeToHour(this.$store.state.clock.wakeUpTime),
      minute: this.timeName == "Bed time"
          ? this.formatTimeToMinute(this.$store.state.clock.bedTime)
          : this.formatTimeToMinute(this.$store.state.clock.wakeUpTime),
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
  },
  props: {
    timeName: String,
  },
};
</script>