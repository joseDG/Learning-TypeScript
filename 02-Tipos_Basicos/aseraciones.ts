//permitir cualqueir tipo para castear eso 
let cualquierValor:any = "Cualquier cosa";


let largoDelString:number = (<string>cualquierValor).length;

console.log(largoDelString);