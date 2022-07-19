//google question

//given an array = [2,5,1,2,3,5,1,2,4];  -- i want a function that can enter this array
//        - this input is going thru all the numbers and tell me which one gets repeated first.
//   2 has already been seen so 2 is recurring number

//it should return 2

//given an array = [2,1,1,2,3,5,1,2,4];  - the first recurring number is 1
//it should return 1

//given an array = [2,3,4,5];   // there is no recurring number
//it should return undefined




function firstRecurChar(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {   //its a trick just go 1 to the right where i is the first indexes
      if (input[i] === input[j]) {
        return input[i];

      }
    }

  }
  return undefined;
}
firstRecurChar([2, 5, 1, 2, 3, 5, 1, 2, 4]);



