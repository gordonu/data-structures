// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

//Linked list is an ordered collection of data 
//collection contains nodes
//each node contains data & reference to next node
//when we put nodes together = linked list
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertFirst(data) {
      this.head = new Node(data, this.head);
    }
  
    // insertFirst(data) {
    //   this.insertAt(data, 0)
    // }
  
    size(data) {
      let counter = 0;
      let node = this.head;
      while (node) {
        counter++;
        node = node.next;
      }
      return counter
    }
  
    // getFirst() {
    //   return this.head
    // }
  
    getFirst() {
      return this.getAt(0)
    }
  
    // getLast() {
    //   if (!this.head) {
    //     return null;
    //   }
  
    //   let node = this.head
    //   while (node) {
    //     if (!node.next) return node
    //     node = node.next
    //   }
    // }
  
    getLast() {
      return this.getAt(this.size() - 1)
    }
  
    clear() {
      this.head = null
    }
  
    removeFirst() {
      if (!this.head) return;
      this.head = this.head.next;
    }
  
    //Not working.
    removeLast() {
      if (!this.head) {
        return;
      }
      if (!this.head.next) {
        this.head = null;
        return;
      }
      let previous = this.head;
      let node = this.head.next;
  
      while (node.next) {
        previous = node;
        node = node.next;
      }
      previous.next = null
    }
  
    //  insertLast(data) {
    //   if(!this.head) this.head = new Node(data, this.head);
  
    //   let node = this.head.next;
    //   let previous = this.head
    //   while(node) {
    //     previous = node
    //     node = node.next
    //   }
    //   console.log('prev', previous)
    //   previous.next = new Node(data)
    //   }
  
    insertLast(data) {
      const last = this.getLast();
      if (last) {
        //There are some existing nodes in our chain
        last.next = new Node(data);
      } else {
        //The chain is empty!
        this.head = new Node(data);
      }
    }
  
    // getAt(index) {
    //   if(!this.head) return null
    //   if(index === 0) return this.head
  
    //   let counter = 0
    //   let node = this.head;
    //   while(node && counter < index) {
    //     counter++
    //     node = node.next
    //   }
    // return node
    // }
  
    getAt(index) {
  
      let node = this.head;
      let counter = 0;
      while (node) {
        if (counter === index) {
          return node;
        }
        counter++;
        node = node.next
      }
      return null;
    }
  
    //   removeAt(index) {
    //     if (!this.head) return null
    //     if (index === 0) {
    //       this.head = this.head.next
    //       return;
    //     }
    //     let counter = 0;
    //     let node = this.head
    //     let previous;
    //     while (node) {
    //       if (counter === index) {
    //         // console.log(previous)
    //         previous.next = previous.next.next
    //       }
    //       counter++;
    //       previous = node
    //       node = node.next
    //     }
    //   }
    // }
  
    // //CAll getAt at an index before
    // removeAt(index) {
    //   if(!this.head) return null
    //   if(index === 0) {
    //     this.head = this.head.next;
    //     return
    //   }
    //   let size = this.size()
    //   if(index > size) return null
    //   let node = this.getAt(index - 1)
    //   node.next = node.next.next
    // }
  
    removeAt(index) {
      if (!this.head) {
        return;
      }
      if (index === 0) {
        this.head = this.head.next;
        return;
      }
  
      const previous = this.getAt(index - 1);
      if (!previous || !previous.next) {
        return;
      }
      previous.next = previous.next.next;
    }
  
    // insertAt(data, index) {
  
    //   if(!this.head || index <= 0){ 
    //     this.head = new Node(data, this.head); //linking to the previous head.. that's why this.head is in the arguments
    //     return;
    //   }
  
    //   const size = this.size()
    //   if(index > size) {
    //     const node1 = this.getAt(size-1);
    //     node1.next = new Node(data)
    //     return;
    //   }
    //   const node = this.getAt(index)    
    //   const previous = this.getAt(index-1)
  
    //   previous.next = new Node(data, node)
    // } 
  
    insertAt(data, index) {
      if (!this.head) {
        this.head = new Node(data);
        return;
      }
  
      if (index === 0) {
        this.head = new Node(data, this.head);
      }
  
      const previous = this.getAt(index - 1) || this.getLast();
      const node = new Node(data, previous.next);
      previous.next = node;
    }
  
    forEach(func) {
      let node = this.head
  
      while (node) {
        func(node)
        node = node.next
      }
    }
  
  }
  
  // TEST INSERT FIRST 
  // const nodeOne = new Node(5);
  // const list = new LinkedList();
  // list.head = nodeOne;
  // list.insertFirst(15);
  // console.log(list)
  
  
  const n1 = new Node('Hi')
  console.log(n1.data) // 'Hi'
  console.log(n1.next) // null
  const n2 = new Node('There', n1);
  console.log(n2.next) //returns n1
  
  
  
  
  module.exports = { Node, LinkedList };
  
  