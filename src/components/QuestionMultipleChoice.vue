<template>
  <div class="bg-box-black m-1 p-1 rounded-3xl">
    <div class="text-center">
      <label @click="test" class="">
        {{ question.question }}
      </label>
    </div>

    <br />
    <div v-for="a in question.answers" :key="a.id">
      <label :class="$store.state.day ? 'container day' : 'container night'" @click="setAnswer(a)" :for="a.id">
        {{ a.value }}
        <input
          class="checkbox"
          type="radio"
          :id="a.id"
          :name="question.id"
          :value="a"
          v-model="answer"
        />
        <span class="checkmark"></span>
      </label>
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
.container {
  display: block;
  position: relative;
  padding-left: 2.5rem;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: #eee;
}

/* When the checkbox is checked, add a blue background */
.container.day input:checked ~ .checkmark {
  background-color:#ff9e2e;
}

/* When the checkbox is checked, add a gold background */
.container.night input:checked ~ .checkmark {
  background-color:#416cbb;
}
</style>