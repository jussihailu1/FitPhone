<template>
  <div>
    <label @click="test">
      {{ question.question }}
    </label>
    <br />
    <input
      @change="answerQuestion"
      type="range"
      :min="min"
      :max="max"
      :step="1"
      v-model="answerIndex"
    />
  </div>
</template>

<script>
import { Question } from "../models/Question";

export default {
  data() {
    return {
      answerIndex: 3,
      min: this.question.answers[0].value,
      max: this.question.answers[this.question.answers.length - 1].value,
    };
  },
  props: {
    question: Question,
  },
  methods: {
    test() {
      console.log(this.question);
      console.log(this.question.selectedAnswer);
    },
    answerQuestion() {
      this.question.selectedAnswer = this.question.answers[
        this.answerIndex - 1
      ];
    },
  },
  mounted() {
    this.answerQuestion();
  },
};
</script>
