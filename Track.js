const { makeObservable, observable, action, toJS } = require("mobx");
const Course = require("./Course");
const inputData = require("./inputData");

class Track {
  courses = [];
  isCompleted = false;

  constructor(td) {
    this.id = td.id;
    this.name = td.name;
    td.courses?.forEach((c) => this.addCourse(c));

    makeObservable(this, {
      name: observable,
      courses: observable,
      isCompleted: observable,
      addCourse: action,
      removeCourse: action,
    });
  }

  addCourse(c) {
    this.courses.push(new Course(c));
    // console.log("Successfully added the Course");
  }

  removeCourse(courseId) {
    this.courses = this.courses.filter((c) => c.id !== courseId);
    // console.log("Successfully removed the Course");
  }
}

const t1 = new Track(inputData);
t1.courses[0].topics[0].sets[0].fetchQuestions();
console.log(t1.courses[0].topics[0].sets[0].questions);
// console.log(t1.courses[0].topics[0].sets);

// console.log(t1.courses[0].topics[0].sets[1].questions[0].answer);

// t1.courses[0].topics[0].sets[1].resetCode("sq-1");
// console.log(t1.courses[0].topics[0].sets[1].questions[0].answer);
