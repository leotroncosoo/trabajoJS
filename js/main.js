//Bienvenidaa
let nombre = prompt("Ingrese su Nombre");
alert("Hola " + nombre + " Bienvenido. Invierta con nosotros y genere MAS!");

//Dinero que se desea invertir.
function montoAInvertir() {
    let monto = Number(prompt("Ingrese el Monto que desea Invertir (Hasta $1000 USD)"));
    while (monto < 0 || monto > 1000 ) {
        monto = Number(prompt("Error al ingresar monto. Vuelva a ingresar un monto valido (Hasta $1000 USD)"));
    }
    return monto;
}
let monto = montoAInvertir();


//A cuantos DIAS se desea invertir.
function plazoAInvertir() {
    let plazo = Number(prompt("Ingrese el Plazo de dias a Invertir (30 / 90 / 365)"));
    while (plazo != (30) && plazo != (90) && plazo != (365) ) {
        plazo = Number(prompt("Error Ingrese un Plazo VALIDO (30 / 90 / 365)"));
    }
    return plazo;
}
let plazo = plazoAInvertir();

//Cuenta para saber cantidad de ganancias acumuladas.
let intereses30 = 0.05;
let intereses90 = 0.15;
let intereses365 = 0.6;

if (plazo === 30) {
    let ganancias = monto * intereses30;
    alert("Sus ganancias de la inversión a 30  dias seran de: " + ganancias + "USD");
} else if (plazo === 90) {
    let ganancias = monto * intereses90;
    alert("Sus ganancias de la inversión a 90  dias seran de: " + ganancias + "USD");
} else if (plazo === 365) {
    let ganancias = monto * intereses365;
    alert("Sus ganancias de la inversión a 365 dias seran de: " + ganancias + "USD");
} else {
    alert("Plazo no válido");
}