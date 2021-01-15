<template>
  <div class="bg-box-black m-1 p-2 rounded-3xl mb-6">
    <div class="text-center">
      <label @click="test">
        {{ question.question }}
      </label>
    </div>
    <br />
    <v-slider
      @change="answerQuestion"
      type="range"
      :min="min"
      :max="max"
      :step="0.01"
      v-model="answerIndex"
      :color="$store.state.day ? dayColorDark : nightColorDark"
      :thumb-color="$store.state.day ? dayColorDark : nightColorDark"
      :track-color="$store.state.day ? dayColor : nightColor"
    ></v-slider>
  </div>
</template>

<script>
import { Question } from "../models/Question";

export default {
  data() {
    return {
      dayColorDark: "#ff9e2e",
      dayColor: "#ffbe73",
      nightColorDark: "#184392",
      nightColor: "#57AAE0",

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