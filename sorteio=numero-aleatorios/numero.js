// Variável global
const quantidadeNumeroRecentes = 5;

// Obter os elementos
const sliderMin = document.querySelector('.intervalo__slider--min')
const sliderMax = document.querySelector('.intervalo__slider--max')

const botaoSorter = document.querySelector('.area__button');
const elementoNumero = document.querySelector('.area__numero');

const listaNumero = document.querySelector('.historico__lista');
const botaoLimparHistorico = document.querySelector('.sorteador__limpar');

const mensagem = document.querySelector('.area__mensagem');

// Atualizar interface com o valor de slider
const atualizarvalorSlider = () => {
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);
    console.log(min,max);

    // Exibir o valor de slider na interface
    document.querySelector('.intervalo__valor--min').textContent = min;
    document.querySelector('.intervalo__valor--max').textContent = max;
};

// Evento para atualizar o valor em tempo real
sliderMin.addEventListener('input', atualizarvalorSlider);
sliderMax.addEventListener('input', atualizarvalorSlider);

// Incializar interface com valores atuais
atualizarvalorSlider();

// Função para gerar um número aleatório
const gerarNumeroAleatorio = (min, max) => {
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1));
    numeroAleatorio += min;
    return numeroAleatorio;
}

// Função atualizar texto da interface com o número sorteado
const atualizarTexto = (elemento, valor) => {

};

