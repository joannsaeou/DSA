

//give 2 arrays, create a function that let's a user know (true or false)
// whether these two arrays contains any common items
//for example:
//const array1 = ['a','b','c','x'];
//const array2 = ['z','y','i];
//should return false.
//-----------------------
//const array1 = ['x','y',z];
//const array2 = ['z','y','x']
//should return false



//2 parameters - arrays - no size limit
//return true or false

//we might need two for loop nested

//it could turn into O(n^2)

//this function going to receive 2 arrays in a parameter
//2 for loops and 1 nested on another
//this become O(n^2)

//O(a*b)
// const array1 = ['a','b','c','x'];
// const array2 = ['z', 'y', 'x'];
  
// function containsCommonItem(arr1, arr2) {
 
//   for (let i = 0; i < arr1.length; i++) {  //as long as i is less than array 1 with .length we gonna increment
//     for (let j = 0; i < arr2.length; i++) { //gonna increment everytime we loop thru it
//       if (arr1[i] === arr2[j]) {
      
//         return true;
//       }

//     }
//   }
//   return false;
// }


//call it
// containsCommonItem(array1, array2);



const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];


//if can convert array to object

//array1 ==> obj {
//a: true;,
//b: true,
//c: true,
//x: true
//}
//array2[index] === obj.properties












//create new function

function containsCommonItem(arr1, arr2) {
    //loop thru first array and create object
  //where properties ==== items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    //this syntax means if no map i
    //if map.a is opposite, if map.a exist it will return true if not false
    if(!map[array[i]]) {    
      const item = array1[i];  //lets make array1 a equals to item
      map[item] = true;  
 
}
  }

  //loop thru second array and check if item in second
  //array exists on created object.

  for (let j = 0; j < arr2.length; j++) {
     //check if contains first item in second array
    if (map[array2[j]]) {
      return true;
    }
  }
}


//O(a + b) Time Complexity


containsCommonItem(array1,array2)
