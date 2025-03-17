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

function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let current = arr[i]; // The element to be placed correctly
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      // Shift elements to the right
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current; // Insert the element in the correct position
  }

  return arr;
}

console.log(insertionSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Base case

  let mid = Math.floor(arr.length / 2); // Find the middle index
  let left = mergeSort(arr.slice(0, mid)); // Recursively sort left half
  let right = mergeSort(arr.slice(mid)); // Recursively sort right half

  return merge(left, right); // Merge sorted halves
}

function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j)); // Merge remaining elements
}

console.log(mergeSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
