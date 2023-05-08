function somaArray(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
}


const numeros = [2, 4, 6, 10];
const resultado = somaArray(numeros);
console.log(`Soma: ${resultado}`);