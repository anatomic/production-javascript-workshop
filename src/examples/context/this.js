const a = {
  firstName: "Ian",
  lastName: "Thomas"
};

const b = {
  firstName: "Stuart",
  lastName: "Pearce"
};

function greet() {
  console.log(`Hi, I'm ${this.firstName} ${this.lastName}`);
}

a.sayHello = greet;
b.greet = greet;

a.sayHello(); // Hi, I'm Ian Thomas
b.greet(); // Hi, I'm Stuart Pearce
