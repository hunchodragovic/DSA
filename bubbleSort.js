function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let swapped = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
// Time complexity: O(n^2)
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Move boundary of unsorted part
    let minIndex = i; // Assume first unsorted element is the smallest

    for (let j = i + 1; j < n; j++) {
      // Find the smallest element
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // Swap only if needed
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
