const userName = "Max";
// Code goes here!

let age = 30;
age = 29;

const add = (a: number, b: number) => a + b;
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (e) => console.log(e));
}

printOutput(add(5, 2));
console.log(add(5, 6));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  name: "jose",
  age: 25,
};

const copiaPersona = { ...person };
console.log(copiaPersona);

//restParameters
const numbers = 42;

const add1 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add1(5, 6, 7, 8);
console.log(addNumbers);

//Array and Objects Destructuring
const names = ["jose", "Andres", "Pedro", "Marcos"];

const persona = {
  name1: "Jose",
  age1: 25,
  signo: "Aries",
};

const { name1, age1 } = persona;

console.log(name1, age1, persona);
