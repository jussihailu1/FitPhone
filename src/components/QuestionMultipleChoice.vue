<template>
  <div class="bg-box-black m-1 p-1 rounded-3xl">
    <div class="text-center">
      <label @click="test" class="">
        {{ question.question }}
      </label>
    </div>

    <br />
    <div class="p-1" v-for="a in question.answers" :key="a.id">
      <input
        type="radio"
        :id="a.id"
        :name="question.id"
        :value="a"
        v-model="answer"
      />

      <label class="pl-1" @click="setAnswer(a)" :for="a.id">{{
        a.value
      }}</label>
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

<style scoped>
</style>