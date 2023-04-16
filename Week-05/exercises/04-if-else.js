console.log('--------------------------------------');
console.log('\tEXERCISE 4: IF-ELSE');
console.log('--------------------------------------');

/* a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
      mostrar una alerta con el mensaje “Greater than or equal to 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
*/

console.log('- Exercise 4.a: ');

var number = Math.random();

if (number >= 0.5) {
  alert('Greater than or equal to 0,5');
} else {
  alert('Lower than 0,5');
}

/* b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
      i.   “Bebe” si la edad es menor a 2 años;
      ii.  “Niño” si la edad es entre 2 y 12 años;
      iii. “Adolescente” entre 13 y 19 años;
      iv.  “Joven” entre 20 y 30 años;
      v.   “Adulto” entre 31 y 60 años;
      vi.  “Adulto mayor” entre 61 y 75 años;
      vii. “Anciano” si es mayor a 75 años.
*/

console.log('\n- Exercise 4.b: ');

var age = Math.round(Math.random() * 101);

if (age <= 2) {
  alert('Bebe');
} 
if ((age > 2) && (age < 13)) {
  alert('Niño');
} 
if ((age >= 13) && (age < 20)) {
  alert('Adolescente');
} 
if ((age >= 20) && (age <= 30)) {
  alert('Joven');
}
if ((age > 30) && (age <= 60)) {
  alert('Adulto');
} 
if ((age > 60) && (age <= 75)) {
  alert('Adulto mayor');
} 
if (age > 75) {
  alert('Anciano');
}