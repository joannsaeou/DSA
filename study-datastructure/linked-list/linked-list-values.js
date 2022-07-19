/*
linked list in JavaScript(07/05/2022)
*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}




//write traversal



const a = new Node('A');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');


a.next = b;
b.next = c;
c.next = d;



// A -> B -> C -> D -> NULL


//arrow function ES6
const printLinkedList = (head) => {
  let current = head;  // beginning of linked list
  while (current !== null) {
    console.log(current.value);
    current = current.next; //update the current - this a variable assignment 
  }

};

//call it
printLinkedList(a);



















//07/13/2022 study date
//linked list example 


class LinkedListOne {
  constructor(value) {
    this.head = {
      value: value,
     next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head; // point to head which is first item on list
    this.head = newNode; //to make sure it point to new node
    this.length++;
    return this;
  }
}

const currentLinkedList = new LinkedListOne(200);
currentLinkedList.append(50);
currentLinkedList.append(10000);
currentLinkedList.prepend(3);
console.log(currentLinkedList);


// --> 10 --> 99--->5 --> 16


class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  ///some looping is involved
  printList() {  //this a function
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next // use it to update 
    }
    return array;
  }
  insert(index, value) {
    //check parameters/params
    if (index >= this.length) {               //
      return this.append(value);                        //just add to end of list
    }
    const newNode = {
      value: value,
      next: null
    };
//tricky part
    const leader =  this.traverseToIndex(index-1)   //somehow traverse 1 by 1 until find index we looking for
    const holdingPointer = leader.next;        //will reference it in this variable
    leader.next = newNode;

  }
  //traversing part or looping
  traverseToIndex(index) {
//check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
//return something
    
    return currentNode;
  }
  remove(index) {
    //check parameters if index is positive
    //get reference to the leader
    const leader = this.traverseToIndex(index - 1);            //remove certain number
    const unwantedNode = leader.next;                         // need a reference to a certain number
    leader.next = unwantedNode.next;  
    this.length--;   //decrement to remove a node
    return this.printList();
  }
}

//two nodes that are connected *-*     / insert inbetween them
                                
const myLinkedList = new LinkedList(110); 
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList(1);
myLinkedList.insert(4, 22);
myLinkedList.insert(20, 88);
myLinkedList.remove(1);
console.log(myLinkedList);


