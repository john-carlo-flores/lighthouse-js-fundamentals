// const sayHello = function (name) {
//   console.log("Hello, " + name);
// }

const sayHelloToConsole = function(name) {
  console.log("Hello, " + name);
}
sayHelloToConsole("John");

const returnSayHello = function(name) {
  return "Hello, " + name;
}

const greeting = returnSayHello("John");
console.log(greeting);

// sayHello("Caliban");
// sayHello("Miranda");
// sayHello("Ferdinand");