console.log('--------------------------------------');
console.log('EXERCISE 1 : VARIABLES AND OPERATORS');
console.log('--------------------------------------');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una
      3er variable.
*/

console.log('- Exercise 1.a: ');

var number1 = 5;
var number2 = 10;
var result = 0;

result = number1 + number2;

console.log(result);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('- Exercise 1.b: ');

var firstString = 'Hello';
var secondString = 'World!';
var concat;

concat = firstString + ' ' + secondString;

console.log(concat);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el
      resultado de la suma en una 3er variable (utilizar length). 
*/

console.log('\n- Exercise 1.c: ');

var firstString = 'Java';
var secondString = 'Script';
var totalLength = 0;

totalLength = firstString.length + secondString.length;

console.log(totalLength);