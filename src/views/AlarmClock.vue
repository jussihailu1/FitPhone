<template>
  <div>
    <h1 @click="test">Alarm clock</h1>

    <button v-if="!showSetAlarm" @click="showSetAlarmButton">Set alarm</button>

    <div v-if="showSetAlarm">
      <set-time timeName="Bed time"></set-time>
      <set-time timeName="Wake up time"></set-time>
    </div>

    <button v-if="showSetAlarm" @click="hideSetAlarmButton">Done</button>

  </div>
</template>

<script>
import SetTime from "../components/SetTime";

export default {
  data() {
    return {
      showSetAlarm: false,
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
    test() {
      console.log(this.$store.state.clock.bedTime);
      console.log(this.$store.state.clock.wakeUpTime);
    },
  },
};
// TODO: night alarm & morning alarm ipv bedtime & wakeuptime
</script>

