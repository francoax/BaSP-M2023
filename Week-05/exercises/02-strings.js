console.log('--------------------------------------');
console.log('\tEXERCISE 2: STRINGS');
console.log('--------------------------------------');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
      (utilizar toUpperCase).
*/

console.log('- Exercise 2.a: ');

var myString = 'Hello World!';

console.log(myString.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
      primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring). 
*/

console.log('- Exercise 2.b: ');

var myString = 'Clippingpong';
var mySubString = myString.substring(0, 5);

console.log(mySubString);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
     últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). 
*/

console.log('- Exercise 2.c: ');

var myString = 'This is a string';
var mySubString = myString.substring(myString.length - 3);

console.log(mySubString);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la
      primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
      (utilizar substring, toUpperCase, toLowerCase y el operador +). 
*/

console.log('- Exercise 2.d: ');

var myString = 'this is AnotHer StRing';
var firstLetter = myString[0].toUpperCase();
var mySubString = myString.substring(1).toLowerCase();
var finalString = firstLetter + mySubString;

console.log(finalString);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
      Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). 
*/

console.log('\n- Exercise 2.e: ');

var myString = 'ThisStringHas gaps';
var gapIndex = myString.indexOf(' ');

console.log(gapIndex);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
   Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
   palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y
   el operador +). 
*/

console.log('\n- Exercise 2.f: ');

var myString = 'argentiNosAurus quetzaLcoaTlus';
var gap = myString.indexOf(' ');

var firstSubString = myString.substring(0, gap).toLowerCase();
var firstLetter = firstSubString[0].toUpperCase();

firstSubString = firstLetter + firstSubString.substring(1);

var secondSubString = myString.substring(gap+1).toLowerCase();
var firstLetter = secondSubString[0].toUpperCase();

secondSubString = firstLetter + secondSubString.substring(1);

var finalString = firstSubString + ' ' + secondSubString;

console.log(finalString);


