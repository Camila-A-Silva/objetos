/* DICA DIDÁTICA: Uma classe pode calcular informações sozinhas (como a idade) sem que o usuário precise digita. */

class Senai {
    constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.anoConstrucao = anoConstrucao;
        this.qtdeCursos = qtdeCursos;

        /* JS Moderno: Claculando a idade com base no ano atual do sistema */
        this.idade = new Date().getFullYear() - anoConstrucao;
    }

    dadosEscola() {
        console.log(`\n=== RELATÓRIO DE CADASTRO: ${this.cidade.toUpperCase()} ===`);
        console.log(`- Código: ${this.codigo}`);
        console.log(`- Fundação: ${this.anoConstrucao} (${this.idade} anos de hintória)`);
        console.log(`- Capacidade: ${this.qtdeCursos} cursos ativos.`);
        console.log(`==========================================\n`)
    }
}


/* FUNÇÃO DE COMPARAÇÃO: Recebe dois objetos como parãmetros.
 Melhoria: Adicionado tratamento para casos de quantidades iguais. */

const compararEscolas = (e1, e2) => {
    console.log(`> Comparando oferta de cursos: ${e1.cidade} vs ${e2.cidade}...`)

    if (e1.qtdeCursos > e2.qtdeCursos) {
        console.log(`Resultado: O SENAI ${e1.cidade} possui mais cursos.`);
    } else if (e2.qtdeCursos > e1.qtdeCursos) {
        console.log(`Resultado: O SENAI ${e2.cidade} possui mais cursos.`);
    } else {
        console.log(`Resultado: Ambas as unidades possuem a mesma quantidade de cursos.`);
    }
    console.log(`Status: ${e1.cidade} (${e1.qtdeCursos}) | ${e2.cidade} (${e2.qtdeCursos})\n`);
}

/* Criando instâncias para teste */
const escola1 = new Senai(603, 'Araraquara', 1990, 120);
const escola2 = new Senai(145, 'São Carlos', 2009, 85);


/* Execução do fluxo */
escola1.dadosEscola();
escola2.dadosEscola();
compararEscolas(escola1, escola2);
