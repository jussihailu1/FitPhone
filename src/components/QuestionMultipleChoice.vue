<template>
  <div>
    <label @click="test">
      {{ question.question }}
    </label>
    <br />
    <div v-for="a in question.answers" :key="a.id">
      <input type="radio" :id="a.id" :name="question.id" />
      <label :for="a.id">{{ a.value }}</label>
      <br />
    </div>
    <br />
  </div>
</template>

<script>
import { Question } from "../models/Question";

export default {
  props: {
    question: Question,
  },
  methods: {
    test() {
      console.log(this.question);
    },
  },
};
</script>