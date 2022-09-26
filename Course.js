const {
  makeObservable,
  observable,
  flow,
  action,
  runInAction,
} = require("mobx");
const apiConst = require("./models/apiConst");
const Topic = require("./Topic");
const makeAsyncCall = require("./utils/makeAsyncCall");

class Course {
  topics = [];
  isCompleted = false;
  apiStatus = apiConst.initial;

  constructor({ id, name, topics }) {
    this.id = id;
    this.name = name;

    makeObservable(this, {
      name: observable,
      topics: observable,
      isCompleted: observable,
      apiStatus: observable,
      setApiStatus: action.bound,
      addTopics: flow.bound,
      removeTopic: flow.bound,
    });

    this.addTopics(topics);
  }

  setApiStatus(status) {
    this.apiStatus = status;
  }

  *addTopics(newTopics) {
    yield makeAsyncCall(
      () => {
        runInAction(() => (this.topics = newTopics.map((t) => new Topic(t))));
      },
      (err) => {
        console.error("error occured while adding topic: " + err);
      },
      this.setApiStatus
    );
  }

  *removeTopic(topicId) {
    yield makeAsyncCall(
      () => {
        this.topics = this.topics.filter((t) => t.id !== topicId);
      },
      (err) => {
        console.error("error occured while removing topic: " + err);
      },
      this.setApiStatus
    );
  }
}

module.exports = Course;
