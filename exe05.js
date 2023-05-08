function somarNumeros(num1, num2){
    return new Promise((resolve, reject) => {
        const resultado = num1 + num2;
        if(resultado %2 === 0){
            resolve(resultado);
        }else{
            reject("a soma e impar");
        }
    });
}

somarNumeros(2, 4)
.then(resultado => console.log(`a soma e ${resultado}`))
.catch(erro => console.error (erro));