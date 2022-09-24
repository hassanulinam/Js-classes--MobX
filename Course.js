const { makeObservable, observable, action } = require("mobx");
const Topic = require("./Topic");

class Course {
  topics = [];
  isCompleted = false;

  constructor({ id, name, topics }) {
    this.id = id;
    this.name = name;
    topics && topics?.map((t) => this.addTopic(t));

    makeObservable(this, {
      name: observable,
      topics: observable,
      isCompleted: observable,
      addTopic: action,
      reomveTopic: action,
    });
  }

  addTopic({ id, name, duration, sets }) {
    this.topics.push(new Topic(id, name, duration, sets));
    // console.log("Successfully added the topic");
  }

  reomveTopic(topicId) {
    this.topics = this.topics.filter((t) => t.id !== topicId);
    // console.log("Successfully removed the topic");
  }

  //   getTopics() {
  //     return this.topics.map((t) => t.name);
  //   }
}

module.exports = Course;
