var a = 1; // a is declared in the top level scope

function add() {
  var b = 2; // b is declared within the scope of the 'add' function
  return a + b; // add can access both a and b
}

console.log(a);
console.log(b); // What will be logged out here?
console.log(add());
