// Binary Tree //

// (Each node can have 0 or 1 or 2 children and each child can only have 1 parent)

// Level 0: 2 ^ 0 = 1;
// Level 1: 2 ^ 1 = 2;
// Level 2: 2 ^ 2 = 4;
// Level 3: 2 ^ 3 = 8;
// # of nodes = (2 ^ h) - 1;  // All the nodes
// log nodes = height;
////////////////////////////////////////////////////////////
// Binary Search Tree //
// 1) : All the right side nodes must be GREATER than the CURRENT node.(if i go to the left it decreases.if i go to the right it increases).
// 2) : a node cane only have up to 2 children.

class NodeT {
   constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
   }
}

class BinarySearchTree {
   constructor() {
      this.root = null;
   }
   insert(value) {
      const newNode = new NodeT(value);
      if (this.root === null) {
         return (this.root = newNode);
      } else {
         let currentNode = this.root;
         while (true) {
            if (value < currentNode.value) {
               if (!currentNode.left) {
                  return (currentNode.left = newNode);
               }
               currentNode = currentNode.left;
            } else {
               if (!currentNode.right) {
                  return (currentNode.right = newNode);
               }
               currentNode = currentNode.right;
            }
         }
      }
   }
   lookup(value) {
      if (!this.root) {
         return console.log(false);
      }
      let currentNode = this.root;
      while (currentNode) {
         if (value < currentNode.value) {
            currentNode = currentNode.left;
         } else if (value > currentNode.value) {
            currentNode = currentNode.right;
         } else if (currentNode.value === value) {
            return console.log(currentNode);
         }
      }
      return console.log(false);
   }
   remove() {
      if (!this.root) {
         return false;
      }
      let currentNode = this.root;
      let parentNode = null;
      while (currentNode) {
         if (value < currentNode.value) {
            parentNode = currentNode;
            currentNode = currentNode.left;
         } else if (value > currentNode.value) {
            parentNode = currentNode;
            currentNode = currentNode.right;
         } else if (currentNode.value === value) {
            //We have a match, get to work!

            //Option 1: No right child:
            if (currentNode.right === null) {
               if (parentNode === null) {
                  this.root = currentNode.left;
               } else {
                  //if parent > current value, make current left child a child of parent
                  if (currentNode.value < parentNode.value) {
                     parentNode.left = currentNode.left;

                     //if parent < current value, make left child a right child of parent
                  } else if (currentNode.value > parentNode.value) {
                     parentNode.right = currentNode.left;
                  }
               }

               //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
               currentNode.right.left = currentNode.left;
               if (parentNode === null) {
                  this.root = currentNode.right;
               } else {
                  //if parent > current, make right child of the left the parent
                  if (currentNode.value < parentNode.value) {
                     parentNode.left = currentNode.right;

                     //if parent < current, make right child a right child of the parent
                  } else if (currentNode.value > parentNode.value) {
                     parentNode.right = currentNode.right;
                  }
               }

               //Option 3: Right child that has a left child
            } else {
               //find the Right child's left most child
               let leftmost = currentNode.right.left;
               let leftmostParent = currentNode.right;
               while (leftmost.left !== null) {
                  leftmostParent = leftmost;
                  leftmost = leftmost.left;
               }

               //Parent's left subtree is now leftmost's right subtree
               leftmostParent.left = leftmost.right;
               leftmost.left = currentNode.left;
               leftmost.right = currentNode.right;

               if (parentNode === null) {
                  this.root = leftmost;
               } else {
                  if (currentNode.value < parentNode.value) {
                     parentNode.left = leftmost;
                  } else if (currentNode.value > parentNode.value) {
                     parentNode.right = leftmost;
                  }
               }
            }
            return true;
         }
      }
   }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
//tree.lookup(58);
// JSON.stringify(traverse(tree.root));
//console.log(traverse(tree.root));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
   const tree = { value: node.value };
   tree.left = node.left === null ? null : traverse(node.left);
   tree.right = node.right === null ? null : traverse(node.right);
   return tree;
}
