function add(a, b) {
  return a + b;
}

console.log(add(null, 5, 7)); // 12


const person = {
  firstName: "John",
  lastName: "Doe"
};

function greet() {
  return "Hello " + this.firstName;
}

console.log(greet.call(person)); // Hello John


// const person = {
//   firstName: "John",
//   lastName: "Doe"
// };

function greet() {
  return "Hello " + this.firstName;
}

const greetJohn = greet.bind(person);

console.log(greetJohn()); // Hello John


