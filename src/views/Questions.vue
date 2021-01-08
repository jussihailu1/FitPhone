<template>
  <div>
    <h1 @click="test">Questions</h1>
    <br />
    <question-slider
      v-for="q in rangeQuestions"
      :key="q.id"
      :question="q"
    >
    </question-slider>
    <question-multiple-choice
      v-for="q in multipleChoiceQuestions"
      :key="q.id"
      :question="q"
    ></question-multiple-choice>
  </div>
</template>

<script>
import QuestionSlider from "../components/QuestionSlider";
import QuestionMultipleChoice from "../components/QuestionMultipleChoice";
import { QuestionType } from "../enums/QuestionType";

export default {
  components: {
    "question-slider": QuestionSlider,
    "question-multiple-choice": QuestionMultipleChoice,
  },
  data() {
    return {
      questions: this.$store.state.questions,
      rangeQuestions: this.$store.state.questions.filter(
        (q) => q.questionType == QuestionType.Range
      ),
      multipleChoiceQuestions: this.$store.state.questions.filter(
        (q) => q.questionType == QuestionType.MultipleChoice
      ),
    };
  },
  methods: {
    test() {
      console.log(this.$store.state.questions);
    },
  },
};
</script>