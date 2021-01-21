<template>
  <div class="bg-box-black m-1 p-2 rounded-3xl mb-6">
    <div class="text-lg ml-2" :class="$store.state.day ? 'text-gold' : 'text-blue'">
      <label @click="test">
        {{ question.question }}
      </label>
    </div>
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
    <div class="hint">
      <p class="ml-2 text-xs">{{question.leftValue}}</p>
      <p class="mr-2 text-xs">{{question.rightValue}}</p>
    </div>
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

<style>
  .hint {
    display: flex;
    justify-content: space-between;
    
  }
  .v-messages {
    min-height: 0px !important;
  }
</style>