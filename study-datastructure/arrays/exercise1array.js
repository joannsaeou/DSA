//create a function that reverse a string:
// 'Hi my name is Joann' should be:
// ' nnaoJ si eman yM iH'
//this is not the cleanest way, not simple. not readable.

//create a function that was reverse a string to ABC order string
// 'nnaoJ si eman yM iH''  to "Hi My name is Joann"




function reverse(str) {
//check input
  //if sting length is less than 2, i'm receiving 1 letter
  //can add different input validation here, such as typeof keyword
  if (!str || str.length < 2 || typeof str !== 'string') {     //if no stringh, so it is undefined
    return 'hmm that is not good.';
  }   

  //convert into array so create a backwards array

  const backwards = [];
  const totalItems = str.length - 1; 
  //loop thru our string
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
    
  }         
  console.log(backwards);


  return backwards.join('')   //joins all items in array
}





// function reverse2(str) {
//   return str.split('').reverse().join('')
// }

// console.log(reverse2 ('Hi my name is Joann'));


function reverse3(str) {
  return str.split('').reverse().join('')
}

console.log(reverse3 ('ugly ugly ugly ugly'));


//same as  line 39 but shorter, simple, easier to read
const reverse3 = str => str.split('').reverse().join('');


//same as line 54 but little bit fancy
const reverse4 = str => [...str].reverse  // spread operator [...str] is called structuring. OPTIONAL






//You're returning values at the end there with the return statement, but not doing anything with the returned value. 

//So for instance on line 30 if you did 
//const reversedStr = reverse('Hi my name is Joann');
//Then on line 31 you did
//console.log(reversedStr) then you'd be able to see it

//You can do it all together if you want so like 
//console.log(reverse('Hi my name is Joann) ) 









//to reverse, first thing to do is check of out input




