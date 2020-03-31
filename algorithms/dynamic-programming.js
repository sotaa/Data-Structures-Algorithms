// Dynamic programming is an optimization techniqe.
// if you have something that you can cache well then you can use dynamic programming.
// Dynamic programming is a way to solve problems by breaking it down into a collection of subproblems. solving each of those subproblems just once and storing their solutions in case next time the same subproblems occurs.
// Cashing is just a way for us to speed up programs and hold some piece of data in an easily accessible box.
// Memorisation is specific form of caching that involves caching the return value.Memorisation is simply a way to remember a solution to a solved problem.so yo dont have to calculate it again.

// can we use Dynamic programming? so follow these rules :
// 1. Can be divided into subproblem.
// 2. Recursive solution.
// 3. Are there repetitive subproblems?
// 4. Memoize subproblems.
// 5. Demand a raise from your boss.
////////////////////////////////////////////////////////////
function addTo80(n) {
   console.log("long time");
   return n + 80;
}
// console.log(addTo80(5));
// console.log(addTo80(5));
// console.log(addTo80(5));
////////////////////
function memoizedAddTo80() {
   let cache = {};
   return function(n) {
      if (n in cache) {
         return cache[n];
      } else {
         console.log("long time");
         cache[n] = n + 80;
         return cache[n];
      }
   };
}
const memoized = memoizedAddTo80();

// console.log(memoized(5));
// console.log(memoized(5));
// console.log(memoized(5));
////////////////////////////////////////////////////////////
// 0,1,1,2,3,5,8,13,21,34,55,89,144,233, ...
let counter1 = 0;
let counter2 = 0;
function fibonacci(n) {
   // O(2^n)
   counter1++;
   if (n < 2) return n;
   return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log("Slow fib", fibonacci(20));
// console.log("Slow Fib Calculation", counter1);
/////////////////
function fibonacciMaster() {
   // O(n)
   let cache = {};
   return function fib(n) {
      if (n in cache) {
         return cache[n];
      } else {
         counter2++;
         if (n < 2) {
            return n;
         } else {
            cache[n] = fib(n - 1) + fib(n - 2);
            return cache[n];
         }
      }
   };
}
const fasterFib = fibonacciMaster();

// console.log("fast Fib", fasterFib(20));
// console.log("fast Fib Calculation", counter2);
