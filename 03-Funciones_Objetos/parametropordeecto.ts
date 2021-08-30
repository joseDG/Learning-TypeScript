function nombresCompletos(
    nombre:string, apellido:string, capitalizado:boolean = true){

        if (capitalizado){
            return capitalziar(nombre) + " " + capitalziar(apellido);
        }else{
            nombre + " " + apellido;
        }

    }

function capitalziar( palabra:string ):string{
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}

let nombre = nombresCompletos("tony","stark", false);

console.log(nombre);