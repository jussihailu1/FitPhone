<template>
  <div class="text-white w-full h-full bg-bg-black p-4 justify-center">
    <div :hidden="$store.state.questionsAnswered">
      <div class="text-center text-2xl mb-6">Daily Questions</div>
      <question-slider v-for="q in rangeQuestions" :key="q.id" :question="q">
      </question-slider>
      <question-multiple-choice
        v-for="q in multipleChoiceQuestions"
        :key="q.id"
        :question="q"
      ></question-multiple-choice>
      <button
        @click="saveQuestions"
        class="py-2 m-1 bg-gold rounded-2xl tracking-wider text-xl w-max h-max shadow-md mb-16"
        type="submit"
      >
        Submit
      </button>
    </div>
    <div class="yeah" :hidden="!$store.state.questionsAnswered">
      <p class="text-2xl text-center">You have answered all the questions for today!</p>
      <br>
      <br>
      <br>
      <img style="margin: auto;" src="../assets/Blikje in de water.gif" alt="">
    </div>
  </div>
</template>

<script>
import QuestionSlider from "../components/QuestionSlider";
import QuestionMultipleChoice from "../components/QuestionMultipleChoice";
import { QuestionType } from "../enums/QuestionType";
import store from "../store";

export default {
  components: {
    "question-slider": QuestionSlider,
    "question-multiple-choice": QuestionMultipleChoice,
  },
  data() {
    return {
      questions: store.state.questions,
      rangeQuestions: store.state.questions.filter(
        (q) => q.questionType == QuestionType.Range
      ),
      multipleChoiceQuestions: store.state.questions.filter(
        (q) => q.questionType == QuestionType.MultipleChoice
      ),
      slider: [10, 100],
    };
  },
  methods: {
    saveQuestions() {
      let allQuestionsAnswered = true;

      for (const q of store.state.questions) {
        if (q.selectedAnswer == undefined) {
          allQuestionsAnswered = false;
          break;
        }
      }

      if (allQuestionsAnswered) {
        store.state.questions.forEach((q) => {
          store.state.selectedAnswers.push(q.selectedAnswer);
        });
        store.state.activeBtn = "btn3";
        store.state.questionsAnswered = true;
        this.$router.push("tips");
      } else {
        alert("Answer all questions!");
      }
    },
  },
};
</script>

<style scope>
.yeah {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -69%);
  width: 90%;
  text-align: center;
}
</style>