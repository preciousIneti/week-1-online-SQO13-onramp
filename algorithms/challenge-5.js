function filterList(arr) {
  const numsOnlyArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (typeof element === "number") {
      numsOnlyArr.push(element);
    }
  }
  return numsOnlyArr;
}

module.exports = filterList;
