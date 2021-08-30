function mostrarHola(){
    let numero1:number = 5;
    let numero2:number = 4;
    let total:number = numero1 + numero2;
    console.log('La suma es: ', total);
}

mostrarHola();

function mostrarMensaje(mensaje:string){
    return mensaje
}

console.log(mostrarMensaje("Hola Jose"));