// JAVASCRIPT ENVIRONMENT{
// Call Stack
// Web Api
// Callback Queue
// Event Loop
// }
//////////////////////////////////////////////////////////

// STACKS //

// Stack implementation using LINKED LIST
class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class Stack {
   constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
   }
   peek() {
      return console.log(this.top);
   }
   push(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
         this.top = newNode;
         this.bottom = newNode;
      } else {
         const holdingPointer = this.top;
         this.top = newNode;
         this.top.next = holdingPointer;
      }
      this.length++;
   }
   pop() {
      if (!this.top) return console.log(null);
      if (this.top === this.bottom) {
         this.bottom = null;
      }
      this.top = this.top.next;
      this.length--;
   }
   //isEmpty
}
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
//myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
//console.log(myStack);

// Stack implementation using ARRAY
class Stack2 {
   constructor() {
      this.array = [];
   }
   peek() {
      return console.log(this.array[this.array.length - 1]);
   }
   push(value) {
      this.array.push(value);
   }
   pop() {
      this.array.pop();
   }
   //isEmpty
}
const myStack2 = new Stack2();
myStack2.push(10);
myStack2.push(20);
myStack2.push(30);
//myStack2.peek();
myStack2.pop();
myStack2.pop();
myStack2.pop();
//console.log(myStack2);

////////////////////////////////////////////////////////////

// QUEUES //
// queues implementation using LINKED LIST
class Node2 {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class Queue {
   constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
   }
   peek() {
      return console.log(this.first);
   }
   enqueue(value) {
      const newNode = new Node2(value);
      if (this.length === 0) {
         this.first = newNode;
         this.last = newNode;
      } else {
         this.last.next = newNode;
         this.last = newNode;
      }
      this.length++;
   }
   dequeue() {
      if (!this.first) {
         return console.log(null);
      }
      if (this.first === this.last) {
         this.last = null;
      }
      this.first = this.first.next;
      this.length--;
   }
   //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
//myQueue.peek();
myQueue.dequeue();
//console.log(myQueue);

////////////////////////////////////////////////////////////

// Implement Queue using Stacks
class CrazyQueue {
   constructor() {
      this.first = [];
      this.last = [];
   }

   enqueue(value) {
      const length = this.first.length;
      for (let i = 0; i < length; i++) {
         this.last.push(this.first.pop());
      }
      this.last.push(value);
      return this;
   }

   dequeue() {
      const length = this.last.length;
      for (let i = 0; i < length; i++) {
         this.first.push(this.last.pop());
      }
      this.first.pop();
      return this;
   }
   peek() {
      if (this.last.length > 0) {
         return this.last[0];
      }
      return this.first[this.first.length - 1];
   }
}

const myQueue3 = new CrazyQueue();
myQueue3.peek();
myQueue3.enqueue("Joy");
myQueue3.enqueue("Matt");
myQueue3.enqueue("Pavel");
myQueue3.peek();
myQueue3.dequeue();
myQueue3.dequeue();
myQueue3.dequeue();
myQueue3.peek();
