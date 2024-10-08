
function insertionSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {

    let currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];

      j--;
    }

    arr[j + 1] = currentElement;
  }
  
  return arr;
}

// Test the function
let arr = [12, 27, 98, 11, 13, 5, 6];
console.log("Original Array:", arr);
console.log("Sorted Array:", insertionSort(arr));
