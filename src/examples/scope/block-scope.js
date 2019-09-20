var a = 1;
if (true) {
  var b = 2;
}

console.log(a + b);

// ES6 added new language features that adhered to block scope
// these were the 'let' and 'const' keyword

let c = 1;
if (true) {
  let d = 2;
}

//console.log(c + d); // :boom:
