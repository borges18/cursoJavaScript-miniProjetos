//Escreva uma função que usa 2 números e retorna o maior entre eles.

let maiorValor = numMax(30,20);

function numMax(num1, num2) {
    if(num1 > num2)
        return num1;
    else return num2;
}

console.log(maiorValor);