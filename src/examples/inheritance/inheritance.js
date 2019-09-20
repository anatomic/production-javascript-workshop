function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greet = function greet() {
  console.log(`Hi, I'm ${this.firstName} ${this.lastName}`);
};

function Teacher(firstName, lastName) {
  Person.call(this, firstName, lastName);
}

const a = new Person("Ian", "Thomas");
const b = new Teacher("Stuart", "Pearce");

a.greet(); // Hi, I'm Ian Thomas
b.greet(); // :boom:

module.exports = { Person };
