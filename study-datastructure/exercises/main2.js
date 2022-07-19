const age = 15;

const currentAge = age >= 18;

if(age <= currentAge || currentAge >= age ) {
  console.log('Yay! Kyle can start driving license exam!');
} else {
  const yearsLeft = 18 - age;

  console.log(`Kyle is too young. Wait another ${yearsLeft} years : `);
}



const massMark = 78;
const heightMark = 1.69;
const massjohn = 92;
const heightJohn = 1.96;

const BMIMark = massMark / heightMark ** 2;   //forumla to convert mass to height
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);