const BaseSet = require("./setModels/BaseSet");

class LearningSet extends BaseSet {
  constructor(id, name) {
    super(id);
    this.name = name;
    this.isCompleted = false;
  }

  addDiscussion(title) {
    this.discussions.push(title);
    console.log("Successfully added new discussion");
  }

  getVideoDetails(id) {
    console.log("Some video details");
  }

  getNotes() {
    console.log("Some notes");
  }

  getDiscussions() {
    console.log("Some discussions");
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
