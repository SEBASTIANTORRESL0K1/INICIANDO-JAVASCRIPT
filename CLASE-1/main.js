"use strict";
// Declarar variables en JS
// var variable global
//let variable
//const coonstante
//let y const nacen porque son variables con alcance o scope
//let nombre = prompt("Dame tu nombre") ;
//console.log(nombre) ;
//document.write(nombre);
//let texto = 'Mi nombre es Sebastian "Otro texto"'
//let edad = prompt("Dame tu edad");
//Number(edad);
//console.log(edad) 
//let edad_mas= edad + 5;
//console.log(typeof(edad_mas));
//let fecha= new Date;
//console.log(fecha);

//OPERADORES ARITMETICOS
//let suma= 1+2;
//let resta= 5-4;
//let multiplicacion= 2*6;
//let division= 9/3;
//let mod = 10 % 5; //residuo

//let uno = 1;
//uno++;
//c//onsole.log(uno); //Incremento de uno

//let dos = 2;
//dos--;
//console.log(dos); //Decremento de uno

//OPERADORES RELACIONALES
//let mayor = 5>3;
//let menor = 1<20;
//let mayoroigualque = 15 >= 10;
//let menoroigualque = 10<=1;
//let igual = 10 = "10";
//let diferente = 10 != 30;

//CLASE 2

//TIPOS DE DATOS ESPECIALES O COMPUESTOS

//ARRAYS - VECTORES - CONJUNTO DE DATOS Y PUEDEN SER DIFERENTE  TIPO
let frutas = ['pera', 'manzana', 'platano'];
let numeros = ['cinco', 6, 23, 'veinte'];

//OBJETOS -TIENEN ATRIBUTOS Y VALORES
let persona = { nombre: 'SEBASTIAN',
                edad:18,
                correo: 'svelasco13@ucol.mx'}

                //objeto JSON (Javascript Object Notation)
                    
 let personas = [{nombre: 'sebassss', edad:18, correo: 'svelasco13@ucol.mx',},
                    {nombre: 'val', edad:18, correo: 'vvega2@ucol.mx'}, persona,];
 console.log(personas);

 //OPERADORES LOGICOS

 //     AND/Y
let numero1= 10;
let numero2= 14;
 let and = !(!(numero1 >10 || numero2 >10));
