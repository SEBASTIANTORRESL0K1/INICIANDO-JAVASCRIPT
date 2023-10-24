alert("Hola, Bienvenido!");
let edad = prompt("¿Que edad tienes?");
if (edad=>18) {
    let nombre = prompt("Qué NOMBRE tienes?");
    let apellido = prompt("Qué APELLIDO tienes?");
    let saludo= "hola "+ " "+ nombre + " "+ apellido;
    document.write(saludo);
}
else
{let efe="Lo siento chiquitin, eres menor de edad"
    document.write(efe)};