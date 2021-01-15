<template>
  <div>
    <div class="text-center">
      <label @load="test">
        {{ question.question }}
      </label>
    </div>
    <br />
    <div>
      <v-slider
        :min="min"
        :max="max"
        step="1"
        v-model="answer"
        :thumb-color="'#57aae0'"
        thumb-label="true"
        thumb-size="0"
        :color="'#57aae0'"
        :track-color="'#57aae0'"
        @mouseup="setAnswer"
      >
      </v-slider>
    </div>

    <!-- <input
      @mouseup="setAnswer"
      type="range"
      :min="min"
      :max="max"
      :step="1"
      v-model="answer"
    /> -->
  </div>
</template>

<script>
import { Question } from "../models/Question";

export default {
  data() {
    return {
      answer: 1,
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
    setAnswer() {
      this.question.selectedAnswer = this.answer;
      console.log(this.answer.value);
    },
  },
  mounted() {
    this.setAnswer();
  },
};
</script>