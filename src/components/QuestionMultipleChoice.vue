<template>
  <div>
    <label @click="test">
      {{ question.question }}
    </label>
    <br />
    <div v-for="a in question.answers" :key="a.id">
      <input
        type="radio"
        :id="a.id"
        :name="question.id"
        :value="a"
        v-model="answer"
      />
      <label @click="setAnswer(a)" :for="a.id">{{ a.value }}</label>
      <br />
    </div>
    <br />
  </div>
</template>

<script>
import { Question } from "../models/Question";

export default {
  data() {
    return {
      answer: undefined,
    };
  },
  props: {
    question: Question,
  },
  methods: {
    test() {
      console.log(this.answer.value);
      console.log(this.computedAnswer.value);
    },
    setAnswer(answer) {
      this.question.selectedAnswer = answer;
    },
  },
};
</script>