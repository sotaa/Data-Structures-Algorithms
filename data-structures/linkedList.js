// 1-->10-->99-->5-->16
// let myLinkedList = {
//    head: {
//       value: 10,
//       next: {
//          value: 5,
//          next: {
//             value: 16,
//             next: null
//          }
//       }
//    }
// };
/////////////////////////////////////////////////////////////
// Singly Linked Lists
class SinglyNode {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}
class SinglyLinkedList {
   constructor(value) {
      this.head = {
         value: value,
         next: null
      };
      this.tail = this.head;
      this.length = 1;
   }

   append(value) {
      const newNode = new SinglyNode(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
   }
   prepend(value) {
      const newNode = new SinglyNode(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
   }
   insert(index, value) {
      // check params
      if (index >= this.length) {
         return this.append(value);
      }
      const newNode = new SinglyNode(value);
      const leader = this.traverseToindex(index - 1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
   }
   traverseToindex(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
         currentNode = currentNode.next;
         counter++;
      }
      return currentNode;
   }
   remove(index) {
      if (index >= this.length) {
         return false;
      }
      if (index === 0) {
         this.head = this.head.next;
         this.length--;
         return;
      }
      const leader = this.traverseToindex(index - 1);
      const unWanted = leader.next;
      leader.next = unWanted.next;
      this.length--;
   }
   reverse() {
      if (!this.head.next) {
         return this.head;
      }
      let first = this.head;
      this.tail = this.head;
      let second = first.next;
      while (second) {
         const temp = second.next;
         second.next = first;
         first = second;
         second = temp;
      }
      this.head.next = null;
      this.head = first;
      return this.printList();
   }
   printList() {
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
         array.push(currentNode.value);
         currentNode = currentNode.next;
      }
      console.log(array);
   }
}

const mySinglyLinkedList = new SinglyLinkedList(10);
mySinglyLinkedList.append(5);
mySinglyLinkedList.append(16);
// mySinglyLinkedList.prepend(1);
// mySinglyLinkedList.insert(2, 99);
// mySinglyLinkedList.remove(0);
mySinglyLinkedList.reverse();
console.log(mySinglyLinkedList);
//mySinglyLinkedList.printList();
//////////////////////////////////////////////////////////////
// Doubly Linked Lists
class DoublyNode {
   constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
   }
}
class DoublyLinkedList {
   constructor(value) {
      this.head = {
         value: value,
         next: null,
         prev: null
      };
      this.tail = this.head;
      this.length = 1;
   }

   append(value) {
      const newNode = new DoublyNode(value);
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
   }
   prepend(value) {
      const newNode = new DoublyNode(value);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
   }
   insert(index, value) {
      // check params
      if (index >= this.length) {
         return this.append(value);
      }
      const newNode = new DoublyNode(value);
      const leader = this.traverseToindex(index - 1);
      const follower = leader.next;
      leader.next = newNode;
      newNode.prev = leader;
      newNode.next = follower;
      follower.prev = newNode;
      this.length++;
   }
   traverseToindex(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
         currentNode = currentNode.next;
         counter++;
      }
      return currentNode;
   }
   remove(index) {
      if (index >= this.length) {
         return false;
      }
      if (index === 0) {
         const newHead = this.head.next;
         newHead.prev = null;
         this.head = newHead;
         this.length--;
         return;
      }
      const leader = this.traverseToindex(index - 1);
      const unWanted = leader.next;
      const newleaderNext = unWanted.next;
      newleaderNext.prev = leader;
      leader.next = newleaderNext;
      this.length--;
   }
   printList() {
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
         array.push(currentNode.value);
         currentNode = currentNode.next;
      }
      console.log(array);
   }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2, 99);
myDoublyLinkedList.remove(2);
// console.log(myDoublyLinkedList);
// myDoublyLinkedList.printList();
