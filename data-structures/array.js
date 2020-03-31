const nemo = ["nemo"];
const everyone = [
   "dory",
   "bruce",
   "marlin",
   "nemo",
   "gill",
   "bloat",
   "nigel",
   "squirt",
   "darla",
   "hank"
];
const large = new Array(10000).fill("nemo");

function findNemo(array) {
   for (let i = 0; i < array.length; i++) {
      if (array[i] === "nemo") {
         console.log("FOUND NEMO!");
      }
   }
}

//findNemo(nemo); // O(1)
//findNemo(everyone); // O(10)
//findNemo(large); // O(n) --> Linear Time. means the bigO depends on the number of inputs;
////////////////////////////////////////////////////////
// for sorted array
const array1 = [1, 2, 3, 9];
const array2 = [1, 2, 4, 4];
function findSumEqual8() {
   let low = 0;
   let high = array2.length - 1;
   while (low < high) {
      const sum = array2[low] + array2[high];
      if (sum == 8) {
         console.log(array2[low], array2[high]);
         high--;
      }
      if (sum > 8) {
         high--;
      }
      if (sum < 8) {
         low++;
      }
   }
}
//findSumEqual8();
////////////////////////////////////////////////////////
// Naive
function hasPairWithSum(arr, sum) {
   var len = arr.length;
   for (var i = 0; i < len - 1; i++) {
      for (var j = i + 1; j < len; j++) {
         if (arr[i] + arr[j] === sum) return true;
      }
   }
   return false;
}

// Better
function hasPairWithSum2(arr, sum) {
   const mySet = new Set();
   const len = arr.length;
   for (let i = 0; i < len; i++) {
      if (mySet.has(arr[i])) {
         return true;
      }
      mySet.add(sum - arr[i]);
   }
   return false;
}
//  hasPairWithSum2([6,4,3,2,1,7], 9)
////////////////////////////////////////////////////////
const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "c", "y", "a"];
function containsCommonItem(arr1, arr2) {
   let map = {};
   for (let i = 0; i < arr1.length; i++) {
      if (!map[arr1[i]]) {
         const item = arr1[i];
         map[item] = true;
      }
   }
   // console.log(map);
   for (j = 0; j < arr2.length; j++) {
      if (map[arr2[j]]) {
         return console.log(true);
      }
   }
   return console.log(false);
}
//containsCommonItem(array3, array4);

function containsCommonItem2(arr3, arr4) {
   return arr3.some(item => arr4.includes(item));
}

containsCommonItem2(array3, array4);

////////////////////////////////////////////////////////
const strings = ["a", "b", "c", "d"];
// 4*4 =1 16 bytes of storage

// accessing array
strings[2]; // O(1)
// Push
strings.push("e"); // O(1) in static array and O(1) or O(n) in dynamicly array
// Pop
strings.pop(); // O(1)
// unshift
strings.unshift("start"); // O(n)
// Spilce
strings.splice(2, 1, "alien"); // O(n)

//console.log(strings);
//////////////////////////////////////////////////////////
// reference type
var object1 = { value: 10 };
var object2 = object1; // reference to object1
var object3 = { value: 10 };
// console.log(object1 === object2);
// console.log(object1 === object3);
// console.log([] === []);

// context
const object4 = {
   a: function() {
      console.log(this);
   }
};

// instantiation
class Player {
   constructor(name, type) {
      console.log("player", this);
      this.name = name;
      this.type = type;
   }
   introduce() {
      console.log(`Hi I am ${this.name}, I am ${this.type}`);
   }
}

class Wizard extends Player {
   constructor(name, type) {
      super(name, type);
      console.log("wizard", this);
   }
   play() {
      console.log(`WEEEEE am ${this.type}`);
   }
}

//const wizard1 = new Wizard("Shelly", "Healer");
//const wizard2 = new Wizard("Shawn", "Dark Majic");
/////////////////////////////////////////////////////////
// Build array
class MyArray {
   constructor() {
      this.length = 0;
      this.data = {};
   }

   get(index) {
      return this.data[index];
   }

   push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.length;
   }
   pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
   }

   delete(index) {
      const item = this.data[index];
      this.shiftItems(index);
      return item;
   }

   shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
         this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
   }
}

const newArray = new MyArray();
newArray.push("Hi");
newArray.push("start");
newArray.push("!");
// newArray.pop();
// newArray.pop();
newArray.delete(1);
//console.log(newArray);
//////////////////////////////////////////////////////////
function reverse(str) {
   if (!str || str.length < 2 || typeof str !== "string") {
      return "hmm that is not good";
   }
   const backward = [];
   const totalItems = str.length - 1;
   for (let i = totalItems; i >= 0; i--) {
      backward.push(str[i]);
   }
   console.log(backward);
   const bkward = backward.join("");
   return console.log(bkward);
}

function reverse2(str) {
   const backward = str
      .split("")
      .reverse()
      .join("");
   return console.log(backward);
}

const reverse3 = str => [...str].reverse().join("");

// reverse("Hi my name is Andrei");
// reverse2("Hi my name is Andrei");
////////////////////////////////////////////////////////
function mergeSortedArrays(array1, array2) {
   if (array1.length === 0) return console.log(array2);
   if (array2.length === 0) return console.log(array1);

   const mergedArray = [];
   let array1Item = array1[0];
   let array2Item = array2[0];
   i = 1;
   j = 1;

   while (array1Item || array2Item) {
      if (!array2Item || array1Item < array2Item) {
         mergedArray.push(array1Item);
         array1Item = array1[i];
         i++;
      } else {
         mergedArray.push(array2Item);
         array2Item = array2[j];
         j++;
      }
   }
   return console.log(mergedArray);
}

//mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);
