type Heroe = {
    nombre: string,
    edad: number,
    poderes:string[],
    getNombre:()=>string
};

let flash: Heroe = {
    nombre: "Barry Allen",
    edad:24,
    poderes: ["Puden correr","viaajr muy rapido"],
    getNombre(){
        return this.nombre;
    }
};


let superman: Heroe = {
    nombre: "Barry Allen",
    edad:24,
    poderes: ["Puden correr","viaajr muy rapido"],
    getNombre(){
        return this.nombre;
    }
};
flash.getNombre()