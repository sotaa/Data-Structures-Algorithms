let user = {
   age: 54,
   name: "kylie",
   magic: true,
   scream: function() {
      console.log("ahhhhhh!");
   }
};

//user.age; // O(1)
///user.spell = "abra kadabra"; // O(1)
//user.scream(); // O(1)

// with collision: O(n)

const a = new Map(); // it allows to you save any data type as the key &&&  it maintain this order of insertion
const b = new Set(); // it only stores the key not value.
////////////////////////////////////////////////////////////
class HashTable {
   constructor(size) {
      this.data = new Array(size);
   }

   _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
         hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
   }
   set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
         this.data[address] = [];
      }
      this.data[address].push([key, value]);
      console.log(this.data);
   }
   get(key) {
      let address = this._hash(key);
      const currentBucket = this.data[address];
      if (currentBucket) {
         for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key) {
               return console.log(currentBucket[i][1]);
            }
         }
         return undefined;
      }
   }
   keys() {
      const keysArray = [];
      for (let i = 0; i < this.data.length; i++) {
         if (this.data[i]) {
            keysArray.push(this.data[i][0][0]);
         }
      }
      console.log(keysArray);
   }
}

const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 10000);
// myHashTable.set("apples", 9);
// myHashTable.set("oranges", 25);
// myHashTable.get("apples");
// myHashTable.keys();
/////////////////////////////////////////////////////
//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function findRecurringCharacter(array) {
   if (array.length === 0) {
      return undefined;
   }
   const mySet = new Set();
   for (i = 0; i < array.length; i++) {
      if (!mySet.has(array[i])) {
         mySet.add(array[i]);
      } else {
         return console.log(array[i]);
      }
   }
   return console.log(undefined);
}
//findRecurringCharacter([2, 24, 1]);
