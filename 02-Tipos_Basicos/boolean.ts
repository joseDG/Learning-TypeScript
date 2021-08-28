let esSuperman:boolean = true;
let esBatman:boolean;
let esAcuaman:boolean = true;

if (esSuperman){
    console.log('Estamos salvados');
}else{
    console.log('Estanos muertos');
}

esSuperman = convertirClark();

function convertirClark(){
    return false;
}

if (esSuperman){
    console.log('Estamos salvados');
}else{
    console.log('Estanos muertos');
}
