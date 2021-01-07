<template>
  <div>
    <h1 @click="test">Alarm clock</h1>

    <set-time-component timeName="Bed time"></set-time-component>
    <set-time-component timeName="Wake up time"></set-time-component>
  </div>
</template>

<script>
import SetTimeComponent from '../components/SetTimeComponent.vue'

export default {
  components: {
    "set-time-component": SetTimeComponent
  },
  methods: {
    test(){
      console.log(this.$store.state.clock.bedTime);
      console.log(this.$store.state.clock.wakeUpTime);
    }
  },
}
</script>