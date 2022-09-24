const Topic = require("./Topic");

class Course {
  topics = [];

  constructor({ id, name, topics }) {
    this.id = id;
    this.name = name;
    if (topics) {
      this.topics = topics.map((t) => new Topic(t));
    }
  }

  addTopic(id, name, duration) {
    this.topics.push(new Topic(id, name, duration));
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
