var a = 1;
console.log(a); // 1.
console.log(b); // 2.
console.log(add(a, b)); // 3.

function add(a, b) {
  return a + b; // a and b are shadowed
}

var b = 2;

console.log(b); // 4.
console.log(add(a, b)); // 5.
// console.log(c); // what happens if we uncomment this?
