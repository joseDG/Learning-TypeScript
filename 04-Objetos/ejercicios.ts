type Auto = {
    carroseria:string,
    modelo:string,
    antibalas:boolean,
    pasajeros:number,
    //signo de interrogracion es opcional
    disparar?: () => void 
}

let batimovil:Auto ={
    carroseria:"Nefgra",
    modelo:"sdfsdf",
    antibalas:true,
    pasajeros:6,
}

let supermovil:Auto ={
    carroseria:"Nefgra",
    modelo:"sdfsdf",
    antibalas:true,
    pasajeros:6,
}

type Villanos ={
    nombre: string,
    edad:number,
    mutante:boolean
};

let villanos: Villanos[] = [{
    nombre: "sadas",
    edad:200,
    mutante:true 
},
{
    nombre: "sadas",
    edad:200,
    mutante:true 
},
{
    nombre: "sadas",
    edad:200,
    mutante:true 
},
]

//Multiples tipos 
type Charles = {
    poder:string,
    estatura:number
};

type Apocalipsis = {
    lider: boolean,
    miembros:string[]
}

let charles:Charles = {
    poder:"asdsdf",
    estatura: 1.78
};

let apocalipsis:Apocalipsis = {
    lider:true,
    miembros: ["magneto","Tormeta","physico"]
}

//Mystes debe pdoer ser cualqueri de esos dos mutantes 
let mystique: Charles | Apocalipsis;

mystique = charles;
mystique = apocalipsis;
