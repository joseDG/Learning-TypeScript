function combinada(input1: number | string, input2: number | string) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinadaAges = combinada(30, 26);
console.log(combinadaAges);

const combinameNames = combinada("MaZ", "Ana");
console.log(combinameNames);
