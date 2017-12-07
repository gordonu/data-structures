//constructor function
//BST is O(logn) for search (cutting it in half every step)
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

//Function will take in a value and make a new BST/node with value and place that node into our original BST at the correct location.
BST.prototype.insert = function(value) {
    if (value <= this.value) {  //is the value less than root node?
      if(!this.left) this.left = new BST(value); // if there is no child node just put it there.
      else this.left.insert(value); //if there is a node there run our insert function on that node.
    }
    else if (value > this.value){  //is value greater than the root node?
      if (!this.right) this.right = new BST(value); //if there is no left child then set left child equal to new BST of value
      else this.right.insert(value); //if there is a right child we run insert function on this node by running this.right.insert and pass in value
    }
}
//By calling our insert method recursively on every BST/node. We will travel down our tree in the correct directions, either left or right depending on the value of each node we come across and we will insert our new node where it belongs.


BST.prototype.contains = function(value) {
  if (value === this.value) return true; // check to see if the value we are looking for matches the value of the node we are acting on.
  
  //check if the value passed in is less or greater
  else if (value < this.value) {
    if (!this.left) return false; //if there is no left value return false
    else return this.left.contains(value); //if there is a left child we want to run contains on this child node.
  } else if (value > this.value) {
    if (!this.right) return false; //if there is no right value return false
    else return this.right.contains(value); //if there is a right child we want to run conains on this child node.
  }
}

//depthFirstTraversal will travel through all nodes and run iteratorFunc on each node. This method will start traversing at top and follow every tree to the bottom before it moves on to the next branch.
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  
  //touch every node (parent>left>right) (useful for making copy of tree)
  if(order === 'pre-order') iteratorFunc(this.value);
  
  if(this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  
  //touch every node of tree in order from least to greatest (left>parent>right)
  if (order === 'in-order') iteratorFunc(this.value);
  
  if(this.right) this.right.depthFirstTraversal(iteratorFunc, order)
  
  //touch every node of tree in post order (left>right>parent) (safely delete notes b/c starts at bottom and works it's way up)
  if(order === 'post-order') iteratorFunc(this.value);
}


//start at top and move down and process all nodes then move down and process all nodes etc. 
BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this]; //Define a queue with an array FIFO //this is referring to the root node of binary search tree.
  while (queue.length) { //want the while loop to run as long as queue is not empty so queue.length //shift nodes out of front of queue one at a time, run iterator on node, then push child nodes on back of queue, repeat these steps until all nodes are processed... this is level by level instead of branch by branch.
    var treeNode = queue.shift(); //shift out first node of queue and save in variable
    iteratorFunc(treeNode); //run iteratorFunc on node that just shifted out.
    if (treeNode.left) queue.push(treeNode.left); //if there is a left node then push that node to the back of queue
    if (treeNode.right) queue.push(treeNode.right); //if there is a right child then push child to back of queue
  }
};

BST.prototype.getMinVal = function() {
  if (this.left) return this.left.getMinVal();
  else return this.value;
};

BST.prototype.getMaxVal = function() {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};



function log2(node) {
  console.log(node.value);
}


function log(value) {
  console.log(value);
}

//Create a BST with one node and no child nodes. 
var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

//console.log(bst)

// console.log(bst.right.left.left)
// console.log(bst.left.right.left)
// console.log(bst.right.right)

//console.log(bst.contains(15));

bst.depthFirstTraversal(log, 'in-order');


//bst.breadthFirstTraversal(log2);

 //console.log('MIN: ', bst.getMinVal());
 //console.log('MAX: ', bst.getMaxVal());
