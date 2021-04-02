const subjectList = document.querySelector(".subject-list");

fetch("http://localhost:3000/subjects")
  .then((response) => response.json())
  .then((subjects) => {
    subjects
      .map((subject) => {
        const name = subject.name;
        const li = document.createElement("li");
        li.textContent = name;

        return li;
      })
      .forEach((subject) => {
        subjectList.append(subject);
      });
  });
