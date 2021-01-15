<template>
  <div class="text-white w-full h-full p-4 bg-bg-black justify-center">
    <div :hidden="$store.state.questionsAnswered">
      <div class="text-center text-2xl">Daily Questions</div>
      <br />
      <question-slider v-for="q in rangeQuestions" :key="q.id" :question="q">
      </question-slider>
      <question-multiple-choice
        v-for="q in multipleChoiceQuestions"
        :key="q.id"
        :question="q"
      ></question-multiple-choice>
      <button
        @click="saveQuestion"
        class="save py-2 px-20 bg-gold rounded-2xl tracking-wider text-xl w-max h-max shadow-md mb-16"
        type="submit"
      >
        Submit
      </button>
    </div>
    <div :hidden="!$store.state.questionsAnswered">
      <p style="text-align: center">
        you have answered all the questions for today
      </p>
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