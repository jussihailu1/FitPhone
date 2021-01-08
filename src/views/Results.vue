<template>
  <div>
    <h1 @click="test">Results</h1>
    <br />

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      hour: 0,
      minute: 0,
    };
  },
  methods: {
    test() {
      console.log(this.minute);
      console.log(this.hour);
    },
  },
};
</script>