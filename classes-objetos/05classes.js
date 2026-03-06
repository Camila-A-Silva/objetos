// Classe é uma definição. Como um objeto deve ser.
class Senai{
    codigo;
    cidade;
    // Dentro de uma classe não precisa a palavra function

    descreverEscola() {
        
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

