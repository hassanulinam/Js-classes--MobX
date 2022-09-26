const BaseSet = require("./BaseSet");
const CodingQuestion = require("../../models/CodingQuestion");
const { makeObservable, observable, computed } = require("mobx");

class CodingRelatedSet extends BaseSet {
  questions = [];

  constructor(id, noOfQs) {
    super(id);
    this.noOfQs = noOfQs;
    for (let i = 0; i < this.noOfQs; i++) {
      this.questions.push(new CodingQuestion(i));
    }

    makeObservable(this, {
      questions: observable,
      allQuestions: computed,
      discussions: computed,
    });
  }

  get allQuestions() {
    return this.questions;
  }

  get discussions() {
    console.log("Showing Discussions");
  }
}

module.exports = CodingRelatedSet;

// const crs1 = new CodingRelatedSet(1340, 10);

// const dispose = autorun(() => {
//   console.log("[autorun]", crs1.questions.length);
// });

// runInAction(() => {
//   crs1.questions.push(new CodingQuestion(1000));
// });

// runInAction(() => {
//   crs1.questions.push(new CodingQuestion(1010));
// });

// dispose();
