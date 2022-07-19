

class Node {
  constructor(value) {
    this.value = value;
      this.next = null;
  }
}


//this is not hoisting this is just defining variables
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');
const g = new Node('G');


a.next = b;
b.next = c;
c.next = d;

d.next = e;
e.next = f;




    // a -> B -> C -> D -> NULL
    // cur
const printLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;  //set the current to next node to B then C until it hit NULL
  }

};



//     a -> B -> C -> D -> NULL
//                head
//recursive part

// const printLinkedList = (head) => {
//   if (head === null) return;   
//   console.log(head.value);
//   printLinkedList(head.next);  //recursive calls
// }


// //continue until head is D 

printLinkedList(a);
console.log(a);
