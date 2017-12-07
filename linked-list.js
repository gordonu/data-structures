function LinkedList() {
  this.head = null;
  this.tail = null;
}

//Linked Lists have O(n) search and O(1) add/remove
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// var LL = new LinkedList();
// console.log(LL)

// var userList = new LinkedList();
// var toDoList = new LinkedList();

// var node1 = new Node(100, 'node2', null);

// console.log(node1);


//this is referencing to our LinkedList constructor function
LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;   // this.head in the if is the old head //set prev head to new node
  else this.tail = newNode; //!this.head set tail to newNode since this is the only node added
  this.head = newNode;  // in both situations need to assign new head node to be new node
};


LinkedList.prototype.addToTail = function(value){
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;     //since this is the only node it needs to be head and tail.
  this.tail = newNode;
};



// var ll = new LinkedList();

// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);

// console.log(ll)



// var myLL = new LinkedList();

// myLL.addToTail(10);
// myLL.addToTail(20);
// myLL.addToTail(30);
// myLL.addToHead(100);

// console.log(myLL.head.next.next.next);

LinkedList.prototype.removeHead = function() {
  if(!this.head) return null;
  var val = this.head.value;  //temporary val for current this.head.value
  this.head = this.head.next; //this.head (new head) will equal the current head's next node
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

// var ll = new LinkedList();

// ll.addToHead(1000);
// ll.addToHead(2000);
// ll.addToTail(3000);
// ll.removeHead();
// console.log(ll.removeHead());


LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val
};


// var ll = new LinkedList();

// ll.addToHead('one');
// ll.addToHead('two');
// ll.addToHead('three');

// console.log(ll.removeTail());


LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  var counter = 0;
  while(currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

// var myLL = new LinkedList();

// myLL.addToHead(123);
// myLL.addToHead(70);
// myLL.addToHead('hello');
// myLL.addToTail(19);
// myLL.addToTail('world');
// myLL.addToTail(20);

// console.log(myLL.search(10))


LinkedList.prototype.indexOf = function(value) {
  var indexes = [];
  var currentIndex = 0;
  var currentNode = this.head;
  while(currentNode) {
      if (currentNode.value === value) {
          indexes.push(currentIndex);
      }
      currentNode = currentNode.next;
      currentIndex++;
  }
  return indexes;
};


 var myLL = new LinkedList();

myLL.addToTail(1);
myLL.addToTail(5);
myLL.addToTail(3);
myLL.addToTail(5);
myLL.addToTail(8);
myLL.addToTail(7);
myLL.addToTail(5);

console.log(myLL.indexOf(5))







