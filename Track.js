const {
  makeObservable,
  observable,
  action,
  flow,
  flowResult,
  autorun,
  runInAction,
} = require("mobx");
const Course = require("./Course");
const inputData = require("./inputData");
const apiConst = require("./models/apiConst");
const makeAsyncCall = require("./utils/makeAsyncCall");

class Track {
  courses = [];
  isCompleted = false;
  apiStatus = apiConst.initial;

  constructor(td) {
    this.id = td.id;
    this.name = td.name;

    makeObservable(this, {
      name: observable,
      courses: observable,
      isCompleted: observable,
      apiStatus: observable,
      addCourses: flow,
      removeCourse: flow.bound,
      setApiStatus: action.bound,
    });

    this.addCourses(td.courses);
  }

  setApiStatus(status) {
    this.apiStatus = status;
  }

  *addCourses(newCourses) {
    yield makeAsyncCall(
      () =>
        runInAction(() => {
          this.courses = newCourses.map((c) => new Course(c));
        }),
      (err) => {
        console.error("Error occured while adding course", err);
      },
      this.setApiStatus
    );
  }

  *removeCourse(courseId) {
    yield makeAsyncCall(
      () => {
        runInAction(() => {
          this.courses = this.courses.filter((c) => c.id !== courseId);
        });
      },
      (err) => {
        console.error("Error occured while removing course", err);
      },
      this.setApiStatus
    );
  }
}

const t1 = new Track(inputData);

const disposer = autorun(() => {
  if (t1.apiStatus === apiConst.success)
    console.log("[autorun]:", t1.courses[0]?.topics[0]?.sets);
});

// console.log(t1.courses[0].topics[0].sets);

// console.log(t1.courses[0].topics[0].sets[1].questions[0].answer);

// t1.courses[0].topics[0].sets[1].resetCode("sq-1");
// console.log(t1.courses[0].topics[0].sets[1].questions[0].answer);
