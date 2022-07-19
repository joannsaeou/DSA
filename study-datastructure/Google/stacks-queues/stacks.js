//stacks



//google
//udemy.com
//youtube


//Arrays  -- allow cache locality, makes them faster when accessing items in memory because they are right next to each other
//Linked Lists
//works well with stacks


/********************************** */



//queues  -- very simple answer

// Matt-- Joy-- Samir-- pavel
//matt first then joy then samir then pavel


//Arrays  -- do not built it with array -- they have indexes
//linked lists to implment it  -- it is better with linked lists


const a = 1;
const b = 10;
const c = 100;


console.log('1')
console.log('2')
console.log('3')


const one = () => {
  const two = () => {
    console.log('4');
  }
  two();
}





//call stack

//recursion -- function that calles itself. run foo and foo gets executed.
//keeps looping over and over having a recursion
function foo() {  //gets executed

  foo()//run again
}

foo(); //run



//call stack example //asynchronous programming
console.log('1');
setTimeout(() => {   //part of Web API
  console.log('2');
}, 2000)
console.log('3');


//call stack

// setTimeout(), 2000 //2 second

callback();




//web api

//callback queue

//event loop


