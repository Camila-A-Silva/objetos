
// Fuñção anônima para gerar um número aleatório entre 1 e 15

// const gerarNumeroAleatorio = () => {
//     // Math.random() gera um número entre 0 e 1 (exclusivo)
//     let numeroAleatorio = Math.random();
//     console.log(`Sorteio: ${numeroAleatorio}`);

//     // Multiplicamos por 15 para obter um número entre 0 e 14 (exclusivo)
//     numeroAleatorio *= 15;
//     console.log(`Multiplicar: ${numeroAleatorio}`);

//     // Math.floor() para orredondar para baixo para um número inteiro
//     numeroAleatorio = Math.floor(numeroAleatorio);
//     console.log(`Arredondar: ${numeroAleatorio}`);

//     // Somamos 1 para obter um número entre 1 e 15 (inclusivo)
//     numeroAleatorio += 1;
//     console.log(`Somar 1: ${numeroAleatorio}`);

//     // Retorna o número aleatório
//     return numeroAleatorio;

// }

// // Aribuindo a função a uma variável
// let numeroAleatorio = gerarNumeroAleatorio();

// // Exibindo o númeor sorteado
// console.log(`Número sorteado: ${numeroSorteado}`)


// Código modificado para a escolha da quantidades dos número para ser sorteados

// const gerarNumeroAleatorio = (numero) => {

//     // Math.random() gera um número entre 0 e 1 (exclusivo)
//     let numeroAleatorio = Math.random();
//     console.log(`Sorteio: ${numeroAleatorio}`);

//     // Multiplicamos por 15 para obter um número entre 0 e 14 (exclusivo)
//     numeroAleatorio *= numero;
//     console.log(`Multiplicar: ${numeroAleatorio}`);

//     // Math.floor() para orredondar para baixo para um número inteiro
//     numeroAleatorio = Math.floor(numeroAleatorio);
//     console.log(`Arredondar: ${numeroAleatorio}`);

//     // Somamos 1 para obter um número entre 1 e 15 (inclusivo)
//     numeroAleatorio += 1;
//     console.log(`Somar 1: ${numeroAleatorio}`);

//     // Retorna o número aleatório
//     return numeroAleatorio;

// }

// // Aribuindo a função a uma variável
// let numeroAleatorio = gerarNumeroAleatorio(25);

// // Exibindo o númeor sorteado
// console.log(`Número sorteado: ${numeroSorteado}`)



// --------------- Código Otimizado-----------------

const gerarNumeroAleatorioR = (min = 1, max = 15) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;

};

// Exemplo de uso
console.log(gerarNumeroAleatorioR()); // Gera um número entre 1 e 15
console.log(gerarNumeroAleatorioR(10,15)); // Gera um número entre 5 e 10
