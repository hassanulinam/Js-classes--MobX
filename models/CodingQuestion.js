const {
  makeObservable,
  observable,
  autorun,
  runInAction,
  computed,
  action,
  flow,
} = require("mobx");

class CodingQuestion {
  isAnswered = false;
  answer = "initial-code";

  constructor(id) {
    makeObservable(this, {
      isAnswered: observable,
      answer: observable,
      questionDetails: computed,
      submitCode: flow,
      runCode: action,
      submissions: computed,
      listOfSubmissions: computed,
      listOfSubmissions: computed,
      hints: computed,
      solutions: computed,
      changeAnswerStatus: action,
    });

    this.id = "sq-" + (id + 1);
    this.description = "Sample Question - " + (id + 1);
  }

  get questionDetails() {
    return "Question-Details\n", qd.description;
  }

  *submitCode() {
    console.log("Submitting code for question: " + this.id);
    yield Promise.resolve("correct code").then(() =>
      this.changeAnswerStatus(true)
    );
  }

  changeAnswerStatus(status) {
    this.isAnswered = status;
  }

  runCode() {
    console.log("Running Code " + this.id);
  }

  get submissions() {
    return "Showing All Submissions for " + this.id;
  }

  get listOfSubmissions() {
    return "Showing All Submissions for question:", this.id;
  }

  get hints() {
    return "showing hints for question:", this.id;
  }

  get solutions() {
    console.log("Showing Solutions for question:", this.id);
  }
}

module.exports = CodingQuestion;

// const cq1 = new CodingQuestion(1);

// const dispose = autorun(() => {
//   if (cq1.isAnswered) {
//     console.log("Submission successful, and the answer is CORRECT");
//   }
// });
// cq1.submitCode();
