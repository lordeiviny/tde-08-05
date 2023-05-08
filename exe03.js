function removeNegativos(array) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= 0) {
        resultado.push(array[i]);
      }
    }
    return resultado;
  }
  
  // Exemplo de uso
  const numeros = [-1, 1, -2, 2, -3, 3];
  const resultado = removeNegativos(numeros);
  console.log(resultado);