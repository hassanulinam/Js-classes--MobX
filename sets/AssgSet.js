const { autorun } = require("mobx");
const CodingRelatedSet = require("./setModels/CodingRelatedSet");

class AssgSet extends CodingRelatedSet {
  constructor(id, noOfQs) {
    super(id, noOfQs);
  }
}

module.exports = AssgSet;

// const as = new AssgSet(1340, 3);
// console.log(as);

// autorun(() => {
//   console.log("[autorun]", as.questions[0].isAnswered);
// });

// as.questions[0].submitCode();
