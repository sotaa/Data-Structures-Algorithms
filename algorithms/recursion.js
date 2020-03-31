// Recursion function have two path :
// 1) : BASE CASE that is stop calling the function.
// 2) : RECURSIVE CASE that is call the function agian and run it.

let counter = 0;
function inception() {
   //console.log(counter);
   if (counter > 3) {
      return console.log("done!");
   }
   counter++;
   inception();
}
//inception();
////////////////////////////////////////////////////////////
function findFactorialRecursive(number) {
   // O(n)
   if (number === 2) {
      return 2;
   }
   return number * findFactorialRecursive(number - 1);
}
//console.log(findFactorialRecursive(5));

function findFactorialIterative(number) {
   // O(n)
   let answer;
   if (number === 2) {
      answer = 2;
      return console.log(answer);
   }
   // approach 1 //
   // answer = number;
   // let counter = number - 1;
   // while (counter > 1) {
   //    answer = answer * counter;
   //    counter--;
   // }
   // return console.log(answer);

   // approach 2 //
   answer = 1;
   for (let i = 2; i <= number; i++) {
      answer = answer * i;
   }
   return console.log(answer);
}
//findFactorialIterative(4);

////////////////////////////////////////////////////////////
// 0,1,1,2,3,5,8,13,21,34,55,89,144,233, ...
function fibonacciIterative(n) {
   // O(n)
   let arr = [0, 1];
   for (let i = 2; i < n + 1; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
   }
   return console.log(arr[n]);
}
//fibonacciIterative(12);

function fibonacciRecursive(n) {
   // O(2^n)
   if (n < 2) {
      return n;
   }
   return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
//console.log(fibonacciRecursive(3));
////////////////////////////////////////////////////////////
