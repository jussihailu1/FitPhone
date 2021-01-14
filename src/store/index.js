import Vue from 'vue'
import Vuex from 'vuex'
import { Clock } from '../models/Clock'
import { Question } from '../models/Question'
import { QuestionType } from '../enums/QuestionType'
import { Answer } from '../models/Answer'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    clock: new Clock(),
    questions: [
      new Question(
        0,
        "How well did you sleep?",
        QuestionType.Range,
        [
          new Answer(1, "Go to bed you motherchod."),
          new Answer(2, "Go to bed you honkerchonkor."),
          new Answer(3, "Go to bed you hippetyhop."),
          new Answer(4, "Go to bed you haryupke."),
          new Answer(5, "Go to bed you benchod."),
        ]),
      new Question(
        1,
        "How much energy did you have today?",
        QuestionType.Range,
        [
          new Answer(1, "Go to bed you motherchod."),
          new Answer(2, "Go to bed you honkerchonkor."),
          new Answer(3, "Go to bed you hippetyhop."),
          new Answer(4, "Go to bed you haryupke."),
          new Answer(5, "Go to bed you benchod."),
        ]),
      new Question(
        2,
        "How difficult was it to wake up?",
        QuestionType.Range,
        [
          new Answer(1, "Go to bed you motherchod."),
          new Answer(2, "Go to bed you honkerchonkor."),
          new Answer(3, "Go to bed you hippetyhop."),
          new Answer(4, "Go to bed you haryupke."),
          new Answer(5, "Go to bed you benchod."),
        ]),
      new Question(
        3,
        "Why do you fail to sleep on time?",
        QuestionType.MultipleChoice,
        [
          new Answer("Youtube", "Go to bed you motherchod."),
          new Answer("Netflix", "Go to bed you honkerchonkor."),
          new Answer("Chatting", "Go to bed you hippetyhop."),
          new Answer("Gaming", "Go to bed you haryupke."),
          new Answer("Other", "Go to bed you benchod."),
        ]),
      new Question(
        4,
        "What kept you from falling asleep?",
        QuestionType.MultipleChoice,
        [
          new Answer("Youtube", "Go to bed you motherchod."),
          new Answer("Netflix", "Go to bed you honkerchonkor."),
          new Answer("Chatting", "Go to bed you hippetyhop."),
          new Answer("Gaming", "Go to bed you haryupke."),
          new Answer("Other", "Go to bed you benchod."),
        ]),
    ],
    selectedAnswers: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
