function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIndex);
  const rightHalf = array.slice(middleIndex);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

function merge(leftArray, rightArray) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex = leftIndex + 1;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex = rightIndex + 1;
    }
  }

  while (leftIndex < leftArray.length) {
    result.push(leftArray[leftIndex]);
    leftIndex = leftIndex + 1;
  }

  while (rightIndex < rightArray.length) {
    result.push(rightArray[rightIndex]);
    rightIndex = rightIndex + 1;
  }

  return result;
}

export {mergeSort};

