/* Exercícios:
  1. No molde da classe 'Senai', adicione o atributo 'statusFuncionamento' 
     que deve iniciar sempre como 'false' (escola fechada por padrão).
  2. Crie o método 'abrirEscola()' para alterar o status para 'true' e
     exibir uma mensagem de boas-vindas.
  3. Crie o método 'fecharEscola()' para alterar o status para 'false' e
     avisar que as atividades encerraram.
  4. Teste as funcionalidades nas instâncias criadas.
*/


class Senai {
    constructor(cidade, anoConstrucao, qtdeCursos) {
        this.cidade = cidade;
        this.anoConstrucao = anoConstrucao;
        this.qtdeCursos = qtdeCursos;
        this.statusFuncionamento = false; //Inicia como false (booleano)

        /* JS Moderno: Claculando a idade com base no ano atual do sistema */
        this.idade = new Date().getFullYear() - anoConstrucao;
    }

    abrirEscola() {
        this.statusFuncionamento = true;
        console.log(`[SISTEMA]: O SENAI ${this.cidade} agora está ABERTO. Bem-vindos!`);
    }

    fecharEscola(){
        this.statusFuncionamento = false;
        console.log(`[SISTEMA]: O SENAI ${this.cidade} agora está FECHADO. Até amanhã!`);
    }

    dadosEscola() {
        /* Usamos um operador ternário para exibir o status de forma amigável */
        const statusTexto = this.statusFuncionamento ? "ABERTO" : "FECHADA";

        console.log(`\n=== UNIDADE: ${this.cidade.toUpperCase()} ===`);
        console.log(`- Status: ${statusTexto}`);
        console.log(`- Idade: ${this.idade} anos | Cursos: ${this.qtdeCursos}`);
        console.log(`==========================================\n`)
    }
}



/* Criando instâncias para teste */
const escola1 = new Senai('Araraquara', 1990, 120);

/* 1. Verificando dados iniciais (deve estar fechada) */
escola1.dadosEscola();

// 2. Abrindo a escola
escola1.abrirEscola();
escola1.dadosEscola();

// 2. Fechando a escola
escola1.fecharEscola();
escola1.dadosEscola();
