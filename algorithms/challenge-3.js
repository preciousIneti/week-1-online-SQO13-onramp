function sumMix(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (isNaN(element)) {
      sum += element;
    } else {
      sum += parseInt(element, 10);
    }
  }
  return sum;
}

module.exports = sumMix;
