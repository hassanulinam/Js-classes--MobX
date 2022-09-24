const {
  makeObservable,
  observable,
  autorun,
  runInAction,
  action,
  computed,
} = require("mobx");

class McqQuestion {
  options = ["option-1", "option-2", "option-3", "option-4"];
  isAnswered = false;
  answer = "";
  isSkipped = false;

  constructor(id) {
    makeObservable(this, {
      isSkipped: observable,
      answer: observable,
      isAnswered: observable,
      skipQuestion: action,
      correctAnswer: computed,
    });

    this.id = id;
    this.description = "Sample MCQ-" + (id + 1);
  }

  skipQuestion() {
    console.log("Skipping question-" + this.id);
    this.isSkipped = true;
  }

  get correctAnswer() {
    let rand = Math.ceil(Math.random() * 3);
    return this.options[rand];
  }
}

// const mcq1 = new McqQuestion(1);

// const dispose = autorun(() => {
//   console.log("[autorun]:", mcq1.isSkipped);
// });

// runInAction(() => {
//   mcq1.description = "ans--1";
//   mcq1.isAnswered = true;
// });
// runInAction(() => {
//   mcq1.description = "ans--123";
//   mcq1.isAnswered = false;
// });

// mcq1.skipQuestion();
// mcq1.skipQuestion();
// mcq1.skipQuestion();

// dispose();

module.exports = McqQuestion;
