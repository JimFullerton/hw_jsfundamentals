// Exercise 1
console.log("*** Exercise 1 ***");

console.log(7 + 3); // returns 10
console.log(9 % 2); // returns 1
console.log(typeof(42)); // returns number
console.log(typeof(2) === typeof(9.24)); // returns true
console.log(42 / 0); // returns infinity
console.log(9 / "player1"); // returns NaN
console.log(NaN === NaN); // returns false (what the !?)
console.log(typeof(NaN)); // returns number (really ??!!)
console.log(typeof parseInt("42")); // returns number
console.log("Brendan" + " Eich"); // returns Brendan Eich
var firstName = "Brendan";
var lastName = "Eich";
console.log(firstName + " " + lastName); // returns Brendan Eich
var phoneNumber = "08798976";
console.log(phoneNumber.length); // returns 8
console.log("Brendan" === "Brendan"); // returns true
var fName;
if(fName) console.log(`First name is ${fName}`); // returns nothing (fName is undefined, so if returns False)
var name = "";
if(name) console.log(`First name is ${name}`); // returns nothing (name is empty, so if returns False)

// Exercise 2
console.log("*** Exercise 2 ***");

var score = 10;
switch(score) {
  case 10:
  console.log("Distinction");
  break;
  case 9:
  console.log("Merit");
  break;
  case 8:
  console.log("Pass");
  break;
  default:
  console.log("Fail");
}

// Exercise 3
console.log("*** Exercise 3 ***");

var coffees = [
  { type:"Latte", price:2.65 },
  { type:"Cappuccino", price:2.75 },
  { type:"Flat white", price:2.95 },
  { type:"Super-dooper Mocha Deluxe", price:3.79 }
];

for (coffee of coffees) {
  console.log(coffee.type + "s cost £" + coffee.price + " each");
}

// Exercise 4
console.log("*** Exercise 4 ***");

var currentPlayer = 'x';
var grid = [['o', 'x', 'x'], [null, 'x', 'o'], [null, 'x', 'x']];

if ((grid[0][0]==currentPlayer && grid[0][1]==currentPlayer && grid[0][2]==currentPlayer) ||
   (grid[1][0]==currentPlayer && grid[1][1]==currentPlayer && grid[1][2]==currentPlayer) ||
   (grid[2][0]==currentPlayer && grid[2][1]==currentPlayer && grid[2][2]==currentPlayer) ||
   (grid[0][0]==currentPlayer && grid[1][0]==currentPlayer && grid[2][0]==currentPlayer) ||
   (grid[0][1]==currentPlayer && grid[1][1]==currentPlayer && grid[2][1]==currentPlayer) ||
   (grid[0][2]==currentPlayer && grid[1][2]==currentPlayer && grid[2][2]==currentPlayer) ||
   (grid[0][0]==currentPlayer && grid[1][1]==currentPlayer && grid[2][2]==currentPlayer) ||
   (grid[0][2]==currentPlayer && grid[1][1]==currentPlayer && grid[2][0]==currentPlayer)) {
     console.log("x wins");
   } else {
     console.log("no win");
   }

// console.log(grid[0][0]) // prints 'x'

// spare parts for grid
// ['x','x','x']
// ['o', null, 'o']
// [null, null, null]
// var grid = [['x','x','x'], ['o', null, 'o'], [null, null, null]];
