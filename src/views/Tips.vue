<template>
  <div>
    <h1>Tips</h1>
    <div v-for="selectedAnswer in selectedAnswers" :key="selectedAnswer.id">
      <p>{{ selectedAnswer.tip }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selectedAnswers: this.$store.state.selectedAnswers,
    };
  }
};
</script>