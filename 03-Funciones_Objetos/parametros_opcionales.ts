function nombreCompleto(nombre:string, apellido:string):string{
    if (apellido){
        return nombre + '' + apellido;
    }else{
        return nombre;
    }
}

let nombreC = nombreCompleto("jose","");
console.log(nombreC);