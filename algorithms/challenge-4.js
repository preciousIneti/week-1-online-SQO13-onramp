function calculateGrade(marks) {
  let sum = 0;
  let average = 0;

  for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    sum += element;
  }
  average = Math.round(sum / marks.length);
  // Look up table for average grade
  if (average >= 1 && average <= 49) {
    return "F";
  } else if (average >= 50 && average <= 59) {
    return "E";
  } else if (average >= 60 && average <= 69) {
    return "D";
  } else if (average >= 70 && average <= 79) {
    return "C";
  } else if (average >= 80 && average <= 89) {
    return "B";
  } else if (average >= 90 && average <= 100) {
    return "A";
  } else {
    return "Unknown grade";
  }
}
module.exports = calculateGrade;
