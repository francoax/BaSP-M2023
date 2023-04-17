console.log('--------------------------------------');
console.log('\tEXERCISE 6: FUNCTIONS');
console.log('--------------------------------------');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el 
      resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/

console.log('- Exercise 6.a: ');

function suma(n1, n2) {
  return n1 + n2;
}

var result = suma(5, 10);

console.log(result);

/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un
      número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor
      NaN como resultado.
*/

console.log('\n- Exercise 6.b: ');

function suma(n1, n2) {
	if (typeof n1 !== 'number' || typeof n2 !== 'number') {
		alert('One of the parameters wasnt a number');
		return NaN;
	}
	return n1 + n2;
}

var result = suma(2, 'b');

console.log(result);

/* c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número
			entero.
*/

console.log('\n- Exercise 6.c: ');

function validateInteger (n) {
	if (typeof n === 'number' && n % 1 === 0) {
		return true;
	}
	return false;
}

console.log(validateInteger(5));

/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que
			valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el
			número convertido a entero (redondeado).
*/

console.log('\n- Exercise 6.d: ');

function addNumbers(n1, n2) {
	if (typeof n1 !== 'number' || typeof n2 !== 'number') {
		alert('The number ' + n + ' wasnt an integer');
		return NaN;
	}
	if (!validateInteger(n1)) {
		alert('The number ' + n1 + ' wasnt an integer');
		return Math.round(n1);
	}
	if (!validateInteger(n2)) {
		alert('The number ' + n2 + ' wasnt an integer');
		return Math.round(n2);
	}
	return n1 + n2;
}

var result = addNumbers(4, 5.6);

console.log(result);

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando
			que todo siga funcionando igual que en el apartado anterior.
*/

console.log('\n- Exercise 6.e: ');

function validateNumbers(n1, n2) {
	if (typeof n1 !== 'number' || typeof n2 !== 'number') {
		alert('One of the numbers wasnt a number');
		return NaN;
	}
	if (!validateInteger(n1)) {
		alert('The number ' + n1 + ' wasnt an integer');
		return Math.round(n1);
	}
	if (!validateInteger(n2)) {
		alert('The number ' + n2 + ' wasnt an integer');
		return Math.round(n2);
	}
	return true;
}

function addDefinitive(n1, n2) {
	var validation = validateNumbers(n1, n2);
	if (typeof validation === 'number') {
		return validation;
	}
	return n1 + n2;
}

console.log(addDefinitive(2, 4));