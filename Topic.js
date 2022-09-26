const McqSet = require("./sets/McqSet");
const PracticeSet = require("./sets/PracticeSet");
const AssgSet = require("./sets/AssgSet");
const CodingSet = require("./sets/CodingSet");
const LearningSet = require("./sets/LearningSet");
const setTypes = require("./models/setTypes");
const {
  makeObservable,
  observable,
  action,
  flow,
  runInAction,
} = require("mobx");
const makeAsyncCall = require("./utils/makeAsyncCall");
const apiConst = require("./models/apiConst");
const setMapper = {
  [setTypes.mcq]: (id, nqs) => new McqSet(id, nqs),
  [setTypes.practice]: (id, nqs) => new PracticeSet(id, nqs),
  [setTypes.assg]: (id, nqs) => new AssgSet(id, nqs),
  [setTypes.coding]: (id, nqs) => new CodingSet(id, nqs),
  [setTypes.learning]: (id, nqs) => new LearningSet(id, nqs),
};

class Topic {
  sets = [];
  isCompleted = false;
  apiStatus = apiConst.initial;

  constructor({ id, name, duration, sets }) {
    this.id = id;
    this.name = name;
    this.duration = duration;

    makeObservable(this, {
      name: observable,
      sets: observable,
      duration: observable,
      apiStatus: observable,
      isCompleted: observable,
      setApiStatus: action.bound,
      addSets: flow.bound,
      editTopic: action.bound,
    });

    this.addSets(sets);
  }

  setApiStatus(status) {
    this.apiStatus = status;
  }

  editTopic(name, duration) {
    this.name = name;
    this.duration = duration;
    console.log("Successfully edited the topic");
  }

  *addSets(newSets, nQuestions = 6) {
    yield makeAsyncCall(
      () => {
        runInAction(() => {
          this.sets = newSets.map((s) => setMapper[s.type](s.id, nQuestions));
        });
      },
      (err) => {
        console.log("error occured while adding sets");
      },
      this.setApiStatus
    );
  }
}

module.exports = Topic;
