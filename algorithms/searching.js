// Linear Search //
var beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];
beasts.indexOf("Godzilla");
beasts.findIndex(function(item) {
   return item === "Godzilla";
});
beasts.find(function(item) {
   return item === "Godzilla";
});
beasts.includes("Godzilla");
////////////////////////////////////////////////////////////
// Binary Search //
// because we know list is sorted.we can use binary search
////////////////////////////////////////////////////////////
//      9
//   4     20
// 1  6  15  170

// BFS //
// bfs[9,4,20,1,6,15,170]

// DFS //
// dfs[9,4,1,6,20,15,170]

// bfs vs dfs //
// 1) : dfs has a lower memory requirement than bfs because its not necessary to store all the child pointer at each level.
// 2) : the time complexity is the same. O(n).
//all traversal is O(n)
// 3) : bfs is very good for the shortest path.
// 4) : dfs is good for asking (does path exist?).
// 5) : dfs can get slow if tree is realy deep.
////////////////////////////////////////////////////////////
//If you know a solution is not far from the root of the tree:
//BFS

//If the tree is very deep and solutions are rare,
//BFS (DFS will take long time. )

//If the tree is very wide:
//DFS (BFS will need too much memory)

//If solutions are frequent but located deep in the tree
//DFS

//determining whether a path exists between two nodes
//DFS

//Finding the shortest path
//BFS
////////////////////////////////////////////////////////////
class BinarySearchTree1 {
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
   bfs() {
      let currentNode = this.root;
      let list = [];
      let queue = [];
      queue.push(currentNode);
      while (queue.length > 0) {
         currentNode = queue.shift();
         list.push(currentNode.value);
         if (currentNode.left) {
            queue.push(currentNode.left);
         }
         if (currentNode.right) {
            queue.push(currentNode.right);
         }
      }
      return console.log(list);
   }
   bfsRecursive(queue, list) {
      if (!queue.length) {
         return console.log(list);
      }
      const currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
         queue.push(currentNode.left);
      }
      if (currentNode.right) {
         queue.push(currentNode.right);
      }
      return this.bfsRecursive(queue, list);
   }
   dfsInorder() {
      return console.log(treverseInorder(this.root, []));
   }
   dfsPreorder() {
      return console.log(treversePreorder(this.root, []));
   }
   dfsPostorder() {
      return console.log(treversePostorder(this.root, []));
   }
}

function treverseInorder(node, list) {
   if (node.left) {
      treverseInorder(node.left, list);
   }
   list.push(node.value);
   if (node.right) {
      treverseInorder(node.right, list);
   }
   return list;
}
function treversePreorder(node, list) {
   list.push(node.value);
   if (node.left) {
      treversePreorder(node.left, list);
   }
   if (node.right) {
      treversePreorder(node.right, list);
   }
   return list;
}
function treversePostorder(node, list) {
   if (node.left) {
      treversePostorder(node.left, list);
   }
   if (node.right) {
      treversePostorder(node.right, list);
   }
   list.push(node.value);
   return list;
}

const tree1 = new BinarySearchTree1();
tree1.insert(9);
tree1.insert(4);
tree1.insert(6);
tree1.insert(20);
tree1.insert(170);
tree1.insert(15);
tree1.insert(1);
//tree.lookup(58);
//tree1.bfs();
//tree1.bfsRecursive([tree.root], []);
// tree1.dfsInorder();
// tree1.dfsPreorder();
// tree1.dfsPostorder();

// JSON.stringify(traverse(tree.root));
//console.log(traverse(tree.root));

//     9
//  4     20
//1  6  15  170

// BFS : [9,4,20,1,6,15,170]

// DFS-InOrder : [1,4,6,9,15,20,170] (left, root, right)
// DFS-PreOrder : [9,4,1,6,20,15,170] (root, left, right)// It is good for reCreate a tree.
// DFS-PostOrder : [1,6,4,15,170,20,9] (left, right, root)

function traverse(node) {
   const tree = { value: node.value };
   tree.left = node.left === null ? null : traverse(node.left);
   tree.right = node.right === null ? null : traverse(node.right);
   return tree;
}
////////////////////////////////////////////////////////////
// Dijkstra + bellman-Ford
// Find Shortest Path between tow nodes of weighted graph
// bellman-Ford is very effective at solving the shortest path over Dijkstra because it can accommodate negative weights while Dijkstra wont able to.
// bellman-Ford can take a long time to run in term of complexity
// In bfs we dont care what kind of weight an edge has.