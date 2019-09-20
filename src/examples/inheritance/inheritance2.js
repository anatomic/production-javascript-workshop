const { Person } = require("./inheritance");

function Teacher(firstName, lastName) {
  Person.call(this, firstName, lastName);
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greet = function greet() {
  console.log(`Hi, I'm a teacher called ${this.firstName} ${this.lastName}`);
};

const a = new Person("Ian", "Thomas");
const b = new Teacher("Stuart", "Pearce");

a.greet(); // Hi, I'm Ian Thomas
b.greet(); // Hi, I'm Stuart Pearce
