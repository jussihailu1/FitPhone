<template>
  <div>
    <label @load="test">
      {{ question.question }}
    </label>
    <br />
    <input @mouseup="setAnswer" type="range" :min="min" :max="max" :step="1" v-model="answer" />
  </div>
</template>

<script>
import { Question } from "../models/Question";

export default {
  data() {
    return {
      answer: 3,
      min: this.question.answers[0].value,
      max: this.question.answers[this.question.answers.length - 1].value,
    };
  },
  props: {
    question: Question,
  },
  methods: {
    test() {
      console.log(this.answer);
    },
    setAnswer(){
      this.question.selectedAnswer = this.answer;
      console.log(this.answer.value);
    }
  },
  mounted(){
    this.setAnswer();
  }
};
</script>