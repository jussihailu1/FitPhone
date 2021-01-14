<template>
  <div class="w-screen h-screen p-5 bg-blue-300 justify-center">
    <div :hidden="$store.state.questionsAnswered">
      <h1>Questions</h1>
      <br />
      <div class="">
        <question-slider v-for="q in rangeQuestions" :key="q.id" :question="q">
        </question-slider>
        <question-multiple-choice
          v-for="q in multipleChoiceQuestions"
          :key="q.id"
          :question="q"
        ></question-multiple-choice>
      </div>
      <div @click="saveQuestions">
        <Button buttonText="Done" />
      </div>
    </div>
    <div :hidden="!$store.state.questionsAnswered">
      <p style="text-align: center">you have answered all the questions for today</p>
    </div>
  </div>
</template>

<script>
import QuestionSlider from "../components/QuestionSlider";
import QuestionMultipleChoice from "../components/QuestionMultipleChoice";
import { QuestionType } from "../enums/QuestionType";
import Button from "../components/Button";
import store from "../store";

export default {
  components: {
    "question-slider": QuestionSlider,
    "question-multiple-choice": QuestionMultipleChoice,
    Button,
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