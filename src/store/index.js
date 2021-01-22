import Vue from "vue";
import Vuex from "vuex";
import { Clock } from "../models/Clock";
import { Question } from "../models/Question";
import { QuestionType } from "../enums/QuestionType";
import { Answer } from "../models/Answer";
import { Tip } from "../models/Tip";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    landing: true,
    day: true,
    clock: new Clock(),
    tips: [
      new Tip(1, "Turn on bluelight filter", 
      "The exposure of bluelight can be harmfull to your eyes. In addition, bluelight confuses your biological clock which can lead to sleep problems.",
      "Last night you were active on your smartphone until 00:30, while you indicated that you wanted to go to sleep at 23:30."),
      new Tip(2, "Turn off notifications", "Push notifications is the main source off your distraction, turn them off so you won't get distracted as much.", "Yesterday you picked up your phone 150 times. This is more than your daily average."),
      new Tip(3, "Set a time limit on YouTube", "Sometimes you lose track of time when you're having fun. A time limit will help you better keep track of how much time you spend in a particular app.", "Yesterday you spent most of your screentime in YouTube.")
    ],
    questions: [
      new Question(0, "How productive were you today?", QuestionType.Range, [
        new Answer(1, "Start your day without your phone."),
        new Answer(2, "Set time limits on apps."),
        new Answer(3, "Wear a watch to see what time it is."),
        new Answer(4, null),
        new Answer(5, null),
      ],
      "Not productive",
      "Very productive"),
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
        ],
        "Not much",
        "A lot"),
      new Question(2, "How difficult was it to wake up?",
      QuestionType.Range, [
        new Answer(1, "Go to bed you motherchod."),
        new Answer(2, "Go to bed you honkerchonkor."),
        new Answer(3, "Go to bed you hippetyhop."),
        new Answer(4, "Go to bed you haryupke."),
        new Answer(5, "Go to bed you benchod."),
      ],
      "Easy",
      "Difficult"),
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
        ]
      )
    ],
    selectedAnswers: [],
    activeBtn: "btn1",
    questionsAnswered: false,
  },
  actions: {},
  modules: {},
});
