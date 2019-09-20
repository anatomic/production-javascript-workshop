const a = 1;
const b = 2;
console.log(a); // This still works as expected

b = 3;
console.log(b); // Is the behaviour here different?
console.log(add(a, b));

function add(a, b) {
  return a + b;
}


// ...
