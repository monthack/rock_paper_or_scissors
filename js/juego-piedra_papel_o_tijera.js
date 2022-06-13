
function juego(objeto1,objeto2) {
    let piedra = "piedra";
    let papel = "papel";
    let tijera = "tijera";

    if(objeto1 == piedra && objeto2 == tijera  || objeto1 == tijera && objeto2 == piedra){
        console.log("Gana piedra"); 
    } 
    else if (objeto1 == piedra && objeto2 == piedra  || objeto1 == papel && objeto2 == papel || objeto1 == tijera && objeto2 == tijera) {
        console.log("Empate");
    }
    else if(objeto1 == papel && objeto2 == tijera || objeto1 == tijera && objeto2 == papel){
        console.log("Gana papel");

    } else if(objeto1 == piedra && objeto2 == papel || objeto1 == papel && objeto2 == piedra){
        console.log("Gana papel");

    }  else if(objeto1 == ""){
        console.log("Elige una opcion");
    } else {
        console.log("Elige una opcion valida");
    }


}

juego("papel","tijera");