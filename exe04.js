function multiplicaPorDois(array) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
      resultado.push(array[i] * 2);
    }
    return resultado;
  }
  
  // Exemplo de uso
  const numeros = [1, 2, 3, 4, 5];
  const resultado = multiplicaPorDois(numeros);
  console.log(resultado);