const { makeObservable, observable, action } = require("mobx");
const BaseSet = require("./setModels/BaseSet");

class LearningSet extends BaseSet {
  isCompleted = false;

  constructor(id, name) {
    super(id);
    this.name = name;

    makeObservable(this, {
      name: observable,
      isCompleted: observable,
      addDiscussion: action,
      getVideoDetails: action,
      getDiscussions: action,
      getNotes: action,
      updateSessionStatus: action,
      submitFeedback: action,
      postTheDoubt: action,
    });
  }

  addDiscussion(title) {
    this.discussions.push(title);
    console.log("Successfully added new discussion");
  }

  getVideoDetails(id) {
    return "Some video details";
  }

  getNotes() {
    return "Some notes";
  }

  getDiscussions() {
    return "Some discussions";
  }

  updateSessionStatus() {
    this.isCompleted = true;
    console.log("Updated session status");
  }

  submitFeedback(feedback) {
    console.log("Feedback submitted");
  }

  postTheDoubt(doubt) {
    console.log("The doubt has been posted");
    console.log("your doubt will be addressed soon");
  }
}

module.exports = LearningSet;
