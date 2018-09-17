//Variable types in ES6

//Let defines variables for a BLOCK
if(true){
  let x = 100;
  document.write('x = ' + x + '<br>');
}

//Var defines variables GLOBALLY, or by FUNCTION
var y = 200;

if(true){
  document.write('y = ' + y + '<br>');
}

//Const defines CONSTANT variables that cannot be changed
const z = 300;

///////////////////////////////////////////////////////////////

//ES6 Data Types
document.write(typeof true + '<br>');
document.write(typeof 3.14 + '<br>');
document.write(typeof 'string' + '<br>');
document.write(typeof Symbol() + '<br>');
document.write(typeof {a:1} + '<br>');
document.write(typeof [1,2,3] + '<br>');
document.write(typeof undefined + '<br>');

//Template Literals
///////////////////////////////////////////////////////////////

let fName = 'Blair';
let lName = 'Ramsay';

document.write(`${fName} ${lName}<br>`);

///////////////////////////////////////////////////////////////

let num1 = 10;
let num2 = 5;

document.write(`10 * 5 = ${num1 * num2}<br>`);

///////////////////////////////////////////////////////////////

function doMath(strings, ...values){
  if(strings[0] == 'Add'){
    document.write(`${values[0]} + ${values[1]} =
      ${values[0] + values[1]}<br>`);
  }else if(strings[0] == 'Sub'){
    document.write(`${values[0]} - ${values[1]} =
      ${values[0] - values[1]}<br>`);
  }
}

doMath `Add${10} ${20}`;
doMath `Sub${10} ${20}`;

///////////////////////////////////////////////////////////////

for(let c of fName){
  document.write(`${c}<br>`);
}

document.write('Hello '.repeat(3) + '<br>');

document.write(fName.startsWith('Bl') + '<br>');

document.write(fName.endsWith('ir') + '<br>');

document.write(fName.includes('lair') + '<br>');

///////////////////////////////////////////////////////////////

//Give default values to variables

function getSum(num1 = 1, num2 = 1){
  document.write(`${num1} + ${num2} = ${num1 + num2}<br>`);
  document.write(`${arguments[0]} + ${arguments[1]}<br>`);
}

getSum(3);

//Treat values as an array

function getSumMore(...vals){
  let sum = 0;
  for(let i=0; i<vals.length; i++){
    sum += vals[i];
  }
  document.write(`The Sum Is ${sum}<br>`);
}

getSumMore(1,2,3,4);

//Pass array as variable

let vals = [1,2,3,4,5];
getSumMore(...vals);

///////////////////////////////////////////////////////////////

//Arrow Functions

let difference = (num1, num2) => num1 - num2;
document.write(`5 - 10 = ${difference(5,10)}<br>`);

let mult = (num1, num2) => {
  let product = num1 * num2;
  document.write(`${num1} * ${num2} = ${product}<br>`);
}

mult(5,50);

let valArr = [1,2,3,4,5];

let sumVals = valArr.reduce((a,b) => a+b);
document.write(`Sum : ${sumVals}<br>`);

let evens = valArr.filter(v => v %2 == 0);
document.write(`Evens : ${evens}<br>`);

let doubles = valArr.filter(v => v * 2);
document.write(`Doubles : ${doubles}<br>`);

///////////////////////////////////////////////////////////////

//Object Literals

function createAnimal(name, owner){
  return{
    name,
    owner,
    getInfo(){
      return `${this.name} is owned by ${this.owner}`
    },
    address: {
      street: '123 Main Street',
      city: 'Glasgow'
    }
  };
}

var spot = createAnimal('Spot', "Doug");

document.write(`${spot.getInfo()}<br>`);

document.write(`${spot.name} is at ${spot.address.street}
  in ${spot.address.city}<br>`);

document.write(`${Object.getOwnPropertyNames(spot).join(' ')}<br>`);

//Destructuring

let {name, owner} = spot;
document.write(`Name: ${name}<br>`);
document.write(`Owner: ${owner}<br>`);

let { address } = spot;
document.write(`Address: ${address.street}<br>`);

let favNums = [2.718, .5772, 4.6692];

let[,,chaos] = favNums;
document.write(`Chaos: ${chaos}<br>`);

let[, ...last2] = favNums;
document.write(`2nd Num: ${last2[0]}<br>`);

let val1 = 1, val2 = 2;
[val1, val2] = [val2, val1];
document.write(`Val2: ${val2}<br>`);

///////////////////////////////////////////////////////////////

//Classes

class Mammal{

  constructor(name){
    this._name = name;
  }

  get name(){
    return this._name;
  }

  set name(name){
    this._name = name;
  }

  static makeMammal(name){
    return new Mammal(name);
  }

  getInfo(){
    return `${this.name} is a mammal<br>`;
  }

}

let monkey = new Mammal('Fred');

monkey.name = 'Mark';

document.write(`Mammal : ${monkey.name}<br>`);

let chipmunk = Mammal.makeMammal('Chipper');

document.write(`Mammal 2 : ${chipmunk.name}<br>`);

class Marsupial extends Mammal{
  constructor(name, hasPouch){
    super(name);
    this._hasPouch = hasPouch;
  }

  get hasPouch(){
    return this._hasPouch;
  }

  set hasPouch(hasPouch){
    this._hasPouch = hasPouch;
  }

  getInfo(){
    return `${this.name} is a marsupial<br>`;
  }

}

let kangaroo = new Marsupial("Paul", true);
document.write(`It is ${kangaroo.hasPouch} that
  ${kangaroo.name} has a pouch<br>`);

document.write(`${chipmunk.getInfo()}`);
document.write(`${kangaroo.getInfo()}`);

function getClass(classType){
  if (classType == 1){
    return Mammal;
  }else {
    return Marsupial;
  }
}

class Koala extends getClass(2){
  constructor(name){
    super(name);
  }
}

let carl = new Koala('Carl');
document.write(`${carl.getInfo()}`);

///////////////////////////////////////////////////////////////

//Symbols

let capital = Symbol("State Capital");

let pennsylvania = {};
pennsylvania[capital] = "Harrisburg";
document.write(`Capital of PA : ${pennsylvania[capital]}<br>`);

document.write(`Symbol Capital : ${capital.toString()}<br>`);

let employNum = Symbol.for("Employee Number");

let bobSmith = {};
bobSmith[employNum] = 11;

let sallyMarks = {};
sallyMarks[employNum] = 10;

document.write(`Bob : ${bobSmith[employNum]}<br>`);
document.write(`Sally : ${sallyMarks[employNum]}<br>`);

///////////////////////////////////////////////////////////////

//Arrays

let array1 = Array.of(1,2,3);

let array2 = Array.from('word');

let array3 = Array.from(array1, (value) => value * 2);

for(let val of array1) document.write(`Array 1 Val : ${val}<br>`);

for(let val of array2) document.write(`Array 2 Val : ${val}<br>`);

for(let val of array3) document.write(`Array 3 Val : ${val}<br>`);

///////////////////////////////////////////////////////////////

//Sets (No Duplication)

var randSet = new Set();
randSet.add(10);
randSet.add('Word');

document.write(`Has 10 : ${randSet.has(10)}<br>`);

document.write(`Set Size : ${randSet.size}<br>`);

randSet.delete(10);

for(let val of randSet) document.write(`Set Val : ${val}<br>`);

///////////////////////////////////////////////////////////////

//Maps (Set of key value pairs)

var randMap = new Map();
randMap.set('key1', 'Random String');
randMap.set('key2', 10);

document.write(`Key 1 : ${randMap.get('key1')}<br>`);
document.write(`Key 2 : ${randMap.get('key2')}<br>`);

document.write(`Map Size : ${randMap.size}<br>`);

randMap.forEach(function(value, key){
  document.write(`${key} : ${value}<br>`);
});

///////////////////////////////////////////////////////////////
