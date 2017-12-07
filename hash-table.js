//O(1) look up and insertion

function HashTable(size) {
  this.buckets = Array(size);    //empty array of size
  this.numBuckets = this.buckets.length;   //size of table
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null
}

//Hashing function!!!!
HashTable.prototype.hash = function(key) {
    var total = 0;
    for (var i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }
    var bucket = total % this.numBuckets;
    return bucket;
};



//The insert method also (update)s
HashTable.prototype.insert = function(key, value) {
    var index = this.hash(key); //what bucket your node will go in? index!
   // console.log('INDEX', index);
    if (!this.buckets[index]) {    //bucket you want to put your hash node in is empty
      this.buckets[index] = new HashNode(key, value); //if there is nothing that this.buckets[index] then simply make a node w/ key/value and put it in the bucket.
    }
    else if (this.buckets[index].key === key) { //(update) checks the first node at the index.
      this.buckets[index].value = value;
    }
    else { //bucket you want to put your hash node in is not empty // travel through chain of nodes and attach new node to the last node in the chain. (linked list)
      var currentNode = this.buckets[index]; 
      while (currentNode.next) { //while this is not the last node in the chain continue to travel through the chain to the next node in the chain. //After this while loop stop running our current node variable will be the last node in the chain... 
        if(currentNode.next.key === key) { //(upate) if the key on the next node = key parameter we passed in then we know this is the node to update
          currentNode.next.value = value;  //(update) change the value to new value passed in 
          return;  //if you update friend info in if statement then you want to stop method from running. (don't want to attach another node on line 44.)
        }
          currentNode = currentNode.next;
      }
      //now create a new hash node and add it to the end.
      currentNode.next = new HashNode(key, value);
    }
}
//(update) The while loop only checks the next node in chain but never the first node. Solution else if on line 30...

//get method will take in a key, and returns value if key exits in hash table.
HashTable.prototype.get = function(key) {
  var index = this.hash(key); //which bucket to look in? index!!!
  if (!this.buckets[index]) return null; //if there's nothing at the index then return null
  else { //if bucket is not empty
    var currentNode = this.buckets[index]; //set currentNode to first node at index
    while (currentNode) { //loop through chain of nodes or single node and return the correct email address
      if (currentNode.key === key) return currentNode.value; // if key on current node equal to key we passed in then return the value.
      currentNode = currentNode.next; //allows you to travel through every node in bucket
    }
    return null;  //if you go through whole chain and have no match return null
  }
};


HashTable.prototype.retrieveAll = function() {
  var allNodes = []; //define an empty array that will store all nodes
  for (var i = 0; i < this.numBuckets; i++) { //this loop takes us through every bucket in hashtable
      var currentNode = this.buckets[i]; //first node at the given bucket
      while(currentNode) { //while loop travels down chain of nodes if it exists
          allNodes.push(currentNode)// push currentnode into allNodes array
          currentNode = currentNode.next;
      }
  }
  return allNodes; //return all nodes array
}



var myHT = new HashTable(30);
//myHT.hash('Becca')
//console.log(myHT);


 myHT.insert('Dean', 'dean@gmail.com');
 myHT.insert('Megan', 'megan@gmail.com');
 myHT.insert('Dane', 'dane@yahoo.com');
 myHT.insert('Dean','deanmachine@gmail.com');
 myHT.insert('Megan', 'megansmith@gmail.com');
 myHT.insert('Dane', 'dane1010@outlook.com');
 myHT.insert('Joe', 'joey@facebook.com');
 myHT.insert('Samantha', 'sammy@twitter.com')

// console.log(myHT.retrieveAll())

//console.log(myHT.buckets)

 //console.log(myHT.get('Dane'))

console.log(myHT.retrieveAll())

//HASH TABLE have O(1) insertion and lookup

