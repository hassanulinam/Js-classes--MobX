const { makeObservable, observable, action, toJS } = require("mobx");
const Topic = require("./Topic");

class Course {
  topics = [];
  isCompleted = false;

  constructor({ id, name, topics }) {
    this.id = id;
    this.name = name;
    topics?.map((t) => this.addTopic(t));

    makeObservable(this, {
      name: observable,
      topics: observable,
      isCompleted: observable,
      addTopic: action,
      reomveTopic: action,
    });
  }

  addTopic(t) {
    this.topics.push(new Topic(t));
    // console.log("Successfully added the topic");
  }

  reomveTopic(topicId) {
    this.topics = this.topics.filter((t) => t.id !== topicId);
    // console.log("Successfully removed the topic");
  }
}

module.exports = Course;
