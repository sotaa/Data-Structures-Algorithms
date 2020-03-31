const char = ["a", "d", "z", "e", "r", "b"];
//console.log(char.sort());
////////////////////////////////////////////////////////////
// BUBBLE SORT //
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function bubbleSort(array) {
   const length = array.length;
   for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
         if (array[j] > array[j + 1]) {
            // Swap numbers
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
         }
      }
   }
}
bubbleSort(numbers);
//console.log(numbers);
////////////////////////////////////////////////////////////
// SELECTION SORT //
const numbers1 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function selectionSort(array) {
   const length = array.length;
   for (let i = 0; i < length; i++) {
      // set current index as minimum
      let min = i;
      let temp = array[i];
      for (let j = i + 1; j < length; j++) {
         if (array[j] < array[min]) {
            //update minimum if current is lower that what we had previously
            min = j;
         }
      }
      array[i] = array[min];
      array[min] = temp;
   }
   return array;
}

selectionSort(numbers1);
//console.log(numbers1);
////////////////////////////////////////////////////////////
// INSERTION SORT //
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
   const length = array.length;
   for (let i = 0; i < length; i++) {
      if (array[i] < array[0]) {
         //move number to the first position
         array.unshift(array.splice(i, 1)[0]);
      } else {
         // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
         if (array[i] < array[i - 1]) {
            //find where number should go
            for (var j = 1; j < i; j++) {
               if (array[i] >= array[j - 1] && array[i] < array[j]) {
                  //move number to the right spot
                  array.splice(j, 0, array.splice(i, 1)[0]);
               }
            }
         }
      }
   }
}

insertionSort(numbers2);
//console.log(numbers2);
////////////////////////////////////////////////////////////
// MERGE SORT //
const numbers3 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
   if (array.length === 1) {
      return array;
   }
   // Split Array in into right and left
   const length = array.length;
   const middle = Math.floor(length / 2);
   const left = array.slice(0, middle);
   const right = array.slice(middle);
   // console.log('left:', left);
   // console.log('right:', right);

   return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
   const result = [];
   let leftIndex = 0;
   let rightIndex = 0;
   while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
         result.push(left[leftIndex]);
         leftIndex++;
      } else {
         result.push(right[rightIndex]);
         rightIndex++;
      }
   }
   // console.log(left, right)
   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers3);
//console.log(answer);
////////////////////////////////////////////////////////////
// QUICK SORT //
const numbers4 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
   const len = array.length;
   let pivot;
   let partitionIndex;

   if (left < right) {
      pivot = right;
      partitionIndex = partition(array, pivot, left, right);

      //sort left and right
      quickSort(array, left, partitionIndex - 1);
      quickSort(array, partitionIndex + 1, right);
   }
   return array;
}

function partition(array, pivot, left, right) {
   let pivotValue = array[pivot];
   let partitionIndex = left;

   for (let i = left; i < right; i++) {
      if (array[i] < pivotValue) {
         swap(array, i, partitionIndex);
         partitionIndex++;
      }
   }
   swap(array, right, partitionIndex);
   return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
   var temp = array[firstIndex];
   array[firstIndex] = array[secondIndex];
   array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers4, 0, numbers4.length - 1);
//console.log(numbers4);
////////////////////////////////////////////////////////////
// Which sort is Best ? //

// A) : Comparison Sort //
// 1) : INSERTION SORT,use it when you only have a few item,if your INPUT is SMALL or ITEMS are mostly SORTED,insertion sort is realy fast.

// 2) : BUBBLE SORT, you are never going to use bubble sorted,it is only used for educational purposes.

// 3) : SELECTION SORT, you wont be using it,mostly its being used as a teaching mechanism.

// 4) : MERGE SORT, if you are worried about worst case you should use merge sort because of big O in worst case(O(nlog(n))).but if you are worried about space complexity merge sort is very expensive because of o(n).

// 5) : QUICK SORT, it is similar to merge sort but if you are worried about worst case it is very bad(O(n^2)) actually if your average case performance matters more than the worst case.quick sort space complexity is better than merge sort (O(log(n))).

// B) : Non-Comparison Sort //
// COUNTING SORT
// RADIX SORT
// These type of sorting only work with INTEGER NUMBERS in a RESTRICtED range
// you use these type of sorting to beat O(nlog(n)).
////////////////////////////////////////////////////////////
// Interview //
//#1 - Sort 10 schools around your house by distance:
// insertion sort

//#2 - eBay sorts listings by the current Bid amount:
// radix or counting sort

//#3 - Sort scores on ESPN
// Quick sort

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// Merge Sort

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// Insertion Sort

//#6 - Temperature Records for the past 50 years in Canada
// radix or counting Sort
// Quick sort if decimal places

//#7 - Large user name database needs to be sorted. Data is very random.
// Quick sort

//#8 - You want to teach sorting
// Bubble sort
