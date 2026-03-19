// 1. Introdução de objeto Math
console.log(Math.PI); // Valor de PI
console.log(Math.SQRT2); // Raiz quadrda de 2


// 2. Arredondamento de valores
console.log(Math.round(4.4)); // Arredonda para o mais próximo (5)
console.log(Math.floor(4.6)); // Arredonda para baixo (4)
console.log(Math.ceil(4.1)); // Arredonda para cima (5)



// Escreva uma função anônima para arredondar troco para múltiplo de 5 centavos
const arredondarTroco = valor => Math.round(valor * 20) / 20;
console.log(arredondarTroco(2.17));


// 3. Valores Ateatórios 
console.log(Math.random()); // Número 0 e 1





