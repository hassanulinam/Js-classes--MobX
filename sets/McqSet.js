const { makeObservable, observable, action, computed } = require("mobx");
const McqQuestion = require("../models/McqQuestion");
const BaseSet = require("./setModels/BaseSet");

class McqSet extends BaseSet {
  questions = [];
  offset = 0;
  limit = 5;

  constructor(id, nQuestions) {
    super(id);
    this.n = nQuestions;

    makeObservable(this, {
      questions: observable.struct,
      fetchQuestions: action,
      allQuestions: computed.struct,
      instructions: computed,
    });
  }

  get instructions() {
    return "Fetching instructions...";
  }

  startTheExam() {
    const conductExam = () => {
      this.questions.slice(this.offset, this.limit).forEach((q) => {
        setTimeout(() => {
          console.log(`\n\n${q.id + 1}). ${q.description}`);
          console.log(`options: ${q.options.join("  ")}`);
        }, 500 * q.id);
      });
    };

    this.getQuestions();
    conductExam();

    this.offset += this.limit;
    this.limit *= 2;

    this.getQuestions();
    conductExam();
  }

  fetchQuestions() {
    console.log("Getting questions...");
    for (let i = this.offset; i < this.limit; i++) {
      this.questions.push(new McqQuestion(i));
    }
  }

  endTheExam() {
    console.log("Exam has finished");
    console.log("---- your score: {xx} ----");
  }

  get allQuestions() {
    return this.questions.map((q) => q.id + "). " + q.description);
  }
}

module.exports = McqSet;

// const mcs = new McqSet(1340, 10, 0, 5);

// autorun(() => {
//   console.log("[autorun]", mcs.allQuestions);
// });

// mcs.fetchQuestions();
// mcs.endTheExam();
