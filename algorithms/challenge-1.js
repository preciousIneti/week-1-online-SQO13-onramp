function countTruthy(arr) {
  let truthyCount = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element) {
      truthyCount += 1;
    }
  }
  return truthyCount;
  // [6, 3, 0, 30, 7]
}
module.exports = countTruthy;
