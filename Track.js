const Course = require("./Course");
const inputData = require("./inputData");

class Track {
  courses = [];

  constructor(td) {
    this.id = td.id;
    this.name = td.name;
    if (this.courses) {
      this.courses = td.courses.map((c) => new Course(c));
    }
  }

  addCourse(id, name) {
    this.courses.push(new Course(id, name));
    // console.log("Successfully added the Course");
  }

  removeCourse(courseId) {
    this.courses = this.courses.filter((c) => c.id !== courseId);
    // console.log("Successfully removed the Course");
  }
}

const t1 = new Track(inputData);

t1.courses[0].topics[0].sets[1];

t1.courses[0].topics[0].sets[1].saveCode("sq-1", "print(213)");

console.log(t1.courses[0].topics[0].sets[1].questions[0].answer);

t1.courses[0].topics[0].sets[1].resetCode("sq-1");
console.log(t1.courses[0].topics[0].sets[1].questions[0].answer);
