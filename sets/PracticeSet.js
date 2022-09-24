const ModifiableCodingRelatedSet = require("./setModels/ModifiableCodingRelatedSet");

class PracticeSet extends ModifiableCodingRelatedSet {
  constructor(id, nQuestions) {
    super(id, nQuestions);
  }
}

module.exports = PracticeSet;
