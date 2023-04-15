console.log("-------------------EXERCISE 6 : FUNCTIONS-------------------");

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
	if (isNaN(n1) || isNaN(n2)) {
		console.error('Uno de los parametros no es un numero.');
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
	if (typeof n === 'number' && n % 1 === 0){
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
	if (isNaN(n1) || isNaN(n2)) {
		console.error('Uno de los parametros no es un numero.');
		return NaN;
	}
	if (!validateInteger(n1)) {
		console.error('El numero ' + n1 + ' no era entero.');
		return Math.round(n1);
	}
	if (!validateInteger(n2)) {
		console.error('El numero ' + n2 + ' no era entero.');
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

function isNotFloat(n) {
	if (!validateInteger(n)) {
		console.error('El numero ' + n + ' no era entero.');
		return false;
	}
	return true;
}

function addNumbersE(n1, n2) {
	if (isNaN(n1) || isNaN(n2)) {
		console.error('Uno de los parametros no es un numero.');
		return NaN;
	}
	if (!isNotFloat(n1)) {
		return 'Redondeado a ' + Math.round(n1);
	}
	if (!isNotFloat(n2)) {
		return 'Redondeado a ' + Math.round(n2);
	}
	return n1 + n2;
}

console.log(addNumbersE(2, 4.5));
