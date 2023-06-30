let hora = parseInt(prompt('Ingresa la hora que es:'));
if(hora>=6 && hora<=12){
    alert("Buenos dias!");
}else if(hora>=13 && hora<=18){
    alert("Buenas tardes!");
}else if(hora>=19 && hora<=24 || hora>=0 && hora<=5){
    alert("Buenas noches!");
}else{
    alert("No has ingresado un número entre 0 y 24");
}

while (hora < 100){
    if(hora % 2 === 0){
        hora = hora + 2;
        console.log(hora);
    }else{
        console.log('Tu hora es un numero impar');
        break;
    }
}

function simulador() {
    let promo1 = 1200;
    let promo2 = 1500;
    let promo3 = 1700;

    let promo = parseInt(prompt("Por favor, ingrese el número de promo que desea (1, 2 o 3)"));
    let doble = prompt("¿Desea que su hamburguesa sea doble?");
    let papas = prompt("¿Desea ordenar papas?");

    let total = 0;

    switch (promo) {
        case 1:
            total = promo1;
            break;
        case 2:
            total = promo2;
            break;
        case 3:
            total = promo3;
            break;
        default:
            alert("La opción de promo ingresada no es válida.");
            return;
    }

    if (doble === "si") {
        total += 500;
    }

    if (papas === "si") {
        total += 300;
    }
    alert("El total a pagar es de " + total);
}
simulador();