<template>
  <div id="bedTime">
    <label>Hour</label>
    <select v-model="hour" style="width: 100px">
      <option value="00">00</option>
      <option v-for="i in 23" :key="i" :value="formatTime(i)">
        {{ formatTime(i) }}
      </option>
    </select>

    <label>Minute</label>
    <select v-model="minute" style="width: 100px">
      <option value="00">00</option>
      <option v-for="i in 59" :key="i" :value="formatTime(i)">
        {{ formatTime(i) }}
      </option>
    </select>

    <button @click="setTime">{{ timeName }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hour: "",
      minute: "",
    };
  },
  methods: {
    test() {
      console.log(this.$store.state.clock.bedTime);
    },
    setTime() {
      let time = this.hour + ":" + this.minute;
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