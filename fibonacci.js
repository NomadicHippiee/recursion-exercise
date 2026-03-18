function fibs(n) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    let lastNumber = result[result.length - 1];
    let secondLastNumber = result[result.length - 2];
    let nextNumber = lastNumber + secondLastNumber;

    result.push(nextNumber);
  }
  return result;
}

function fibsRec(n) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  let previousArray = fibsRec(n - 1);
  let lastNumber = previousArray[previousArray.length - 1];
  let secondLastNumber = previousArray[previousArray.length - 2];

  let nextNumber = lastNumber + secondLastNumber;

  previousArray.push(nextNumber);

  return previousArray;
}

export { fibs, fibsRec };
