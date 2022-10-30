const studentName = "Anna";
const studentSurname = "Titova";
const introScore = 234;
const gitScore = 456;
const jsScore = 567;
const firstSymbol = studentName.slice(0, 1);

const average = (introScore + gitScore + jsScore) / 3;

console.log(
  `Student ${firstSymbol}. ${studentSurname} has next scores: intro - ${introScore}, git - ${gitScore}, js - ${jsScore}`
);
console.log(`Average score for modules is: ${average}`);
