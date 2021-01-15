<template>
  <div class="landing flex align-center justify-center">
    <button
      @click="start"
      class="save py-2 px-20 bg-gold rounded-2xl tracking-wider text-xl w-max h-max shadow-md mb-16"
      type="submit"
    >
      Let's begin
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      landing: this.$store.state.landing,
    };
  },
  methods: {
    start() {
      this.$store.state.landing = false;
      //   console.log(this.landing);
      console.log(this.$store.state.landing);
    },
  },
};
</script>

<style  scoped>
.landing {
  background-image: url("../assets/landing.svg");
  transition: width 3s;
  -webkit-transition: background-image 4s ease-in-out;
  transition: background-image 4s ease-in-out;
  background-repeat: no-repeat;
  background-size: 100vw;
  height: 100vh;
  width: 100vw;
}
</style>