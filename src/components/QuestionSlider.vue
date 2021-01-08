<template>
  <div>
    <label>
      {{ question.question }}
    </label>
    <br />
    <input
      type="range"
      min="this.question.answers[0].value"
      max="this.question.answers[this.question.answers.length - 1].value"
      value="1"
    />
  </div>
</template>

<script>
import { Question } from "../models/Question";

export default {
  props: {
    question: Question,
  },
};
</script>