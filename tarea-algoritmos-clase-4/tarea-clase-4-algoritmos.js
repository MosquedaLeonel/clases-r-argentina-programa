//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/* Desafío de programación #1: Imprimí los números del 1 al 10 */

function desafioDeProgramacion01() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
// desafioDeProgramacion01();

  /* Desafìo de programación  #2: Imprimí los números impares del 1 al 100 */

function desafioDeProgramacion02() {
  for (let i = 1; i <= 100; i = i + 2) {
		console.log(i);
  }
}

// desafioDeProgramacion02();

  /* Desafío de programación #3: Imprimí la tabla de multiplicación del 7 */

function desafioDeProgramacion03() {
	for (let i = 0; i <= 10; i++) {
		console.log (`7 x ${i} = ${7 * i}`);
	}
}

// desafioDeProgramacion03();

  /* Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9 */

function desafioDeProgramacion04() {
	for (let i = 1; i < 10; i++) {
		for (let j = 0; j <= 10; j++) {
			console.log(`${i} x ${j} = ${i * j}`);
		}
	}
}

// desafioDeProgramacion04();

  /* Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array. */

function desafioDeProgramacion05() {
	let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let suma = 0;

	for (let i of array) {
		suma += i;		
	}
	console.log(suma);
}

// desafioDeProgramacion05();

  /* Desafío de programación #6: Calcula 10! (10 factorial) */

function desafioDeProgramacion06 () {
	let factorial = 1;

	for (let i = 1; i <= 10; i++) {
		factorial *= i;
	}
	console.log(factorial);
}

// desafioDeProgramacion06();

  /* Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30 */

function desafioDeProgramacion07() {
	suma = 0;

	for (let i = 11; i <= 30; i = i + 2) {
		suma += i;
	}

	console.log(suma);
}

// desafioDeProgramacion07();

  /* Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit */

function desafioDeProgramacion08() {
	let gradosCelsius = 20;
	let gradosFahrenheit = celsiusAFahrenheit(gradosCelsius);
	console.log(gradosFahrenheit);

	function celsiusAFahrenheit(gradosCelsius) {
		let gradosFahrenheit = (gradosCelsius * 9/5) + 32;
		return gradosFahrenheit;
	}
}

// desafioDeProgramacion08()

  /* Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius */

function desafioDeProgramacion09() {
	gradosFahrenheit = 68;
	gradosCelsius = fahrenheitACelsius(gradosFahrenheit);
	console.log(gradosCelsius);

	function fahrenheitACelsius(gradosFahrenheit) {
		let gradosCelsius = 5/9 * (gradosFahrenheit - 32);
		return gradosCelsius; 
	}
}

// desafioDeProgramacion09();

  /* Desafío de programación #10: Calcula la suma de todos los números en un array de números */

function desafioDeProgramacion10() {
	let array = [1, 5, 10, 56, 25, 87];
	let suma = 0;

	for (let i of array) {
		suma += i;
	}

	console.log(suma);

}

// desafioDeProgramacion10();

  /* Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función) */

function desafioDeProgramacion11() {
	let array = [1, 2, 3, 4, 5, 6];
	let promedio = calcularPromedioDeUnArray(array) 
	console.log(`El promedio del array es ${promedio}`);

	function calcularPromedioDeUnArray(array) {
		let promedio;
		let suma = 0

		for (let i of array) {
			suma += i;
		}

		return promedio = suma / array.length;
	}
}

// desafioDeProgramacion11();

  /* Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos */

function desafioDeProgramacion12() {
	let array = [1, 2, -3, 4, -5, 6, -7, 8, -9];
	let numerosPositivos = obtenerNumerosPositivos(array);
	console.log(`Los numeros positivos del array son: ${numerosPositivos}`);

	function obtenerNumerosPositivos(array) {
		let numerosPositivos = [];

		for (let i of array) {
			if (i > 0) {
				numerosPositivos.push(i);
			}
		}

		return numerosPositivos;
	}
}

// desafioDeProgramacion12();

  /* Desafío de programación #13: Hallar el numero maximo en un array de numeros. */

function desafioDeProgramacion13() {
	let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 51, 496];
	let maximo = array[0];

	for (let i of array) {
		if (i > maximo) {
			maximo = i;
		}
	}

	console.log(`El numero maximo del array es: ${maximo}`);
}

// desafioDeProgramacion13();

  /* Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión */

function desafioDeProgramacion14() {
	let numerosFibonacci = [0, 1]

	for (let i = 0; numerosFibonacci.length <= 10; i++) {
		let suma = numerosFibonacci[i] + numerosFibonacci[i + 1];
		numerosFibonacci.push(suma);
	}

	console.log(numerosFibonacci);
}

// desafioDeProgramacion14();

  /* Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión */

function desafioDeProgramacion15() {
  let n = fibonacciN(10);
	
	function fibonacciN(n) {
    if (n <= 1) {
			return n;
    }
    else {
      return fibonacciN(n - 1) + fibonacciN(n - 2);
    }
  }
		 console.log(n);
}

// desafioDeProgramacion15();

  /* Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no. */

function desafioDeProgramacion16() {
	let numero = 13;
	let esPrimo = comprobarSiEsPrimo(numero);
	console.log(esPrimo);

	function comprobarSiEsPrimo (numero) {
		if (numero < 2) {
			return false;
		}
		for (let i = 2; i < numero; i++) {
			if (numero % i === 0) {
				return false;
			}
		}
		return true;
	}
}

// desafioDeProgramacion16();

  /* Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo */

function desafioDeProgramacion17() {
	let numero = 1519;
	let suma = 0
	numero = numero.toString();

	for (let i = 0; i < numero.length; i++) {
		suma += Number(numero[i]);
	}

	console.log(suma);
}

// desafioDeProgramacion17();

  /* Desafío de programación #18: Imprimir los primeros 100 números primos */

function desafioDeProgramacion18() {
	let numerosPrimos	= [];

	for (let numero = 2; numerosPrimos.length < 100; numero++) {
		let esPrimo = comprobarSiEsPrimo(numero);
		if (esPrimo) {
			numerosPrimos.push(numero);
		}	
	}

	console.log(numerosPrimos);

	function comprobarSiEsPrimo(numero) {
		if (numero === 2) {
			return true;
		}
		for (let i = 2; i < numero; i++) {
			if (numero % i === 0) {
				return false;
			}
		}
		return true;
	}
}

// desafioDeProgramacion18();

  /* Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número
   particular definido "alComienzo"
  Ejemplo:
    Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19] */

function desafioDeProgramacion19() {
	let numerosAMostrar = 5;
	let mayoresQue = 5;
	let resultado = [];

	for (let numero = mayoresQue + 1; resultado.length < numerosAMostrar; numero++) {
		esPrimo = comprobarSiEsPrimo(numero);
		if (esPrimo) {
			resultado.push(numero);
		}
	}

	console.log(resultado);

	function comprobarSiEsPrimo (numero) {
		if (numero === 2) {
			return true;
		}

		for (let i = 2; i < numero; i++) {
			if (numero % i === 0) {
				return false;
			}
		}

		return true;
	}

}

// desafioDeProgramacion19();

  /* Desafío de programación #20: Rotar un array hacia la izquierda una posición
  Ejemplo:
    [9,1,2,3,4] debería quedar como [1,2,3,4,9]
    [5] debería quedar como [5]
    [4,3,2,1] debería quedar como [3,2,1,4] */

function desafioDeProgramacion20() {

  let array = [9, 1, 2, 3, 4];	
  let firstPosition;

  console.log(array);

  firstPosition = array.shift();

	array.push(firstPosition);

  console.log(array);

}

// desafioDeProgramacion20();

  /* Desafío de programación #21: Rotar un array a la derecha una posición
  Ejemplo:
    [2,3,4,1] debería quedar como [1,2,3,4]
    [2,3] debería quedar como [3,2] */

function desafioDeProgramacion21() {

  let array = [2, 3, 4, 1];
  let lastPosition;

  console.log(array);

  lastPosition = array.pop();
  
  array.unshift(lastPosition)

  console.log(array);

}

// desafioDeProgramacion21();

  /* Desafío de programación #22: Invertir un array
  Ejemplo:
    [1,2,3,4] debería quedar como [4,3,2,1]
    [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
    [5,6,3] debería quedar como [3,6,5] */

function desafioDeProgramacion22() {

  let array = [1, 2, 3, 4];

  console.log(array);
  console.log(array.reverse());
}

// desafioDeProgramacion22();

  /* Desafío de programación #23: Invertir una cadena de caracteres
  Ejemplo:
    "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
    "bienvenido" debería quedar como "odinevneib" */

function desafioDeProgramacion23() {

  let str = 'dabale arroz a la zorra el abad';

  console.log(str);
  /*
  str = str.split('');
  console.log(str);
  str = str.reverse();
  console.log(str);
  str = str.join('');
  console.log(str);
  */

  function invertString() {
    return str.split('').reverse().join('');
  }

  console.log(invertString(str));

}

// desafioDeProgramacion23();

  /* Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo
  arreglo
  Ejemplo:
    [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"] */

function desafioDeProgramacion24() {

  let array1 = [1, 2, 3];
  let array2 = ['a', 'b', 'c'];

  let nuevoArray = concatenarDosArrays(array1, array2);

  function concatenarDosArrays(array1, array2) {
    let nuevoArray = [];

    for (let i = 0; i < array1.length; i++) {
      nuevoArray.push(array1[i]);
    }
    for (let j = 0; j < array2.length; j++) {
      nuevoArray.push(array2[j]);
    }

    return nuevoArray;
  }

  console.log(nuevoArray);

  /* Otra forma:
  function concatTwoArrays(array1, array2) {
    let newArray;
    newArray = array1.concat(array2);
    return newArray;

  } */
}

// desafioDeProgramacion24();

  /* Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) 
  de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
  Nota: Esto se llama "diferencia simétrica" entre conjuntos
  Ejemplo:
    [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
    [5,10,3] y [10,1] debería quedar como [5,3,1]  */

function desafioDeProgramacion25() {
  let array1 = [1, 2, 3];
  let array2 = [3, 7, 11];
  let diferenciaSimetrica = obtenerDiferenciaSimetrica(array1, array2);
  console.log(diferenciaSimetrica);

  function obtenerDiferenciaSimetrica(array1, array2) {
    let result = [];

    for (let i = 0; i < array1.length; i++) {
      if (!array2.includes(array1[i])) {
        result.push(array1[i]);
      }
    }

    for (let j = 0; j < array2.length; j++) {
      if (!array1.includes(array2[j])) {
        result.push(array2[j]);
      }
    }
    return result;
  }
}

// desafioDeProgramacion25();

  /* Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se
   encuentren en el primer array, pero no en el segundo
  Nota; Esto se llama "resta" entre conjuntos
  Ejemplo:
    [5,1,2,3,4] y [3,4] debería devolver [5,1,2] */

function desafioDeProgramacion26() {
  let array1 = [5, 1, 2, 3, 4];
  let array2 = [3, 4];
  let restaEntreConjuntos = obtenerRestaEntreConjuntos(array1, array2);
  console.log(restaEntreConjuntos);

  function obtenerRestaEntreConjuntos(array1, array2) {
    let resultado = [];

    for (let i = 0; i < array1.length; i++) {
      if (!array2.includes(array1[i])) {
        resultado.push(array1[i]);
      }
    }

    return resultado;
  }

    /* Otra Forma:
  
  function subtractionOfSets (array1, array2) {
  
    result = array1.filter(x => !array2.includes(x));
    console.log(result);
  
  } */
  
}

// desafioDeProgramacion26();

  /* Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos 
  distintos
  Ejemplo:
     [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0] */


function desafioDeProgramacion27() {

  let array = [1, 2, 3, 4, 5, 4, 3, 2, 1, 0];
  let resultado = obtenerElementosDistintos(array);
  console.log(resultado);


  function obtenerElementosDistintos(array) {
    let resultado = [];

    for (let i = 0; i < array.length; i++) {
      if (!estaEnElArray(array[i], resultado)) {
        resultado.push(array[i]);
      }
    }

    return resultado;
  }

  function estaEnElArray(n, array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === n)
        return true;
    }

    return false;
  }

    /* Otra forma:
  function differentElements (array) {
  
    let result = array.filter((item,index)=>{
      return array.indexOf(item) === index;
    })
    console.log(result);
  
  }
	 */
}

// desafioDeProgramacion27();   


  /* Desafío de programación #28: Calculate the sum of first 100 prime numbers. */

function desafioDeProgramacion28() {

  let numerosPrimos = obtenerNumerosPrimos();
  let sumaNumerosPrimos = sumarNumerosPrimos(numerosPrimos);
  console.log(sumaNumerosPrimos);

  function obtenerNumerosPrimos() {
    let numerosPrimos = [];
    for (let numero = 2; numerosPrimos.length < 100; numero++) {
      if (esUnNumeroPrimo(numero)) {
        numerosPrimos.push(numero);
      }
    }
		
    return numerosPrimos;
  }

  function esUnNumeroPrimo(numero) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    if (numero === 2) {
      return true;
    }
    else {
      return true;
    }
  }

  function sumarNumerosPrimos(numerosPrimos) {
    let suma = 0;

    for (let numero of numerosPrimos) {
      suma += numero;
    }

    return suma;
  }
}

// desafioDeProgramacion28();

/* Desafío de programación #29: Print the distance between the first 100 prime numbers. */

function desafioDeProgramacion29 () {
  let numerosPrimos = obtenerNumerosPrimos();
  let distancia = obtenerDistancia(numerosPrimos);

  function obtenerNumerosPrimos() {
    let numerosPrimos = [];
    for (let numero = 2; numerosPrimos.length < 100; numero++) {
      let esPrimo = comprobarSiEsPrimo(numero);
      if (esPrimo) {
        numerosPrimos.push(numero);
      }
    }
    
    return numerosPrimos;
  }

  function comprobarSiEsPrimo (numero) {
    if (numero === 2) {
      return true;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }

  function obtenerDistancia (numerosPrimos) {
    for (let i = 99; i > 0; i--) {
      let distancia = (numerosPrimos[i] - numerosPrimos[i - 1]);
      console.log(`La distancia entre ${numerosPrimos[i]} y ${numerosPrimos[i - 1]} es ${distancia}`);
    }
  }
}

// desafioDeProgramacion29();

/* Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received 
as strings and the result should be also provided as string. */

function desafioDeProgramacion30_a () {
  let numero1 = '15191919819158169165641651654';
  console.log(numero1);
  let numero2 = '6516698479456164199865161651616123';
  console.log(numero2);

  if (numero1.length < numero2.length) {
      numero1 = igualarCantidadDeCifras(numero1, numero2);
  }
  if (numero2.length < numero1.length) {
      numero2 = igualarCantidadDeCifras(numero2, numero1);
  }


  resultadoSuma = sumar(numero1, numero2)
  console.log(resultadoSuma);

  function igualarCantidadDeCifras (numero1, numero2) {
      for (let i = 0; i < numero2.length; i++) {
          if (numero1.length < numero2.length) {
              numero1 = '0' + numero1;
          }
      }

      return numero1;

  }

  function sumar(numero1, numero2) {
      let resultadoSuma = '';
      let meLlevo = 0;

      for (let i = numero1.length; i > 0; i--) {
          let n1 = Number(numero1[i - 1]);
          let n2 = Number(numero2[i - 1]);
          let suma = n1 + n2 + meLlevo;
          let sumaDeDigitos = suma % 10;
          meLlevo = suma >= 10 ? 1 : 0;
          resultadoSuma = sumaDeDigitos.toString() + resultadoSuma;
      }

      if(meLlevo > 0) {
          resultadoSuma = meLlevo + resultadoSuma;
      }
      return resultadoSuma;
  }

}

// desafioDeProgramacion30_a ();



/* Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size.
 The numbers are received as strings and the result should be also provided as string. */
/* Desafío de programación #31-a. Create a function that will return the number of words in a text */

function desafioDeProgramacion31_a () {
    let texto = 'La razon de cambio de la temperatura de un cuerpo con respecto al tiempo t es proporcional a la diferencia entre la temperatura A del medio ambiente y la temperatura T del cuerpo.';
    let numeroDePalabrasEnTexto = obtenerNumeroDePalabras(texto);
    console.log(numeroDePalabrasEnTexto);

    function obtenerNumeroDePalabras(texto) {
        let separacionDePalabras = ' '; 
        let contador = 0;

        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === separacionDePalabras || texto[i] === texto[texto.length - 1]) {
                contador++;
            }
        }

        return contador;
    }
}

// desafioDeProgramacion31_a();

/* Desafío de programación #31-b. Create a function that will return the number of words in a text */

/* Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text */

function desafioDeProgramacion32 () {
  let texto = 'la razon de cambio de la temperatura de un cuerpo con respecto al tiempo t es proporcional a la diferencia entre la temperatura A del medio ambiente y la temperatura T del cuerpo.';
  console.log(texto);
  let textoModificado = reemplazarPrimeraLetra (texto);
  console.log(textoModificado);

  function reemplazarPrimeraLetra (texto) {
      let textoModificado = '';
      let array = [];

      for (let i = 0; i < texto.length; i++) {
          array.push(texto[i]);
      }
      for (let j = 0; j < array.length; j++) {
          if (j === 0) {
              array[j] = array[j].toUpperCase();
              textoModificado += array[j]; 
          } else if (array[j - 1] === ' ') {
              array[j] = array[j].toUpperCase();
              textoModificado += array[j]
          } else {
              textoModificado += array[j];
          }
      }
      
      return textoModificado;
  }
}

// desafioDeProgramacion32();

/* Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string */

function desafioDeProgramacion33 () {
  let numeros = '1.2, 15.2, 64.5, 6.64, 55.5, 1.8';
  let coma = ',';
  let arrayNumeros = numeros.split([coma]);
  let suma = calcularSuma(arrayNumeros);
  console.log(suma);

  function calcularSuma(array) {
      let suma = 0;

      for (let elemento of array) {
          suma += parseFloat(elemento);
      }
      return suma;
  }

}

// desafioDeProgramacion33();

/*
Desafío de programación #34. Create a function that will return an array with words inside a text */

function desafioDeProgramacion34 (){
  let texto = 'Create a function that will return an array with words inside a text.';
  let array = convertirTextoEnArray(texto);
  console.log(array);

  function convertirTextoEnArray(texto) {
    let array = [];
    array = texto.split(' ');
    return array;
  }
}

// desafioDeProgramacion34();

/*
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals). */ 











