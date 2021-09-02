let capitan_america = {
    nombre: "Hulk",
    darOrden_hulk:function(){

        setTimeout(() => {
            console.log(this.nombre + "smash!!!");
        }, 1000)
    }
}

capitan_america.darOrden_hulk();