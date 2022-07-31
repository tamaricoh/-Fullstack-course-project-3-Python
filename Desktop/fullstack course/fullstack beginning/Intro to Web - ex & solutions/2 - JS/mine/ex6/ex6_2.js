class School {
  constructor() {
    let students = [];
    let avg = [];
  }
  addStudent(Student) {
    students.push(Student);
    avg.push(Student.GetAvg());
  }
  GetMaxAvg() {
    let index = 0;
    for (let i = 0; i < avg.length; i++) if (avg[i] > avg[index]) index = i;
    return students[index].Name;
  }
}
