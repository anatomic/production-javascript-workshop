function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function greet() {
  console.log(`Hi, I'm ${this.firstName} ${this.lastName}`);
}

Person.prototype.greet = greet;

const a = new Person("Ian", "Thomas");
const b = new Person("Stuart", "Pearce");

a.greet(); // Hi, I'm Ian Thomas
b.greet(); // Hi, I'm Stuart Pearce
