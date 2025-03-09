const StudentNamesArr = ["John", "Jane", "Doe", "Smith", "Alex"];
function getStudentName(allStudents, StudentName) {
  for (let i = 0; i < StudentNamesArr.length; i++) {
    const user = StudentNamesArr[i];
    if (user === StudentName) {
      return user;
    }
  }
}
console.log(getStudentName(StudentNamesArr, "Doe")); // Doe
