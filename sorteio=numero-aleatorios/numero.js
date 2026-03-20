// Variável global
const quantidadeNumeroRecentes = 5;

// Obter os elementos;
const sliderMin = document.querySelector('.intervalo__slider--min');
const sliderMax = document.querySelector('.intervalo__slider--max');

const botaoSortear = document.querySelector('.area__button');
const elementoNumero = document.querySelector('.area__numero');

const listaNumero = document.querySelector('.historico__lista');
const botaoLimparHistorico = document.querySelector('.sorteador__limpar');

const mensagem = document.querySelector('.area__mensagem');

// Atualizar interface com o valor de slider
const atualizarvalorSlider = () => {
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);

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
    elemento.textContent = valor;
};


// Função para criar a lista de números sorteados
const criarItemHistorico = (numero) => {
    const li = document.createElement('li');
    li.textContent = numero;

    li.addEventListener('click', () => {
        navigator.clipboard.writeText(numero);
    });
    return li
};

// Função para gerenciar a lista de números sorteados
const atualizarHistorico = (lista, item, limite) => {
    // coloca o número sorteado mais recente em primeiro
    lista.prepend(item);

    if (lista.children.length > limite) {
        lista.removeChild(lista.lastChild);
    }
};


// Função para limpar o histórico de sorteios
const limparHistorico = ()=> {
    if(confirm('Deseja realmente limpar o histórico de sorteios?'))
        listaNumero.textContent = '';
    elementoNumero.textContent = '';
};

// Eventos
botaoSortear.addEventListener('click', () => {
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);

    if (min > max) {
        mensagem.textContent = 'O valor mínimo deve ser menor ou igual ao valor máximo'
        return;
    }

    mensagem.textContent = '';

    const numeroSorteado = gerarNumeroAleatorio(min,max);

    atualizarTexto(elementoNumero, numeroSorteado);

    const item = criarItemHistorico(numeroSorteado);
    atualizarHistorico(listaNumero, item, quantidadeNumeroRecentes)
});

botaoLimparHistorico.addEventListener('click', limparHistorico);