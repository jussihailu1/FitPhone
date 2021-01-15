<template>
  <div>
    <label @click="test">
      {{ question.question }}
    </label>
    <br />
    <v-slider
      @change="answerQuestion"
      type="range"
      :min="min"
      :max="max"
      :step="0.01"
      v-model="answerIndex"
    ></v-slider>
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
        Math.round(this.answerIndex) - 1
      ];
    },
  },
  mounted() {
    this.answerQuestion();
  },
};
</script>
