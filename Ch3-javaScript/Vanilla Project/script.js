let age = 30;
age = 31;

const birthYear = 1991;

//Function Declaration
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

//Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

//Arrow Function
// const nameOfFunction = parameters => function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

function cutFruitPieces(fruit) {
  return fruit * 4;
}

//Objects
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037,
  job: "teacher",
  friends: ['Michael', 'John', 'Elizabeth']
};

console.log(jonas.lastName);

const interestedIn = prompt("what do you want to know about jonas choose between firstname, lastname, age, job");

//Use bracket notation when using var
console.log(jonas[interestedIn]);

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]); 
}else{
    console.log('Wrong request!');

}

//challenge
//Jonas has three friends and his best friend is called michael
var numFriends = jonas.friends.length;
var bestFriend = jonas.friends[0];

//Only strings
for(let i = 0; i < jonas.length;i++){

    if(typeof jonas[i] !== 'string') continue;

}

for(let i = 0; i < jonas.length;i++){

    if(typeof jonas[i] !== 'number') break;

}

const movements = [200, 400, -450];

movements.forEach(function(movement, i, arr){
    if(movement > 0){
        console.log(`You deposited ${movement}`);
    }else{
        console.log(`You withdrew ${Math.abs(movement)}`);
    }


})

