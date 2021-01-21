export class Question{
    
    constructor(id, question, questionType, answers, leftValue, rightValue){
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.questionType = questionType;
        this.selectedAnswer;
        this.leftValue = leftValue;
        this.rightValue = rightValue;

        for (let i = 0; i < this.answers.length; i++) {
            this.answers[i].id = i + "q" + this.id;
        }
    }
}