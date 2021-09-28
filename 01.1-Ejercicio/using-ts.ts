var button = document.querySelector("button");
var input1 = document.querySelector("num1")! as HTMLInputElement;
var input2 = document.querySelector("num2")! as HTMLInputElement;

function add(num1: number, num2: number): Number {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
