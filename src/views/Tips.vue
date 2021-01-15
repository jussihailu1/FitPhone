<template>
  <div class="main">
    <div v-for="selectedAnswer in selectedAnswers" :key="selectedAnswer.id">
      <p>{{ selectedAnswer.tip }}</p>
    </div>
    <div class="tip" v-for="tip in tips" :key="tip.id">
      <h1 :class="$store.state.day ? 'text-gold text-xl mb-4' : 'text-blue text-xl mb-4'">{{tip.title}}</h1>
      <p class="description" style="margin: 0px;">{{tip.description}}</p>
  </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selectedAnswers: this.$store.state.selectedAnswers,
      tips: this.$store.state.tips,
    };
  }
};
</script>

<style>
.description {
  color: #fff;
}
.tip {
  background-color: grey;
  border-radius: 10px;
  padding: 15px;
  margin-top: 5vh;
}
</style>