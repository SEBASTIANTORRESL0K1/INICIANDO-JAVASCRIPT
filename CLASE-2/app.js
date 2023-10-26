// let numero1 = 3;
// let numero2 = 20;

// if (numero1>numero2) {
//     document.write("El numero: "+numero1 + ", es mayor que " + numero2)
    
// }else{
//     document.write("El numero: "+numero2 + ", es mayor que " + numero1)
// }

// Pedir la edad  del usuario decirle si es mayor de edad siempre y cuando

// let edad = prompt("Dame tu edad");

// if (edad>0) {
//     if (edad>=18) {
//         document.write("Eres mayor de edad");
//     }else {
//         document.write("Eres menor de edad");

//  }else{
//         document.write("EDAD NO VÁLIDA");
//     }
// }

let dia = prompt("Selecciona un dia").toLowerCase();


switch (dia) {
    case 'lunes':
        console.log("El dia que seleccionaste es Lunes")
        break;
    case 'martes':
         console.log("El dia que seleccionaste es Martes")
        break;
    case 'miercoles':
        console.log("El dia que seleccionaste es Miercoles")
        break;
     case 'jueves':
        console.log("El dia que seleccionaste es Jueves")
        break;
    case 'viernes':
        console.log("El dia que seleccionaste es Viernes")
        break;
    default:
        console.log("Este no es un dia de la semana")
        break;
}