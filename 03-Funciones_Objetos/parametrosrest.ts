function nombreCompleto( nombre:string, ...losDemasParametros:string[]):string{
    return nombre + " " + losDemasParametros.join("");
}

let superman:String = nombreCompleto("CLark", "Joseth", "Kent");
let ironman:string = nombreCompleto("Antony", "edward");

console.log(superman);
console.log(ironman);