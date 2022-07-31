class Student {
  constructor(numOfGrades) {
    this.Name = "";
    this.Age = 0;
    this.Grades = [];
    this.numOfGrades = numOfGrades;
  }
  addGrade(grade) {
    if (this.Grades.length < this.numOfGrades) this.Grades.push(grade);
  }
  GetAvg() {
    let output = 0;
    for (let i = 0; i < this.Grades.length; i++) output += this.Grades[i];
    return output / this.Grades.length;
  }
  GetPersonalData() {
    return `Name - ${this.Name} , Age - ${this.Age}`;
  }
}
