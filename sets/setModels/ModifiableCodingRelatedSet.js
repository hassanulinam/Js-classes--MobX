const { makeObservable, flow, runInAction, autorun } = require("mobx");
const CodingRelatedSet = require("./CodingRelatedSet");

class ModifiableCodingRelatedSet extends CodingRelatedSet {
  constructor(id, noOfQs) {
    super(id, noOfQs);
    makeObservable(this, {
      resetCode: flow,
      saveCode: flow,
    });
  }

  *resetCode(qid) {
    console.log("resetting code for question" + qid);
    yield Promise.resolve("resetting...").then(
      runInAction(() => {
        this.questions = this.questions.map((q) =>
          q.id === qid ? { ...q, answer: "INITIAL_CODE" } : q
        );
      })
    );
  }

  *saveCode(qid, userCode) {
    console.log("saving code for question " + qid);
    yield Promise.resolve("saving...").then(
      runInAction(() => {
        this.questions = this.questions.map((q) =>
          q.id === qid ? { ...q, answer: userCode } : q
        );
      })
    );
  }
}

module.exports = ModifiableCodingRelatedSet;

// const qs = new ModifiableCodingRelatedSet(1340, 10);
// autorun(() => {
//   console.log("[autorun]", qs.questions.length);
// });

// qs.resetCode("sq-1");
// qs.saveCode("sq-1", "print(420)");
