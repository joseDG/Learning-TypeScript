function sumar(a:number, b:number):number{
    return a + b
}

console.log(sumar(5,6));

let contar = function(heroes:string[]):number{
    return heroes.length;
}

let frutas:string[] = ["pera","manzanas","papayas"];
console.log(frutas);

function llamarBatman(llamar:boolean = true):void{
    if (llamar){
        console.log("Batisenal activado");
    }
}

llamarBatman();

//Rest
function unirHeroes( ... personas:string[]){
    return personas.join(", ");
}

//Tipo de funcion
function noHacerNada(numero:number, texto:string, booleano:boolean, arreglo:any[]){

}

//crear el tipo de funcion que acepta la funcion "no hacer nada"
let noHacerNadaTampoco : (n:number, t:string, b:boolean, a:any[]) => void;

noHacerNadaTampoco = noHacerNada
