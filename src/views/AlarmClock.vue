<template>
  <div>
    <h1 class="text-2xl">Alarm clock</h1>

    <div v-if="!showSetAlarm" @click="showSetAlarmButton">
      <Button buttonText="Set Alarm" />
    </div>

    <div v-if="showSetAlarm">
      <set-time timeName="Bed time"></set-time>
      <set-time timeName="Wake up time"></set-time>
    </div>

    <div v-if="showSetAlarm" @click="hideSetAlarmButton">
      <Button buttonText="Done" />
    </div>
  </div>
</template>

<script>
import SetTime from "../components/SetTime";
import Button from "../components/Button";

export default {
  data() {
    return {
      showSetAlarm: false,
    };
  },
  components: {
    "set-time": SetTime,
    Button,
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

