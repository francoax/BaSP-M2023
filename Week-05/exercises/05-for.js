console.log('--------------------------------------');
console.log('\tEXERCISE 5: FOR');
console.log('--------------------------------------');

/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
      una alerta utilizando cada una de las palabras.
*/

console.log('- Exercise 5.a: ');

var myArray = ['radium', 'rocket', 'rave', 'the', 'best'];

for (var i = 0; i < myArray.length; i++) {
  alert(myArray[i]);
}

/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
   modificada.
*/

console.log('\n- Exercise 5.b: ');

for (var i = 0; i < myArray.length; i++) {
  alert(myArray[i][0].toUpperCase() + myArray[i].substring(1));
}

/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
      bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con 
      la cadena completa.
*/

console.log('\n- Exercise 5.c: ');

var sentence = '';

for (var i = 0; i < myArray.length; i++) {
  if(i === 0) {
    sentence += myArray[i];
  } else {
    sentence += ' ' + myArray[i];
  }
}

console.log(sentence);
console.log(sentence.length);

/* d. Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
      es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número
      0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
*/

console.log('\n- Exercise 5.d: ');

var myArray = [];

for (var i = 0; i < 10; i++) {
  myArray.push(i);
}

console.log(myArray);