# Insertion Sort Algorithm (JavaScript Implementation)

## Overview

This project contains an implementation of the **Insertion Sort** algorithm in JavaScript. The algorithm sorts an array of numbers in ascending order using two counters to track the elements being inserted and compared.

---

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [How to Run](#how-to-run)
- [Algorithm](#algorithm)
- [Counters Explained](#counters-explained)
- [Testing the function](#testing-the-function)
- [Output](#output)

---

## Introduction

**Insertion Sort** is a simple comparison-based sorting algorithm. It builds the final sorted array one element at a time, picking each element and inserting it into its proper position within the sorted portion of the array.

This implementation makes use of two counters:
1. **Counter 1 (`i`)**: Tracks the current element to be inserted into the sorted portion.
2. **Counter 2 (`j`)**: Compares the current element with the sorted portion and shifts elements if necessary.

---

## Installation

To run the Insertion Sort code, you will need to have **Node.js** installed on your machine.

### Steps:

1. **Download Node.js**:
   - Visit the [Node.js official website](https://nodejs.org/).
   - Download the recommended version for your operating system.

2. **Verify Node.js Installation**:
   - After installing Node.js, verify the installation by running the following commands in the terminal:
     ```bash
     node -v
     npm -v
     ```

3. **Clone the Repository**:
   - Clone this repository using the following command:
     ```bash
     git clone https://github.com/Yenneferoma/GMCprojects.git
     ```

4. **Navigate to the project directory**:
   ```bash
   cd insertionSort
   ```

---

## How To Run

Once you have navigated to the project directory, you can run the script using Node.js. Here’s how:

1. **Run the script:**
    ```bash
    node insertion_sort.js

2. You can modify the arr in insertionSort.js to test with different arrays.

---

## Algorithm

The Insertion Sort algorithm sorts the array in-place. Here's how it works:

- Start with the second element (index 1), assuming the first element is sorted.

- Pick the current element (arr[i]).

- Compare it with the elements in the sorted portion of the array (from index 0 to i-1).

- Shift all elements larger than the current element to the right.

- Insert the current element into its correct position.

- Repeat until the entire array is sorted.

---

## Counters Explained

- Counter 1 (i): Starts at index 1 and moves forward. It keeps track of the current element being inserted into the sorted portion.

- Counter 2 (j): Moves through the sorted part of the array (from i-1 down to 0) and finds the correct position for the current element by comparing and shifting elements.

## Testing the function

The following is an example of sorting an array using this implementation of Insertion Sort:

    let arr = [12, 27, 98, 11, 13, 5, 6];
    console.log("Original Array:", arr);
    console.log("Sorted Array:", insertionSort(arr));

---

## Output:

    Original Array: [12, 27, 98, 11, 13, 5, 6]
    Sorted Array: [5, 6, 11, 12, 13, 27, 98]


