// alert("Hola");
// let calificacion1 = prompt("Dime tu primera calificacion");
// calificacion1 = Number(calificacion1);
// let calificacion2 = prompt("Dime tu segunda calificacion");
// calificacion2 = Number(calificacion2);
// let calificacion3 = prompt("Dime tu tercera calificacion");
// calificacion3 = Number(calificacion3);
// let promedio = (calificacion1+calificacion2+calificacion3)/3;
// Number(promedio);
// console.log(promedio);
function calcularPromedio() {
    // Obtener los valores de las calificaciones
    var calificacion1 = parseFloat(document.getElementById('calificacion1').value);
    var calificacion2 = parseFloat(document.getElementById('calificacion2').value);
    var calificacion3 = parseFloat(document.getElementById('calificacion3').value);

    // Calcular el promedio
    var promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

    // Mostrar el resultado
    var resultadoDiv = document.getElementById('resultado');
    if (promedio > 8) {
        resultadoDiv.innerHTML = '<p>¡Felicidades, lo lograste!</p>';
    } else {
        resultadoDiv.innerHTML = '<p>¡Lo siento, tienes ordinario!</p>';
    }
}
