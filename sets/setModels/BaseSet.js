const { makeObservable, observable, action } = require("mobx");

class BaseSet {
  isCompleted = false;

  constructor(id) {
    this.id = id;
    makeObservable(this, { isCompleted: observable, markAsCompleted: action });
  }

  markAsCompleted() {
    this.isCompleted = true;
  }
}

module.exports = BaseSet;
