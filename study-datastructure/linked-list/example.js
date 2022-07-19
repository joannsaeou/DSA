
//arrays in JavaScript are just objects with integers based keys that act like indexes

//start off with creating a class

class MyArray {
  constructor() {
    //this constructor will have 2 data point, one is length propety.
    this.length = 0;  //checks how many items the array has.
    this.data = {}; // this is going to be an object.

  }
  //create a get method to take an index
  // to grab the data from memory
  get(index) {
    return this.data[index]             // refers to the data created inside the constructor
  }
  push(item) {
    this.data[this.length] = item;    //a method that will take in an item that we will give it
    this.length++                    //now the array has a length of one instead of zero
    return this.length;             //return the length of array
  }
  //add the pop command to remove the last item of the array'
  pop() {
    const lastItem = this.data[this.length - 1] // grab the last item at index of length
    delete this.data[this.length - 1]            // delete that item
    this.length--;    //to decrease the length of data by 1
    return lastItem;
  }

  //going to take an index.  Which item you want to delete?
  //this going to delete and shift all items 1 by 1 
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);


  }
  //method of my array with index of parameter
  //this is where the fun parts comes in to play
  shiftItems(index) {
    //have to loop it
    //shifting items to the left by 1
    for (let i = index; i < this.length - 1; i++)
    { 
      this.data[i] = this.data[i+1];   //add data right next to it
    }
//shifted everything 1 by 1, but never touched the very last item because we stopped when i is less than this length minus one
    delete this.data[this.length - 1]      //delete last item in the array
    this.length--     //decrement our length - we just delete the last item
  }

}

//instead let's add another function that does this for us that does the shifting of data for us 
//method simply means is a function within a class


//to create a new my array ~ all we need to do is say const new array
//new keyword is to instantiate this or create a copy of this class
const newArray = new MyArray();
newArray.push('hi');
newArray.push('You');
newArray.push('!');
// newArray.pop();
// newArray.pop();
newArray.delete(0);
newArray.push('are');
newArray.push('nice!');

console.log(newArray);   //undefined because there's nothing in this object, no items
//run a new array
newArray.delete(1);   
console.log(newArray);









//7/07/2022  from 3:30pm - 4:12pm


//whats the most common action that we have in Array? - its the access to access the data