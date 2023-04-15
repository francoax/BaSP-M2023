console.log('--------------------------------------');
console.log('\tEXERCISE 3: ARRAYS');
console.log('--------------------------------------');

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
   "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses
    5 y 11 (utilizar console.log). 
*/

console.log('- Exercise 3.a: ');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Mes 5: ' + months[4] + ' y Mes 11: ' + months[10]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('\n- Exercise 3.b: ');

var sorted = months.sort();

console.log(sorted);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('\n- Exercise 3.c: ');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var element1 = 'Hello';
var element2 = 'World!';

months.unshift(element1);
months.push(element2);

console.log(months);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('\n- Exercise 3.d: ');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var shifted = months.shift();
var popped = months.pop();

console.log('First element removed: "' + shifted + '" and last element removed: "' + popped + '"');

// e. Invertir el orden del array (utilizar reverse).

console.log('\n- Exercise 3.e: ');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var reversed = months.reverse();

console.log(reversed);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('\n- Exercise 3.f: ');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var monthsString = months.join('-');

console.log(monthsString);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('\n- Exercise 3.g: ');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var copy = months.slice(4,11);

console.log(copy);