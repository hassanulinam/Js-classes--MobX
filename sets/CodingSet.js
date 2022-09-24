const ModifiableCodingRelatedSet = require("./setModels/ModifiableCodingRelatedSet");

class CodingSet extends ModifiableCodingRelatedSet {
  constructor(id, nQuestions) {
    super(id, nQuestions);
  }
}

module.exports = CodingSet;
