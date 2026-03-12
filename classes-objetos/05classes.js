/* CLASSE: É o molde ou "planta baixa". Define quais atributos e comportamentos 
    um objeto  */
class Senai{
    
    // Dentro de uma classe não precisa a palavra function

    descreverEscola() {
        // O 'this' refere-se à instância específica que está executando o código
        console.log(`O código ${this.codigo} pertence a Escola SENAI de ${this.cidade}.`)
    }
}

// Instância é uma ocorrência. Criação de um novo objeto
// Criando uma isntância (uma nova escola)

const senaiArqu = new Senai();
// Incrementando o objeto
senaiArqu.codigo = 603;
senaiArqu.cidade = 'Araraquara';

const senaiMat = new Senai();
senaiMat.codigo = 145;
senaiMat.cidade = 'Matão';

// Exibindo os dados no console
senaiArqu.descreverEscola();
senaiMat.descreverEscola();

