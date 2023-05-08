function somarArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
    return soma;
  }

const array = [2, 4, 6, 8];
const resultado = somarArray(array);
console.log(`Soma: ${resultado}`);