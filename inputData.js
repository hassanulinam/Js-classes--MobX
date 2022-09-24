module.exports = {
  id: "track-1",
  name: "Frontend-Development",
  courses: [
    {
      id: "course-1",
      name: "HTML",
      topics: [
        {
          id: "topic-1",
          name: "html-semantics",
          duration: "3hrs",
          sets: [
            {
              type: "mcqs",
              id: "mcqs-1",
            },
            {
              type: "learning",
              id: "ls-1",
            },
            {
              type: "coding",
              id: "cds-1",
            },
          ],
        },
        {
          id: "topic-2",
          name: "html-images",
          duration: "3hrs",
        },
      ],
    },
    {
      id: "course-2",
      name: "CSS",
      topics: [
        {
          id: "topic-1",
          name: "class-animations",
          duration: "3hrs",
        },
        {
          id: "topic-2",
          name: "css-positioning",
          duration: "3hrs",
          sets: [],
        },
      ],
    },
  ],
};

/* 
 this.courses = td.courses.map(
      (c) =>
        new Course(
          c.topics.map(
            (t) =>
              new Topic(
                t.sets.map(
                  (s) =>
                    new AssgSet(
                      s.questions.map(
                        (q) =>
                          new Question(
                            q.id,
                            q.desc,
                            q.isAnswered,
                            q.answer,
                            q.hits
                          )
                      )
                    )
                )
              )
          )
        )
    );
  }
*/
